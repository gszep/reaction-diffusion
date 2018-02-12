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

// input variables
in vec4 value[NCOMPONENTS];

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


// calculate discrete laplacian
vec4 getLaplacian(sampler2D sampler) {
	return (
		4.0*texture(sampler,fract(left))+
		4.0*texture(sampler,fract(right))+
		4.0*texture(sampler,fract(bottom))+
		4.0*texture(sampler,fract(top))+
		1.0*texture(sampler,fract(topleft))+
		1.0*texture(sampler,fract(topright))+
		1.0*texture(sampler,fract(bottomleft))+
		1.0*texture(sampler,fract(bottomright))-
		20.0*texture(sampler,fract(centre))

	) / 6.0;
}


// this propagates the reaction-diffusion system
void main() {

	// calculate laplacians
	vec4 laplacian[NCOMPONENTS];
	vec4 x[NCOMPONENTS];

	for( int i=0; i < NCOMPONENTS; i++ ) {
		//value[i] = texture(component[i],centre);
		laplacian[i] = getLaplacian(component[i]);
		x[i] = vec4(0.0,0.0,0.0,0.0);
	}

	// user perturbations
	if(brush.x > 0.0) {

		float dist = distance(centre,brush.xy);
		float radius = brush.z;
		int componentIndex = int(brush.w);

		//  within radius set all comonents to zero except chosen one
		if( dist < radius ) {
			for (int i=0; i<NCOMPONENTS; i++) {

				if (i == componentIndex)
					x[i].r = 1.0;
				else
					x[i].r = 0.0;
			}
		}
	}

	// output components to buffer
	outputComponent[0] = x[0]+value[0] + timeStep*( laplacian[0] + value[1]*value[0] - value[0]*value[2] );
	outputComponent[1] = x[1]+value[1] + timeStep*( laplacian[1] - value[1]*value[0] - value[1]*value[2] + 2.0*value[0]*value[2] );
	outputComponent[2] = x[2]+value[2] + timeStep*( laplacian[2]*diffusionRatio + value[1]*value[2] - value[0]*value[2] );
}
