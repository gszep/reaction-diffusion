#version 300 es
#define NCOMPONENTS 5
// phase vertex declarations

// use 16-bit preicision
precision highp float;
precision highp int;

// component coordinates
uniform highp sampler2D component[NCOMPONENTS];

// view matrix
uniform vec3 RotX;
uniform vec3 RotY;

in vec2 location;
out float value[NCOMPONENTS];
