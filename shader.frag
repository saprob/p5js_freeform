#version 300 es
precision mediump float;

in vec2 vTexCoord;
in vec3 vNormal;

uniform vec4 uFarbe;

out vec4 myColor;

void main() {
  vec3 normal = normalize(vNormal);
   float helligkeit = normal.z * 0.5 + 0.5;
   
  vec4 farbe = uFarbe * helligkeit;
  
  myColor = vec4(farbe.rgb * farbe.a, farbe.a);
}


  