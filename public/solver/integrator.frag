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
					value[i] = vec4(1.0);
				else
					value[i] = vec4(0.0);
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

	// output components to buffer
	outputComponent[1] = value[1] + dt*( laplacian[1]*diffusion[1] - deg[0]*value[1] + rate[0]*(value[4]*value[4]+rate[4])/(value[4]*value[4]+rate[5]) );
	outputComponent[2] = value[2] + dt*( laplacian[2]*diffusion[2] - deg[1]*value[2] + rate[1]*(rate[6]+value[1]*value[1]*value[1]*value[1])/(1.0+value[1]*value[1]*value[1]*value[1]) );
	outputComponent[3] = value[3] + dt*( laplacian[3]*diffusion[3] - deg[2]*value[3] + rate[2]*(value[2]*value[2]+rate[7])/(value[2]*value[2]+rate[8]) );
	outputComponent[4] = value[4] + dt*( laplacian[4]*diffusion[4] - deg[3]*value[4] + rate[3]*(rate[9]+value[3])/(1.0+value[3]) );

	// pass forward random seed
	outputComponent[0] = state;
}
