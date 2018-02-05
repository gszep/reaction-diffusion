#version 300 es
#define NCOMPONENTS 3

// use 16-bit preicision floats
precision highp float;

// components and temporal discretisation
uniform sampler2D component[NCOMPONENTS];
out vec4 outputComponent[NCOMPONENTS];

uniform float spaceStep;
uniform float timeStep;

// user perturbation
uniform vec4 brush;

// input coordinate neighbourhood
in vec2 centre;
in vec2 left;
in vec2 right;
in vec2 top;
in vec2 bottom;

in vec2 topleft;
in vec2 topright;
in vec2 bottomleft;
in vec2 bottomright;

// parameters
uniform float diffusionRatio;

// variables
struct Coordinate {
	vec4 point;
	vec4 gradient;
};


// calculate discrete laplacian
Coordinate laplacian(sampler2D sampler) {

	// values of point
	vec4 point = texture(sampler,fract(centre));

	// construct point and gradient
	Coordinate coordinate;
	coordinate.point = point;
	coordinate.gradient = (
		4.0*texture(sampler,fract(left))+
		4.0*texture(sampler,fract(right))+
		4.0*texture(sampler,fract(bottom))+
		4.0*texture(sampler,fract(top))+
		1.0*texture(sampler,fract(topleft))+
		1.0*texture(sampler,fract(topright))+
		1.0*texture(sampler,fract(bottomleft))+
		1.0*texture(sampler,fract(bottomright))-
		20.0*point

	) / 6.0;

	return coordinate;
}


// this propagates the reaction-diffusion system
void main() {

	// calculate laplacians
	Coordinate coordinate[NCOMPONENTS];
	for( int i=0; i < NCOMPONENTS; i++ ) {
		coordinate[i] = laplacian(component[i]);
	}

	// user perturbations
	if(brush.x > 0.0) {

		float location = distance(centre,brush.xy);
		float radius = brush.z;
		int componentIndex = int(brush.w);

		//  within radius set all comonents to zero except chosen one
		if( location < radius ) {
			for (int i=0; i<NCOMPONENTS; i++) {

				if (i == componentIndex)
					coordinate[i].point.r = 1.0;
				else
					coordinate[i].point.r = 0.0;
			}
		}
	}

	// output components to buffer
	outputComponent[0] = coordinate[0].point + timeStep*( coordinate[0].gradient + coordinate[1].point*coordinate[0].point - coordinate[0].point*coordinate[2].point );
	outputComponent[1] = coordinate[1].point + timeStep*( coordinate[1].gradient - coordinate[1].point*coordinate[0].point - coordinate[1].point*coordinate[2].point + 2.0*coordinate[0].point*coordinate[2].point );
	outputComponent[2] = coordinate[2].point + timeStep*( coordinate[2].gradient*diffusionRatio + coordinate[1].point*coordinate[2].point - coordinate[0].point*coordinate[2].point );
}
