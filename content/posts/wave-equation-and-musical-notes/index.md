+++
title = "Wave Equation and Musical Notes"
date = 2020-02-03T20:46:39-08:00
tags = ["digital-audio", "math"]
+++

I recently started learning to play the [piano, and wrote a piano program](/posts/piano) using the Web Audio API and SVG graphics, but this post will focus on the math behind audio generation. Namely, what is a musical note?

To explore the form of sound waves, we have to study the wave equation. Imagine a string tied between two points distance L apart. Pick a tiny segment between the two ends and zoom in.


To derive the equation of motion of this piece of string, we need to account for all the forces acting on it. The big ones are tension in the string and gravity. And gravity is usually way less than tension, so we can start our approximation by ignoring gravity. At each point, the tension points along the string, along a tangent line:


