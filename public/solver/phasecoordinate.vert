// #include "include/phase/*"

// --- vertex shader ---
// for displaying solutions of pdes in
// three dimensional phase space rather
// than real space

void main(void) {

	// get phasespace coordinates
	vec4 value[NCOMPONENTS];
	for( int i=0; i < NCOMPONENTS; i++ ) {
		value[i] = texture(component[i],location);
	}

	// transform
	vec3 coordinate = vec3(value[1].x,value[2].x,value[3].x);
	coordinate -= 0.5;
	coordinate *= 0.8;

	gl_Position = vec4(coordinate.x,coordinate.z,0.5,0.5);
	gl_PointSize = 5.;
}
