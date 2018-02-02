#version 300 es

#define GL2
#ifdef GL_ES
	precision highp float;
#endif

uniform sampler2D uTexSamp;
uniform int text;

in vec2 vTexCoord;
out vec4 fragmentColor;

void main(void) {
	// int x = text ^ 12;

	vec2 x = texture(uTexSamp, vTexCoord).rg;
	fragmentColor = vec4(x, 0., 1.);
}
