#version 300 es
#define NCOMPONENTS 3

// use 16-bit preicision floats
precision highp float;

// components and colors
uniform sampler2D component[NCOMPONENTS];
uniform vec4 colors[NCOMPONENTS];

// texture coordinate and output color
in vec2 centre;
out vec4 outputColor;

// this function maps components to colorspace
void main(void) {

	vec4 displayPixel = vec4(0.0,0.0,0.0,0.0);
	for( int i=0; i < NCOMPONENTS; i++ ) {
		displayPixel = mix( displayPixel, colors[i], texture(component[i], centre).x);
	};

	outputColor = displayPixel;
}
