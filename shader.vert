#version 300 es

in vec3 aPosition;
in vec2 aTexCoord;
in vec3 aNormal;

uniform mat4 uModelViewMatrix;
uniform mat4 uProjectionMatrix;
uniform mat3 uNormalMatrix;

out vec2 vTexCoord;
out vec3 vNormal;

void main() {
  vTexCoord = aTexCoord;
  vNormal = uNormalMatrix * aNormal;
  gl_Position = uProjectionMatrix * uModelViewMatrix * vec4(aPosition, 1.0);
}