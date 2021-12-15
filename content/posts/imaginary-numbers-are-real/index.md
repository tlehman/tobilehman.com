+++
title = "Imaginary Numbers Are Real"
date = 2019-08-21T15:34:03-07:00
draft = false
tags = ["math", "deep-dive"]
card = "https://tobilehman.com/posts/imaginary-numbers-are-real/img/complex-polar-card.png"
+++
<script src="/js/math-canvas.js"></script>

Numbers solve problems. Some problems are so precisely specified that they can be written as equations. When you learn to count, you start being able to solve problems like "how long until the weekend?", which can produce equations like $$ x + 2 = 5 $$

Natural number equations give rise to a solution space that looks like this:
<canvas class="plot-1d" data-min="0" data-max="8" data-discrete="true"></canvas>

When we learn how to subtract, we learn how to solve equations like \\( x + 1 = 0 \\), and
when we learn to divide, we learn to solve equations like \\( x * 3 = 1 \\).

By this point we are familiar with \\(\mathbb{R}\\), the Real Number Line, the solution space we all learn in high school:

<canvas class="plot-1d" data-min="-3" data-max="3"></canvas>

The naming of the Real Number Line suggests that all other forms of numbers are not _real_, which
is unfortunate. If you spend any time doing electrical engineering problems, or particle physics, you will encounter equations like this $$ x^2 + 1 = 0 $$

The above equation can have real, practical applications, but the solution is not on the real line. In order to solve it, you have to posit a number that has this property: \\(x^2 = -1\\), conventionally, \\(x\\) is called \\(i\\), The number is called \\(i\\) because it stands for "imaginary".

The real numbers and the imaginary numbers are taken together as an enlarged number system, called the complex numbers. These complex numbers solve more equations than the reals.

## Slippery slope?

But wait a minute, if you introduce a new type of number to solve an equation, won't you have new equations that can't be solved in your expanded system, and you'll have to invent **even more new kinds of number to solve _those_ equations**?

TL;DR: No, Carl Freidrich Gauss solved this in 1799 [1]

What Gauss' Fundamental Theorem of Algebra shows is that the set of complex numbers is **algebraically complete**, meaning any polynomial equation with complex coefficients (the \\(a_i\\)s):

<div class="sidescroll">
$$ a_n x^n + ... + a_1 x + a_0 = 0$$
</div>

will have \\(n\\) complex solutions. So the set of all complex numbers is "complete" in the sense that every algebraic equation can be 
solved by a complex number.

So that settles it, no slippery slope, introducing one imaginary unit \\(i\\) is all you need.

## The space of complex numbers

The set \\( \mathbb{C} \\) of complex numbers has a beautiful 2-dimensional geometry. The real number line is the horizontal axis, and the 
imaginary number line is the vertical axis. A complex number is the sum of a real number and an imaginary one. To visualize it, let's
start with a point. Tap or click around to see the blue point and it's 
complex number representation: <span style="color: blue" id="example-z1">z = 1 + 2i</span>
</span>

<canvas id="example-1" class="plot-2d"
        data-min="-3" data-max="3"
        data-point-blue='{"x": 1, "y": 2}'>
</canvas>

So, every complex number is a point in the plane, and every point in the plane is a complex number. All polynomial equations have all their solutions in that plane, and the imaginary component is just another dimension, they are no less real than the familiar real numbers.

## Adding complex numbers
If you want to add two complex numbers, you use the parallelogram rule. Click around below and you will see how a, b and c = a+b form a parallelogram. 

<span id="challenge-1">
**Challenge: try to set the blue point so that the parallelogram is a square.**
</span>

Given two complex numbers 
<span style="color: blue" id="ex-add-blue">a = 1 + 2i</span> and 
<span style="color: red" id="ex-add-red">b = 1 + 0.5i</span>, the sum is 
<span style="color: purple" id="ex-add-purple">c = a + b = 2 + 2.5i</span>
<canvas id="example-add" class="plot-2d"
        data-min="-3" data-max="3"
        data-point-blue='{"x": 1, "y": 2}'
        data-point-red='{"x": 1, "y": 0.5}'
        data-point-purple='{"x": 2, "y": 2.5}'>
</canvas>

We learned above that adding complex numbers is equivalent to forming a parallelogram with 0. Another way to think of addition is using Cartesian coordinates (u,v) + (x,y) = (u + x, v + y).

## Multiplying complex numbers
What about multiplying complex numbers? Well, in order for these new numbers to be "backwards compatible" with the real numbers, they will need to satisfy all the same laws, like associativity and the distribution rule.

**Associativity** is the property that $$ x + (y + z) = (x + y) + z $$
**Distributivity** is the property that $$ x (y + z) = x y + x z $$

Suppose \\(x = a + i b\\) and \\(y = c + i d \\) and \\(a,b,c,d\\) are four arbitrary real numbers. Then we can use distributivity to write out \\(x * y\\):

$$ x * y = (a + i b) * (c + id) $$

applying the distributivity rule again gives:

$$ ac + ibc + aid + i^2 bd$$

And remembering that \\(i^2 = -1\\), we can now gather up the real numbers on the left and the imaginary ones on the right:

$$ (ac - bd) + i(ad + bc)$$

The above formula is useful for calculation, but that was a bunch of tedious algebra that didn't reveal the beautiful geometry lurking beneath the surface. Complex number addition turned out to be a nice parallelogram shape, does multiplication have any geometric interpretation? It does! But it's not obvious if we keep using our familiar Cartesian coordinate system. We need to change our coordinate system from Cartesian to Polar.

### Polar coordinates
A point in polar coordinates is described by a radius \\(r\\) and an angle \\(\theta\\) (theta). If we start with a point \\(x + iy\\), we can calculate the radius using the Pythagorean theorem: \\(r = \sqrt{x^2 + y^2} \\), and the angle can be recovered using trig functions: \\(\theta = \cos^{-1}(x/r)\\).

Now before we get to geometric multiplication, it's worth going over [The Most Beautiful Equation Ever](https://en.wikipedia.org/wiki/Euler%27s_identity), Euler's identity. The number \\(e = 2.71828..\\), called **Euler's constant** shows up _everywhere_. Seriously, everywhere. Even in finance. 
When computing compound interest, let \\(P\\) be the principal invested, \\(r\\) be your interest rate, \\(n\\) be the number of times you compound per year, 
then \\(P(1 + \frac{r}{n})^n\\) is the value of your investment after a year. If you increase \\(n\\) to \\(\infty\\), the value of your investment converges to \\(Pe^r\\). That's called continuously compounded interest.

Another place \\(e\\) shows up is in trigonometry, and it will be useful for us writing complex numbers in polar coordinates. To understand The Most Beautiful Equation Ever: \\( e^{i \pi} + 1 = 0 \\), we have to study \\(e^z\\), where \\(z\\) is a complex number. The [Taylor series](https://en.wikipedia.org/wiki/Taylor+series)
expansion for the function \\(e^z\\) is:

<div class="sidescroll">
$$ e^z = 1 + z + \frac{z^2}{2!} + \frac{z^3}{3!} + \frac{z^4}{4!} + ... $$
</div>

Note: the notation 3! means 3 * 2 * 1, it's pronounced "three factorial".

If you expand out the sine and cosine functions in the same way, you get these equations:

<div class="sidescroll">
$$ \sin(z) = z - \frac{z^3}{3!} + \frac{z^5}{5!} - \frac{z^7}{7!} + - ... $$
</div>

<div class="sidescroll">
$$ \cos(z) = 1 - \frac{z^2}{2!} + \frac{z^4}{4!} - \frac{z^6}{6!} + - ... $$
</div>

Then, compute \\(e^{ix}\\), remembering that \\(i^2 = -1\\)

<div class="sidescroll">
$$ e^{ix} = 1 + ix + \frac{(ix)^2}{2!} + \frac{(ix)^3}{3!} + \frac{(ix)^4}{4!} + ... $$
</div>

<div class="sidescroll">
$$ e^{ix} = 1 + ix - \frac{x^2}{2!} - i\frac{x^3}{3!} + \frac{x^4}{4!} + - ... $$
</div>

Notice the alternating pattern of imaginary numbers? Take every other term and group it together:

<div class="sidescroll">
$$ e^{ix} = \left(1 - \frac{x^2}{2!} + \frac{x^4}{4!} - + ...\right) + \left(ix - i\frac{x^3}{3!} + - \right) $$ 
</div>

<div class="sidescroll">
$$ e^{ix} = \left(1 - \frac{x^2}{2!} + \frac{x^4}{4!} - + ...\right) + i\left(x - \frac{x^3}{3!} + - \right) $$ 
</div>

<div class="sidescroll">
$$ e^{ix} = \cos(x) + i\sin(x) $$
</div>

And there it is, don't worry if you didn't follow all the algebraic details, I have to admit, when I first worked this out in calculus III, it seemed really bizarre that these things fit together so beautifully. 

To go from this equation to The Most Beautiful Equation Ever, just set x = &pi; and calculate the result. It all collapses to -1, like all those infinitely many terms and alternating signs just vanished into hyperspace. 

This is so beautiful it must be true.

## Polar multiplication of complex numbers

Okay, now that we know what \\(e^{ix}\\) means, we are ready to write down complex numbers in polar form and see what multiplication looks like.


Given two complex numbers 
<span style="color: blue" id="px-mult-blue">a = 0.5e<sup>0.3i</sup></span> and 
<span style="color: red" id="px-mult-red">b = 2.2e<sup>-0.3i</sup></span>, the product is
<span style="color: purple" id="px-mult-purple">c = 1.1e<sup>0</sup></span>

Click or tap below to move the blue point, pay attention to the blue number above also, since it has the radius and angle information in it. The way to read this presentation of complex numbers is: `radius` * e<sup>i`angle`</sup>

<canvas id="example-2" class="polar-plot"
        data-rmax="4" 
        data-point-red='{"r": 2.2, "theta": -0.3}'
        data-point-blue='{"r": 0.5, "theta": 0.3}'
        data-point-purple='{"r": 1.1, "theta": 0.0}'
        >
</canvas>

After playing around with a bunch of values, can you guess the rule? The geometric rule for multiplying complex numbers is multiply the radiuses and add the angles. This kind of beauty is lurking underneath all that old high school homework, obscured by rote memorization and inadequate tools for teachers. There's a whole flat world out there that makes Euclidean geometry computable with symbols in such an elegant way. I just had to share that, imaginary numbers are not some arbitrary contrivance, they are _real_.


{{<script "examples.js">}}

<a name="citations"></a>
1. C.F. Gauss' Fundamental Theorem of Algebra http://math.huji.ac.il/~ehud/MH/Gauss-HarelCain.pdf
