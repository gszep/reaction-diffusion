// vertex coordinates
varying vec2 centre;
varying vec2 left;
varying vec2 right;
varying vec2 top;
varying vec2 bottom;

// temporal discretisation
uniform float timeStep;

// components as textures
uniform sampler2D component[3]; // !! do not change name, only change number

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

	// calculate laplacians
	Coordinate coordinate[NCOMPONENTS];
	for( int i=0; i < NCOMPONENTS; i++ ) {
		coordinate[i] = laplacian(component[i]);
	}

	// user perturbations
	if(brush.x > 0.0) {

		float location = distance(centre,brush.xy);
		float radius = brush.z;
		int componentIndex = int(brush.w);

		//  within radius set all comonents to zero except chosen one
		if( location < radius ) {
			for (int i=0; i<NCOMPONENTS; i++) {

				if (i == componentIndex)
					coordinate[i].point = vec4(0.9,0.9,0.9,0.9);
				else
					coordinate[i].point = vec4(0.0,0.0,0.0,0.0);
			}
		}
	}

	// output components to buffer
	gl_FragData[0] = coordinate[0].point + timeStep*( coordinate[0].gradient + coordinate[1].point*coordinate[0].point - coordinate[0].point*coordinate[2].point );
	gl_FragData[1] = coordinate[1].point + timeStep*( coordinate[1].gradient - coordinate[1].point*coordinate[0].point - coordinate[1].point*coordinate[2].point + 2.0*coordinate[0].point*coordinate[2].point );
	gl_FragData[2] = coordinate[2].point + timeStep*( coordinate[2].gradient*diffusionRatio + coordinate[1].point*coordinate[2].point - coordinate[0].point*coordinate[2].point );
}
