// #include "include/painter/*"

// --- fragment shader ---
// components to colorspace

void main(void) {

	vec4 displayPixel = vec4(0.0,0.0,0.0,0.0);

	displayPixel = mix( displayPixel, colors[0], texture(component[0], location).x);
	displayPixel = mix( displayPixel, colors[1], texture(component[1], location).x);
	displayPixel = mix( displayPixel, colors[2], texture(component[2], location).x);
	displayPixel = mix( displayPixel, colors[3], texture(component[3], location).x);
	displayPixel = mix( displayPixel, colors[4], texture(component[4], location).x);
	displayPixel = mix( displayPixel, colors[5], texture(component[5], location).x);
	displayPixel = mix( displayPixel, colors[6], texture(component[6], location).x);

	outputColor = displayPixel;
}
