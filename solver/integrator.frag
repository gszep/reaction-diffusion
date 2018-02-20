// #include "include/integrator/*"

// --- fragment shader ---
// propagates the reaction-diffusion system
// according to forward-euler discretisation

void main() {

	vec4 value[NCOMPONENTS];
	vec4 laplacian[NCOMPONENTS];

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
					value[i] = vec4(-1.0);
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

	// output components to buffer
	outputComponent[1] = value[1] + vec4(Uniform(-1.0,1.0));
}
