#version 300 es
#define NCOMPONENTS 4
// shared fragment declarations

// use 16-bit preicision
precision highp float;
precision highp int;

// chemical components
out vec4 outputComponent[NCOMPONENTS];
uniform highp sampler2D component[NCOMPONENTS];
in vec2 location;

// parameters
uniform vec4 brush;
uniform float diffusion[NCOMPONENTS];
uniform float timeStep;
