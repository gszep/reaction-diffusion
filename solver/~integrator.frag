#version 130

// vertex coordinates
varying vec2 centre;
varying vec2 left;
varying vec2 right;
varying vec2 top;
varying vec2 bottom;

varying vec2 topleft;
varying vec2 topright;
varying vec2 bottomleft;
varying vec2 bottomright;

// temporal discretisation
uniform float timeStep;

// components as textures
uniform sampler2D component[2]; // !! do not change name, only change number

// parameters
uniform float diffusionRatio;
uniform vec4 brush;


// random number generator
struct RandomResult {
	vec4 state;
	float value;
};

int TausStep(int z, int S1, int S2, int S3, int M) {
	//uint b = (((z << S1) ^ z) >> S2);
	return (((z & M) << S3) ^ b);
}

int LCGStep(int z, int A, int C) {
	return (A * z + C);
}

RandomResult Random(vec4 state) {
	// state.x = TausStep(state.x, 13, 19, 12, 4294967294);
	// state.y = TausStep(state.y, 2, 25, 4, 4294967288);
	// state.z = TausStep(state.z, 3, 11, 17, 4294967280);
	// state.w = LCGStep(state.w, 1664525, 1013904223);

	RandomResult result;
	result.state = state;
	result.value = 2.3283064365387e-10; //* (state.x ^ state.y ^ state.z ^ state.w);

	return result;
}

// variables
struct Coordinate {
	vec4 point;
	vec4 gradient;
};


// calculate discrete laplacian
Coordinate laplacian(sampler2D texture) {

	// values of point
	vec4 point = texture2D(texture,fract(centre));

	// construct point and gradient
	Coordinate coordinate;
	coordinate.point = point;
	coordinate.gradient = (
		4.0*texture2D(texture,fract(left))+
		4.0*texture2D(texture,fract(right))+
		4.0*texture2D(texture,fract(bottom))+
		4.0*texture2D(texture,fract(top))+
		1.0*texture2D(texture,fract(topleft))+
		1.0*texture2D(texture,fract(topright))+
		1.0*texture2D(texture,fract(bottomleft))+
		1.0*texture2D(texture,fract(bottomright))-
		20.0*point

	) / 6.0;

	return coordinate;
}


// this propagates the reaction-diffusion system
void main() {

	// calculate laplacians
	Coordinate coordinate;
	coordinate = laplacian(component[0]);

	// user perturbations
	if(brush.x > 0.0) {

		float location = distance(centre,brush.xy);
		float radius = brush.z;
		int componentIndex = int(brush.w);

		//  within radius set all comonents to zero except chosen one
		if( location < radius ) {

			if (componentIndex == 0)
				coordinate.point = vec4(1.0,1.0,1.0,1.0);
			if (componentIndex == 2)
				coordinate.point = vec4(-1.0,-1.0,-1.0,-1.0);
		}
	}

	// output components to buffer
	vec4 seed = texture2D(component[1],fract(centre));
	RandomResult x = Random(seed);
	vec4 noise = 0.01*vec4(x.value,x.value,x.value,x.value);
	gl_FragData[0] = coordinate.point + timeStep*( coordinate.gradient ) + noise;
	gl_FragData[1] = x.state;
}
