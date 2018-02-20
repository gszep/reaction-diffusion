// generate uniform random variable
float Uniform(float min, float max) {
	// Mohanty, S. et al. 2012.
	// Efficient pseudo-random number generation for
	// monte-carlo simulations using graphic processors

	vec4 state = texture(component[0],location);

	// tausworthe steps
	uint x = ((uint(state.x)&4294967294u)<<12)^(((uint(state.x)<<13)^uint(state.x))>>19);
	uint y = ((uint(state.y)&4294967288u)<<4)^(((uint(state.y)<<2)^uint(state.y))>>25);
	uint z = ((uint(state.z)&4294967280u)<<17)^(((uint(state.z)<<3)^uint(state.z))>>11);

	// linear congruence step
	uint w = 1664525u * uint(state.w) + 1013904223u;

	outputComponent[0] = vec4(x,y,z,w);
	return (max-min)*2.3283064365387e-10*float(x^y^z^w)+min;
}


// approximate inverse error function
float erfinv(float x) {
	// Giles, M. 2010.
	// Approximating the erfinv function

	float w, p;
	w = - log((1.0f-x)*(1.0f+x));
	if ( w < 5.000000f ) {
		w = w - 2.500000f;
		p = 2.81022636e-08f;
		p = 3.43273939e-07f + p*w;
		p = -3.5233877e-06f + p*w;
		p = -4.39150654e-06f + p*w;
		p = 0.00021858087f + p*w;
		p = -0.00125372503f + p*w;
		p = -0.00417768164f + p*w;
		p = 0.246640727f + p*w;
		p = 1.50140941f + p*w;
	}
	else {
		w = sqrt(w) - 3.000000f;
		p = -0.000200214257f;
		p = 0.000100950558f + p*w;
		p = 0.00134934322f + p*w;
		p = -0.00367342844f + p*w;
		p = 0.00573950773f + p*w;
		p = -0.0076224613f + p*w;
		p = 0.00943887047f + p*w;
		p = 1.00167406f + p*w;
		p = 2.83297682f + p*w;
	}
	return p*x;
}
