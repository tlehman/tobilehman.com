+++
title = "Wave Equation and Musical Notes"
date = 2020-02-03T20:46:39-08:00
tags = ["digital-audio", "math", "differential-equations", "physics"]
+++

I recently started learning to play the [piano, and wrote a piano program](/posts/piano) using the Web Audio API and SVG graphics, but this post will focus on the math behind audio generation. Namely, what is a musical note?

To explore the form of sound waves, we have to study the wave equation. Imagine a string tied between two points distance L apart. Pick a tiny segment between the two ends and zoom in.

{{<img "img/zoom_wave_eqn.gif">}}
To derive the equation of motion of this piece of string, we need to account for all the forces acting on it. The big ones are tension in the string and gravity. And gravity is usually way less than tension, so we can start our approximation by ignoring gravity. At each point, the tension points along the string, along a tangent line:

To make things precise, we need a function over all of space and time. The function \\(u(x,t)\\) represents the position of the string a point x and time t.

One way to visualize this is to look at the whole surface over all of spacetime:

{{<img "img/wave-uxt.png">}}

The set of all points \\(u(x,t)\\) taken together form the wavy survace. The intersection of the plane \\(t = 3\\) and the surface give the 1-dimensional sine wave \\(u(x, 3)\\)

{{<img "img/wave-ux3.png">}}

Next, we need to look at the derivatives of \\(u(x,t)\\), if you haven't taken calculus, you can still follow the idea behind derivatives. There are time derivatives and space derivatives.

The space derivative \\(u_x(x,3)\\) is the {{<yellow "slope">}} of the curve at a given time and place. Each point along the x-axis below has one unique tangent line that approximates the slope of the curve.

{{<img "img/uxt-deriv-x.gif">}}

Taking the second space derivative, \\(u_{xx}(x,3)\\) gives the **curvature** at each point in space.

The time derivative \\(u_t(1, t)\\) represents the **speed** of the tiny piece of string at time \\(t = 1\\).

The second time derivative \\(u_{tt}(1, t)\\) gives the **acceleration** of that piece of string at time \\(t = 1\\).

From this, you should be able to follow along, we can now use Newton's Second Law:

<div class="yellow-note" style="overflow-x:auto">
<h3>Newton's Second Law</h3>
Force = Mass &times; Acceleration
<hr>
Citation: <a href="https://www.wdl.org/en/item/17842/view/1/3/">Principia, 1687</a>
</div>

We can apply this to derive the equation of motion for a wave by accounting for the total force acting on each piece of string, and then equating that to it's mass and acceleration. Hang with me, the result is beautiful, and useful!

Let's return to the zoomed in piece of string from the beginning: 

{{<img "img/wave-last.png">}}

Keep zooming in until \\(dx\\) is infinitesimal.

We make three simplifying assumptions:

 - gravity is negligible compared to tension in the string
 - the string is continuous, meaning it is infinitely divisible
 - vibrations are "small"

 The second assumption allows you to have a notion of "infinitesimal", this is an appoximation that works pretty well, but the real world is discrete, and that string would be made of atoms.

 The third assumption is vague, but it allows us to write down a much simpler equation that, in the end, is still an excellent model of a wave.

 Anyway, the tension vector is the red {{<red "T">}} time \\(t\\) from the diagram above. Taking the length |{{<red "T">}}| = T, we can write down the left-pointing tension vector in terms of our \\(u\\) function.
 
 $$ -T \frac{(1,u_x(x,t))}{\sqrt{1 + u_x(x,t)^2}}$$

 Since this string is vibrating up and down, we only want the vertical component of motion:

 $$ -T \frac{u_x(x,t)}{\sqrt{1 + u_x(x,t)^2}}$$

 The 'small vibration assumption' lets us ignore \\(u_x(x,t)^2\\), then the vertical motion becomes:

 $$ -T u_x(x,t)$$

 If we carry out a similar exercise on the right, we get:

 $$ T u_x(x+dx,t)$$

 So that the total force acting on our section of string is:

 $$ T u_x(x+dx,t) - T u_x(x,t)$$

 That is the left side of Newton's Second Law, now we need the mass.

 Assuming that the string is a constant density, call the number \\(\rho\\) the density, then the length times the density equals the mass:

 $$m = \rho dx$$

The right hand side is

$$ u_{tt}(x,t) \rho dx$$

Dividing both sides by \\(dx\\), 

<div class="sidescroll">
$$ u_{tt}(x,t) \rho = T\frac{u_x(x+dx,t) - u_x(x,t)}{dx}$$ 
</div>

That right hand side turns out to be the second space derivative:

$$T u_{xx}(x,t)$$

That means the final equation is 

\\(\rho u_{tt}(x,t) = \\) 


\\(T u_{xx}(x,t)\\)

We will unpack this more, but the thing to notice here is that the **curvature** is proportional to the **acceleration**.