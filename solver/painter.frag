// vertex coordinates
varying vec2 centre;

// components and colors
uniform sampler2D component[3]; // !! do not change name, only change number
uniform vec4 color[5];

// this function maps components to colorspace
void main() {

		vec4 grayscale = vec4(0.3,0.59,0.11,0.0);
		float value = dot(texture2D(component[0], centre),grayscale);
		float X = dot(texture2D(component[0], centre),grayscale);
		float Y = dot(texture2D(component[1], centre),grayscale);
		float B = dot(texture2D(component[2], centre),grayscale);

		float a;
		vec3 col;

		if(value <= color[0].a)
				col = color[0].rgb;
		if(value > color[0].a && value <= color[1].a)
		{
				a = (value - color[0].a)/(color[1].a - color[0].a);
				col = mix(color[0].rgb, color[1].rgb, a);
		}
		if(value > color[1].a && value <= color[2].a)
		{
				a = (value - color[1].a)/(color[2].a - color[1].a);
				col = mix(color[1].rgb, color[2].rgb, a);
		}
		if(value > color[2].a && value <= color[3].a)
		{
				a = (value - color[2].a)/(color[3].a - color[2].a);
				col = mix(color[2].rgb, color[3].rgb, a);
		}
		if(value > color[3].a && value <= color[4].a)
		{
				a = (value - color[3].a)/(color[4].a - color[3].a);
				col = mix(color[3].rgb, color[4].rgb, a);
		}
		if(value > color[4].a)
				col = color[4].rgb;

	gl_FragColor = vec4(X,X,Y,1.0);
	//gl_FragColor = vec4(col.r,col.g,col.b,1.0);
}
