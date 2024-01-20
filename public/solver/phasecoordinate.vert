// #include "include/phase/*"

// --- vertex shader ---
// for displaying solutions of pdes in
// three dimensional phase space rather
// than real space

void main(void) {

	// get phasespace coordinates
	// float value[NCOMPONENTS];
	value[0] = texture(component[0],location).x ;
	value[1] = texture(component[1],location).x ;
	value[2] = texture(component[2],location).x ;
	value[3] = texture(component[3],location).x ;
	value[4] = texture(component[4],location).x ;
	value[5] = texture(component[5],location).x ;
	value[6] = texture(component[6],location).x ;

	// transform
	vec3 coordinate = 0.5*vec3(value[5],value[6],value[1]-value[3]);
	coordinate -= 0.5;

	gl_Position = vec4(dot(coordinate,RotX),dot(coordinate,RotY),0.0,1.0);
	gl_PointSize = 5.;
}
