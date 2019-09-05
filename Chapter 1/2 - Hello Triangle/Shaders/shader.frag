#version 330

out vec4 outputColor;
in vec4 passedColor;

void main()
{
    outputColor = passedColor;
}