#version 300 es
#define NCOMPONENTS 3

// use 16-bit preicision
precision highp float;
precision highp int;

// chemical components
uniform highp sampler2D component[NCOMPONENTS];
in vec2 location;
out vec4 outputComponent[NCOMPONENTS];

// parameters
uniform float spaceStep;
uniform float timeStep;
uniform vec4 brush;
uniform float diffusionRatio;


// calculate discrete laplacian
vec4 getLaplacian(sampler2D sampler) {

	// get descretisation steps
	ivec2 size = textureSize(component[0],0);
	float dx = spaceStep / float(size.x);
	float dy = spaceStep / float(size.y);

	// precompute neighbourhood positions
	vec2 centre = location;
	vec2 left = centre-vec2(dx,0);
	vec2 right = centre+vec2(dx,0);
	vec2 bottom = centre-vec2(0,dy);
	vec2 top = centre+vec2(0,dy);

	// diagonal terms
	vec2 bottomleft = centre-vec2(dx,dy);
	vec2 bottomright = centre-vec2(-dx,dy);
	vec2 topleft = centre+vec2(-dx,dy);
	vec2 topright = centre+vec2(dx,dy);

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
	vec4 value[NCOMPONENTS];
	vec4 laplacian[NCOMPONENTS];
	vec4 x[NCOMPONENTS];

	for( int i=0; i < NCOMPONENTS; i++ ) {
		value[i] = texture(component[i],location);
		laplacian[i] = getLaplacian(component[i]);
		x[i] = vec4(0.0,0.0,0.0,0.0);
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
					value[i].r = 1.0;
				else
					value[i].r = 0.0;
			}
		}
	}

	// output components to buffer
	outputComponent[0] = value[0] + timeStep*( laplacian[0] + value[1]*value[0] - value[0]*value[2] );
	outputComponent[1] = value[1] + timeStep*( laplacian[1] - value[1]*value[0] - value[1]*value[2] + 2.0*value[0]*value[2] );
	outputComponent[2] = value[2] + timeStep*( laplacian[2]*diffusionRatio + value[1]*value[2] - value[0]*value[2] );
}
