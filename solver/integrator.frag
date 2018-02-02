#version 300 es

#define GL2
#ifdef GL_ES
	precision highp float;
#endif

uniform sampler2D uTexSamp;
uniform float dt;
uniform float dte;
uniform float dth2;
uniform float a;
uniform float ba;
const float d = 1./512.;

in vec2 vTexCoord;
out vec4 fragmentColor;

void main(void) {
   vec4 t = texture(uTexSamp, vTexCoord);
   float u = t.r,  v = t.g,  u2 = t.b,  v2 = t.a;
   u += u2/256.;   v += v2/256.;
   float vnew = v + (u - v)*dt,  uth = v/a + ba,  unew;
   float tmp = dte*(u - uth);
   if ( u <= uth)  unew = u/(1. - tmp*(1. - u));
   else{
      tmp *= u;
      unew = (tmp + u)/(tmp + 1.);
   }
   unew += (texture(uTexSamp, vec2(vTexCoord.x, vTexCoord.y + d) ).r +
      texture(uTexSamp, vec2(vTexCoord.x, vTexCoord.y - d) ).r +
      texture(uTexSamp, vec2(vTexCoord.x + d, vTexCoord.y) ).r +
      texture(uTexSamp, vec2(vTexCoord.x - d, vTexCoord.y) ).r +

     (texture(uTexSamp, vec2(vTexCoord.x, vTexCoord.y + d) ).b +
      texture(uTexSamp, vec2(vTexCoord.x, vTexCoord.y - d) ).b +
      texture(uTexSamp, vec2(vTexCoord.x + d, vTexCoord.y) ).b +
      texture(uTexSamp, vec2(vTexCoord.x - d, vTexCoord.y) ).b)/256.

      - 4.*u)*dth2;
   u2 = fract(unew*256.);
   if (u2 > .5) unew -= d;
   v2 = fract(vnew*256.);
   if (v2 > .5) vnew -= d;
   fragmentColor = vec4(unew, vnew, u2, v2 );
}
