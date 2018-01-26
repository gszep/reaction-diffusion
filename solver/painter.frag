// vertex coordinates
varying vec2 centre;

// components and colors
uniform sampler2D component[NCOMPONENTS];
uniform vec4 color[NCOMPONENTS];

// this function maps components to colorspace
void main() {

	vec4 displayPixel = vec4(0.0,0.0,0.0,0.0);
	for( int i=0; i < NCOMPONENTS; i++ ) {
		displayPixel = mix( displayPixel, color[i], texture2D(component[i], centre).w);
	};

	gl_FragColor = displayPixel;
}
