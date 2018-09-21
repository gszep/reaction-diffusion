// #include "include/phase/*"

// --- vertex shader ---
// for displaying solutions of pdes in
// three dimensional phase space rather
// than real space

void main(void) {

	// get phasespace coordinates
	// float value[NCOMPONENTS];
	for( int i=0; i < NCOMPONENTS; i++ ) {
		value[i] = texture(component[i],location).x ;
	}

	// transform
	vec3 coordinate = 0.5*vec3(value[5],value[6],value[1]-value[3]);
	coordinate -= 0.5;

	gl_Position = vec4(dot(coordinate,RotX),dot(coordinate,RotY),0.0,1.0);
	gl_PointSize = 5.;
}
