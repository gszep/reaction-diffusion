// passes vertex coordinates to integrator
varying vec2 centre;
varying vec2 left;
varying vec2 right;
varying vec2 top;
varying vec2 bottom;

// spatial discretisation
uniform vec2 spaceStep;

void main() {

		// get surface coordinate
		centre = uv;

		// precompute neighbourhood positions
		left = centre-vec2(spaceStep.x,0);
		right = centre+vec2(spaceStep.x,0);
		bottom = centre-vec2(0,spaceStep.y);
		top = centre+vec2(0,spaceStep.y);

		// transformation from object to vertex coordinate
		gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
}
