// #include "include/integrator/*"

// --- fragment shader ---
// propagates the reaction-diffusion system
// according to forward-euler discretisation

void main() {

	vec4 value[NCOMPONENTS];
	vec4 laplacian[NCOMPONENTS];

	// get random seed
	state = texture(component[0],location);

	// calculate laplacians
	ivec2 size = textureSize(component[0],0);
	for( int i=0; i < NCOMPONENTS; i++ ) {

		value[i] = texture(component[i],location);
		laplacian[i] = getLaplacian(component[i],size);
	}

	// user perturbations
	if(brush.x > 0.0) {

		float dist = distance(location,brush.xy);
		float radius = brush.z;
		int componentIndex = int(brush.w);

		//  within radius set all comonents to zero except chosen one
		if( dist < radius ) {
			for (int i=0; i<NCOMPONENTS; i++) {

				if (i == componentIndex)
					value[i] = vec4(2.0);
			}
		}
	}

	// choose stable timeStep as default
	float dt;
	if (timeStep==0.0) {
		dt = 1.0 / ( float(size.x)*( 8.0*float(size.y)*diffusion[3] + 0.018 ));
	}
	else {
		dt = timeStep;
	}

	// human readable values
	vec4 C6 = value[1];
	vec4 L = value[2];
	vec4 C12 = value[3];
	vec4 T = value[4];
	vec4 R = value[5];
	vec4 S = value[6];

	// output components to buffer
	outputComponent[1] = C6 + dt*( laplacian[1]*diffusion[1] ); // C6
	outputComponent[2] = L +  dt*( rate[0]*(R*R*C6+rate[2])/(rate[4]*R*R*C6+1.0) - L ); // L
	outputComponent[3] = C12+ dt*( laplacian[3]*diffusion[3] ); // C12
	outputComponent[4] = T +  dt*( rate[1]*(S*S*C12+rate[3])/(rate[5]*S*S*C12+1.0) - T ); // T
	outputComponent[5] = R +  dt*( 1.0/(1.0+T*T*T*T) - R ); // R
	outputComponent[6] = S +  dt*( 1.0/(1.0+L) - S ); // S

	// pass forward random seed
	outputComponent[0] = state;
}
