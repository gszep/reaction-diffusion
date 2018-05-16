#version 300 es
#define NCOMPONENTS 4
// phase vertex declarations

// use 16-bit preicision
precision highp float;
precision highp int;

// component coordinates
uniform highp sampler2D component[NCOMPONENTS];
in vec2 location;

// view matrix
// uniform vec3 RotX;
// uniform vec3 RotY;
// uniform vec2 param;
