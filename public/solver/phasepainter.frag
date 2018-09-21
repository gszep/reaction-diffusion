// #include "include/painter/*"

// --- fragment shader ---
// components to colorspace

in float value[NCOMPONENTS];
void main(void) {

	vec4 displayPixel = vec4(0.0,0.0,0.0,0.0);
	for( int i=0; i < NCOMPONENTS; i++ ) {
		displayPixel = mix( displayPixel, colors[i], value[i]);
	};

	outputColor = displayPixel;
}
