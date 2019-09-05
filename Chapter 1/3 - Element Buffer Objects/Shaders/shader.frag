#version 330

out vec4 outputColor;
in vec3 passedPosition;

void main()
{
    if (passedPosition.y > .5f) // Green Roof
    {
        outputColor = vec4(0.0, 1.0, 0.0, 1.0);
    }
    else if (-.25 < passedPosition.x && passedPosition.x < .25f && -.5 < passedPosition.y && passedPosition.y < .3f){ // Red Door
        outputColor = vec4(1.0, 0.0, 0.0, 1.0);
    }
    else { // Rest is Yellow
        outputColor = vec4(1.0, 1.0, 0.0, 1.0);
    }
}