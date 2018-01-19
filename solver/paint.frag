// vertex coordinates
varying vec2 centre;

// components and colours
uniform sampler2D component[3];
uniform vec4 color[5];

// this function maps components to colourspace
void main() {

		vec4 grayscale = vec4(0.3,0.59,0.11,0.0);
		float X = dot(texture2D(component[0], centre),grayscale);
		float Y = dot(texture2D(component[1], centre),grayscale);
		float B = dot(texture2D(component[2], centre),grayscale);

		//int step = int(floor(value));
		//float a = fract(value);
		// float a;
		// vec3 col;
		//
		// if(value <= color1.a)
		// 		col = color1.rgb;
		// if(value > color1.a && value <= color2.a)
		// {
		// 		a = (value - color1.a)/(color2.a - color1.a);
		// 		col = mix(color1.rgb, color2.rgb, a);
		// }
		// if(value > color2.a && value <= color3.a)
		// {
		// 		a = (value - color2.a)/(color3.a - color2.a);
		// 		col = mix(color2.rgb, color3.rgb, a);
		// }
		// if(value > color3.a && value <= color4.a)
		// {
		// 		a = (value - color3.a)/(color4.a - color3.a);
		// 		col = mix(color3.rgb, color4.rgb, a);
		// }
		// if(value > color4.a && value <= color5.a)
		// {
		// 		a = (value - color4.a)/(color5.a - color4.a);
		// 		col = mix(color4.rgb, color5.rgb, a);
		// }
		// if(value > color5.a)
		// 		col = color5.rgb;

	gl_FragColor = vec4(X,X,Y,1.0);
}
