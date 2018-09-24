// calculate discrete laplacian
vec4 getLaplacian(sampler2D sampler, ivec2 size) {

	// get dicrete neighbourhood
	float dx = 1.0 / float(size.x);

	// orthogonal terms
	vec2 left = location-vec2(dx,0);
	vec2 right = location+vec2(dx,0);

	return (
		 1.0*texture(sampler,left)
		+1.0*texture(sampler,right)
		-2.0*texture(sampler,location)
		) / (dx*dx) ;
}
