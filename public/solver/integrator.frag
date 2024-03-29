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

	// update components
	value[0] = texture(component[0],location);
	laplacian[0] = getLaplacian(component[0],size);

	value[1] = texture(component[1],location);
	laplacian[1] = getLaplacian(component[1],size);

	value[2] = texture(component[2],location);
	laplacian[2] = getLaplacian(component[2],size);

	value[3] = texture(component[3],location);
	laplacian[3] = getLaplacian(component[3],size);

	value[4] = texture(component[4],location);
	laplacian[4] = getLaplacian(component[4],size);

	value[5] = texture(component[5],location);
	laplacian[5] = getLaplacian(component[5],size);

	value[6] = texture(component[6],location);
	laplacian[6] = getLaplacian(component[6],size);

	// user perturbations
	if(brush.x > 0.0) {

		float dist = distance(location,brush.xy);
		float radius = brush.z;
		int componentIndex = int(brush.w);

		//  within radius set all comonents to zero except chosen one
		if( dist < radius ) {
			for (int i=0; i<NCOMPONENTS; i++) {

				if (i == componentIndex)
					value[i] += vec4(1.0);
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
	vec4 R = value[2];
	vec4 C12 = value[3];
	vec4 S = value[4];
	vec4 L = value[5];
	vec4 T = value[6];

	// output components to buffer
	outputComponent[1] = C6 + dt*( laplacian[1]*diffusion[1] ); // C6
	outputComponent[2] = R +  dt*( 1.0/(1.0+T*T*T*T) - R ); // R
	outputComponent[3] = C12+ dt*( laplacian[3]*diffusion[3] ); // C12
	outputComponent[4] = S +  dt*( 1.0/(1.0+L) - S ); // S
	outputComponent[5] = L +  dt*( rate[0]*(R*R*C6+rate[2])/(rate[4]*R*R*C6+1.0) - L ); // L
	outputComponent[6] = T +  dt*( rate[1]*(S*S*C12+rate[3])/(rate[5]*S*S*C12+1.0) - T ); // T

	// pass forward random seed
	outputComponent[0] = state;
}
