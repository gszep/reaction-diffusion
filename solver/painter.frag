#version 300 es
#define NCOMPONENTS 4

// use 16-bit preicision
precision highp float;
precision highp int;

// components and colors
uniform highp sampler2D component[NCOMPONENTS];
uniform vec4 colors[NCOMPONENTS];

in vec2 location;
out vec4 outputColor;


// this function maps components to colorspace
void main(void) {

	vec4 displayPixel = vec4(0.0,0.0,0.0,0.0);
	for( int i=0; i < NCOMPONENTS; i++ ) {
		displayPixel = mix( displayPixel, colors[i], texture(component[i], location).x);
	};

	outputColor = displayPixel;
}
