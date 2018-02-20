// calculate discrete laplacian
vec4 getLaplacian(sampler2D sampler, ivec2 size) {

	// get dicrete neighbourhood
	float dx = 1.0 / float(size.x);
	float dy = 1.0 / float(size.y);

	// orthogonal terms
	vec2 left = location-vec2(dx,0);
	vec2 right = location+vec2(dx,0);
	vec2 bottom = location-vec2(0,dy);
	vec2 top = location+vec2(0,dy);

	// diagonal terms
	vec2 bottomleft = location-vec2(dx,dy);
	vec2 bottomright = location-vec2(-dx,dy);
	vec2 topleft = location+vec2(-dx,dy);
	vec2 topright = location+vec2(dx,dy);

	return (
		4.0*texture(sampler,fract(left))/(dx*dx)+
		4.0*texture(sampler,fract(right))/(dx*dx)+

		4.0*texture(sampler,fract(bottom))/(dy*dy)+
		4.0*texture(sampler,fract(top))/(dy*dy)+

		1.0*texture(sampler,fract(topleft))/(dx*dy)+
		1.0*texture(sampler,fract(topright))/(dx*dy)+

		1.0*texture(sampler,fract(bottomleft))/(dx*dy)+
		1.0*texture(sampler,fract(bottomright))/(dx*dy)-

		20.0*texture(sampler,location)/(dx*dy)
	) / 6.0;
}
