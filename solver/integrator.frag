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
uniform vec4 brush;
uniform float diffusion[NCOMPONENTS];
uniform float timeStep;

// calculate discrete laplacian
vec4 getLaplacian(sampler2D sampler, ivec2 size) {

	// get dicrete neighbourhood
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
		4.0*texture(sampler,fract(left))/(dx*dx)+
		4.0*texture(sampler,fract(right))/(dx*dx)+
		4.0*texture(sampler,fract(bottom))/(dy*dy)+
		4.0*texture(sampler,fract(top))/(dy*dy)+
		1.0*texture(sampler,fract(topleft))/(dx*dy)+
		1.0*texture(sampler,fract(topright))/(dx*dy)+
		1.0*texture(sampler,fract(bottomleft))/(dx*dy)+
		1.0*texture(sampler,fract(bottomright))/(dx*dy)-
		20.0*texture(sampler,location)/(dx*dy)
	) / 6.0;
}


// this propagates the reaction-diffusion system
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

	// output components to buffer
	outputComponent[0] = value[0] + dt*( laplacian[0]*diffusion[0] + value[1]*value[0] - value[0]*value[2] );
	outputComponent[1] = value[1] + dt*( laplacian[1]*diffusion[1] - value[1]*value[0] - value[1]*value[2] + 2.0*value[0]*value[2] );
	outputComponent[2] = value[2] + dt*( laplacian[2]*diffusion[2] + value[1]*value[2] - value[0]*value[2] );
}
