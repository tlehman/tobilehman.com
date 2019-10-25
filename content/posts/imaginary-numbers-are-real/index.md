+++
title = "Imaginary Numbers Are Real"
date = 2019-08-21T15:34:03-07:00
draft = false
tags = ["math", "deep-dive"]
+++
<script src="/js/math-canvas.js"></script>

Numbers solve problems. Some problems are so precisely specified that they can be written as equations. When you learn to count, you start being able to solve problems like "how long until the weekend?", which can produce equations like $$ x + 2 = 5 $$

Natural number equations give rise to a solution space that looks like this:
<canvas class="plot-1d" data-min="0" data-max="8" data-discrete="true"></canvas>

When we learn how to subtract, we learn how to solve equations like \\( x + 1 = 0 \\), and
when we learn to divide, we learn to solve equations like \\( x * 3 = 1 \\).

By this point we are familiar with \\(\mathbb{R}\\), the Real Number Line, the solution space
we all learn in high school:

<canvas class="plot-1d" data-min="-3" data-max="3"></canvas>

The naming of the Real Number Line suggests that all other forms of numbers are not _real_, which
is unfortunate. If you spend any time doing electrical engineering problems, or particle physics, you will encounter equations like this $$ x^2 + 1 = 0 $$

The above equation can have real, practical applications, but the solution is not on the real line. In order to solve it, you have to posit a number that has this property: \\(x^2 = -1\\), conventionally, \\(x\\) is called \\(i\\), but in some contexts it's called \\(j\\). The number is called \\(i\\) because it stands for "imaginary".

## Slippery slope?

But wait a minute, if you introduce a new type of number to solve an equation, won't you have new equations that can't be solved in your expanded system, and you'll have to invent **even more new kinds of number to solve _those_ equations**?

TL;DR: No, Carl Freidrich Gauss solved this in 1799 [1]

What Gauss' Fundamental Theorem of Algebra shows is that the set \\(\mathbb{C}\\) of complex numbers, which can be defined: $$ \mathbb{C} = \\{ x + iy : x,y \in \mathbb{R} \\} $$

Is **algebraically complete**, meaning any polynomial equation:
$$ a_n x^n + ... + a_1 x + a_0 = 0$$

has all of it's solutions in \\(\mathbb{C}\\), if all coefficients \\(a_n \in \mathbb{C} \\)

So that settles it, no slippery slope, introducing one imaginary unit \\(i\\) is all you need.

## The space of complex numbers

The set \\( \mathbb{C} \\) of complex numbers has a beautiful 2-dimensional geometry. Let's
start with a point, <span style="color: blue" id="example-z1">z = 1 + 2i</span>
</span>

<canvas id="example-1" class="plot-2d"
        data-min="-3" data-max="3"
        data-point="1 + 2i">
</canvas>
{{<script "examples.js">}}

<a name="citations"></a>
1. C.F. Gauss' Fundamental Theorem of Algebra http://math.huji.ac.il/~ehud/MH/Gauss-HarelCain.pdf
