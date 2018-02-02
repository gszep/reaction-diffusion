#version 300 es

in vec2 aTexCoord;
in vec3 position;
out vec2 vTexCoord;

void main(void) {
	gl_Position = vec4(position, 1.0);
	vTexCoord = aTexCoord;
}
