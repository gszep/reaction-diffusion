// vertex coordinates
varying vec2 centre;
varying vec2 left;
varying vec2 right;
varying vec2 top;
varying vec2 bottom;

// spatiotemporal discretisation
uniform float timeStep;
uniform vec2 spaceStep;

// components as textures
uniform sampler2D component[3];

// parameters
uniform float diffusionRatio;
uniform vec4 brush;

// variables
struct Coordinate {
	vec4 point;
	vec4 gradient;
};


// calculate discrete laplacian
Coordinate laplacian(sampler2D texture) {

	// values of point
	vec4 point = texture2D(texture,centre);

	// construct point and gradient
	Coordinate coordinate;
	coordinate.point = point;
	coordinate.gradient = 	texture2D(texture,left)+
							texture2D(texture,right)+
							texture2D(texture,bottom)+
							texture2D(texture,top)-
							4.0 * point;

	return coordinate;
}


// this propagates the reaction-diffusion system
void main() {

	// parameter space
	float forward = 1.0;//*centre.y;
	float backward = 1.0;//*centre.x;

	// TODO(@gszep) factor components code
	Coordinate x = laplacian(component[0]);
	vec4 X = x.point;
	vec4 dX = x.gradient;

	Coordinate y = laplacian(component[1]);
	vec4 Y = y.point;
	vec4 dY = y.gradient;

	Coordinate b = laplacian(component[2]);
	vec4 B = b.point;
	vec4 dB = b.gradient;

	// user perturbations
	if(brush.x > 0.0) {

		float location = distance(centre,brush.xy);
		float radius = brush.z;
		float componentIndex = brush.w;

		if( location < radius ) {

			// TODO(@gszep) factor components code
			if (componentIndex == 0.0) {
				X = vec4(0.9,0.9,0.9,0.9);
				Y = vec4(0.0,0.0,0.0,0.0);
				B = vec4(0.0,0.0,0.0,0.0);
			}
			else if (componentIndex == 1.0) {
				X = vec4(0.0,0.0,0.0,0.0);
				Y = vec4(0.9,0.9,0.9,0.9);
				B = vec4(0.0,0.0,0.0,0.0);
			}
			else if (componentIndex == 2.0) {
				X = vec4(0.0,0.0,0.0,0.0);
				Y = vec4(0.0,0.0,0.0,0.0);
				B = vec4(0.9,0.9,0.9,0.9);
			}
		}
	}

	// output components to buffer
	gl_FragData[0] = X + timeStep*( dX + forward*B*X - backward*X*Y );
	gl_FragData[1] = Y + timeStep*( dY*diffusionRatio + forward*B*Y - backward*X*Y );
	gl_FragData[2] = B + timeStep*( dB - forward*B*X - forward*B*Y + 2.0*backward*X*Y );
}
