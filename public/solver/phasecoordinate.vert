// #include "include/phase/*"

// --- vertex shader ---
// for displaying solutions of pdes in
// three dimensional phase space rather
// than real space

out float value[NCOMPONENTS];
void main(void) {

	// get phasespace coordinates
	// float value[NCOMPONENTS];
	for( int i=0; i < NCOMPONENTS; i++ ) {
		value[i] = texture(component[i],location).x ;
	}

	// transform
	vec3 coordinate = vec3(value[1],value[2],value[3]);
	coordinate -= 0.5;
	coordinate *= 0.8;

	gl_Position = vec4(coordinate.x,coordinate.z,0.5,0.5);
	gl_PointSize = 5.;
}
