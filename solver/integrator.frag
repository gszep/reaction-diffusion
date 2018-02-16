#version 300 es
#define NCOMPONENTS 3

// use 16-bit preicision
precision highp float;
precision highp int;

// chemical components
uniform highp sampler2D component[NCOMPONENTS];
out vec4 outputComponent[NCOMPONENTS];
in vec2 location;

// parameters
uniform float timeStep;
uniform vec4 brush;
uniform float diffusionRatio;

// calculate discrete laplacian
vec4 getLaplacian(sampler2D sampler) {

	// get dicrete neighbourhood
	ivec2 size = textureSize(component[0],0);
	float dx = 1.0 / float(size.x);
	float dy = 1.0 / float(size.y);

	// orthogonal terms
	vec2 left = location-vec2(dx,0);
	vec2 right = location+vec2(dx,0);
	vec2 bottom = location-vec2(0,dy);
	vec2 top = location+vec2(0,dy);

	// diagonal terms
	vec2 bottomleft = location-vec2(dx,dy);
	vec2 bottomright = location-vec2(-dx,dy);
	vec2 topleft = location+vec2(-dx,dy);
	vec2 topright = location+vec2(dx,dy);

	return (
		4.0*texture(sampler,fract(left))+
		4.0*texture(sampler,fract(right))+
		4.0*texture(sampler,fract(bottom))+
		4.0*texture(sampler,fract(top))+
		1.0*texture(sampler,fract(topleft))+
		1.0*texture(sampler,fract(topright))+
		1.0*texture(sampler,fract(bottomleft))+
		1.0*texture(sampler,fract(bottomright))-
		20.0*texture(sampler,location)
	) / 6.0;
}


// this propagates the reaction-diffusion system
void main() {
	vec4 value[NCOMPONENTS];
	vec4 laplacian[NCOMPONENTS];

	// calculate laplacians
	for( int i=0; i < NCOMPONENTS; i++ ) {
		value[i] = texture(component[i],location);
		laplacian[i] = getLaplacian(component[i]);
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

	// output components to buffer
	outputComponent[0] = value[0] + timeStep*( laplacian[0] + value[1]*value[0] - value[0]*value[2] );
	outputComponent[1] = value[1] + timeStep*( laplacian[1] - value[1]*value[0] - value[1]*value[2] + 2.0*value[0]*value[2] );
	outputComponent[2] = value[2] + timeStep*( laplacian[2]*diffusionRatio + value[1]*value[2] - value[0]*value[2] );
}
