// #include "include/painter/*"

// --- fragment shader ---
// components to colorspace

void main(void) {

	vec4 displayPixel = vec4(0.0,0.0,0.0,0.0);
	for( int i=0; i < NCOMPONENTS; i++ ) {

		float phi = texture(component[i], location).x;
		displayPixel = mix( displayPixel, colors[i], phi);
	};

	outputColor = displayPixel;
}
