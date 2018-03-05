#version 300 es

in vec2 vertexCoordinate;
out vec2 location;

// --- vertex shader ---
// for solutions of pdes in two dimensions
// a simple planar primitive is sufficient
// where vertex coordinates do not change

void main(void) {

	// pass texture and vertex coordinate to fragment shader
	gl_Position = vec4(vertexCoordinate, 0.0, 1.0);
	location = 0.5*vertexCoordinate + 0.5;
}
