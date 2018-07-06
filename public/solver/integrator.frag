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
		dt = 1.0 / ( float(size.x)*( 8.0*float(size.y)*diffusion[1] + 0.018 ));
	}
	else {
		dt = timeStep;
	}

	// random noise
	vec4 eta = vec4(noise*Uniform(0.,1.));
	vec4 eps = vec4(noise*Uniform(0.,1.));

	// output components to buffer
	outputComponent[1] = value[1] + dt*( laplacian[1]*diffusion[1] + rate[0]*value[1]*value[1] / (diss[0]+value[1]*value[1]) - rate[1]*value[1]*value[3] / (diss[1]+value[3]) );
	outputComponent[2] = value[2] + dt*( laplacian[2]*diffusion[2] );
	outputComponent[3] = value[3] + dt*( laplacian[3]*diffusion[3] + rate[2]*value[1]*value[1] / (diss[2]+value[1]*value[1]) - rate[3]*value[3] );

	// pass forward random seed
	outputComponent[0] = state;
}
