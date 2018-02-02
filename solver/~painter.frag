// vertex coordinates
varying vec2 centre;

// components and colors
uniform sampler2D component[NCOMPONENTS];
uniform vec4 color[3];

// this function maps components to colorspace
void main() {

	vec4 displayPixel = vec4(1.0,1.0,1.0,1.0);
	float state = texture2D(component[0], centre).w;
	if (state>0.0) {
		displayPixel = mix( displayPixel, color[0], state);
	}
	if (state<0.0) {
		displayPixel = mix( displayPixel, color[2], -state);
	}

	gl_FragColor = displayPixel;
}
