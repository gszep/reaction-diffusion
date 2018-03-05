#version 300 es
#define NCOMPONENTS 4
// painter fragment declarations

// use 16-bit preicision
precision highp float;
precision highp int;

// components and colours
uniform highp sampler2D component[NCOMPONENTS];
uniform vec4 colors[NCOMPONENTS];

in vec2 location;
out vec4 outputColor;
