// #include "include/painter/*"

// --- fragment shader ---
// components to colorspace

void main(void) {

	vec4 displayPixel = vec4(0.0,0.0,0.0,0.0);
	float s = texture(component[1], location).x;

	if (s < 0.0)
		displayPixel = mix( displayPixel, colors[0], -s);
	if (s > 0.0)
		displayPixel = mix( displayPixel, colors[2], s);

	outputColor = displayPixel;
}
