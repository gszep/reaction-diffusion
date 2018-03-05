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
					value[1] = vec4(1.0);
				else
					value[1] = vec4(-1.0);
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

	// lowp uint sum = texture(samp, vec2(vTC.x+h, vTC.y)).g;
	// sum += texture(samp, vec2(vTC.x-h, vTC.y)).g;
	// sum += texture(samp, vec2(vTC.x, vTC.y+h)).g;
	// sum += texture(samp, vec2(vTC.x, vTC.y-h)).g;

	// vec4 interactions = vec4(0.0);
	// for (int i=1; i < 10; i++) {
	// 	for (int j=1; j < 10; j++) {
	// 		// // float dx = Uniform(-0.005,0.005);
	// 		// // float dy = Uniform(-0.005,0.005);
	// 		// vec2 dr = texture(component[2],fract(location+1.0/vec2(i,j))).xy;
	// 		interactions +=
	// 	}
	// }
	vec4 interactions = vec4(0.0);
	float n = 10.;//float(size.x*size.y);
	for (int i=0; i < int(n); i++) {
		interactions += Uniform(-1./n,1./n)*texture(component[1], vec2(Uniform(0.,1.),Uniform(0.,1.)));
	}

	// output components to buffer
	outputComponent[1] = value[1] + dt*( 0.0*laplacian[1]*diffusion[1] + interactions );
	outputComponent[2] = value[2];

	// pass forward random seed
	outputComponent[0] = state;
}
