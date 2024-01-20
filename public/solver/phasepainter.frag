// #include "include/painter/*"

// --- fragment shader ---
// components to colorspace

in float value[NCOMPONENTS];
void main(void) {

	vec4 displayPixel = vec4(0.0,0.0,0.0,0.0);
	displayPixel = mix( displayPixel, colors[0], value[0]);
	displayPixel = mix( displayPixel, colors[1], value[1]);
	displayPixel = mix( displayPixel, colors[2], value[2]);
	displayPixel = mix( displayPixel, colors[3], value[3]);
	displayPixel = mix( displayPixel, colors[4], value[4]);
	displayPixel = mix( displayPixel, colors[5], value[5]);
	displayPixel = mix( displayPixel, colors[6], value[6]);

	outputColor = displayPixel;
}
