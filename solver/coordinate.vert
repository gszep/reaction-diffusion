#version 300 es
#define NCOMPONENTS 3

// use 16-bit preicision floats
precision highp float;

// components and spatial discretisation
uniform sampler2D component[NCOMPONENTS];
uniform float spaceStep;

// input coordinates
in vec4 vertexCoordinate;
in vec2 textureCoordinate;

// output coordinate neighbourhood
out vec2 centre;
out vec2 left;
out vec2 right;
out vec2 top;
out vec2 bottom;

out vec2 topleft;
out vec2 topright;
out vec2 bottomleft;
out vec2 bottomright;

void main(void) {

	// pass texture coordinate to fragment shader
	centre = textureCoordinate;

	// get descretisation steps
	ivec2 size = textureSize(component[0],0);
	float dx = spaceStep / float(size.x);
	float dy = spaceStep / float(size.y);

	// precompute neighbourhood positions
	left = centre-vec2(dx,0);
	right = centre+vec2(dx,0);
	bottom = centre-vec2(0,dy);
	top = centre+vec2(0,dy);

	// diagonal terms
	bottomleft = centre-vec2(dx,dy);
	bottomright = centre-vec2(-dx,dy);
	topleft = centre+vec2(-dx,dy);
	topright = centre+vec2(dx,dy);

	// vertex coordinate
	gl_Position = vertexCoordinate;
}
