+++
title = "Understanding Gauss's Law"
date = 2023-08-11T16:04:00-08:00
tags = ["math", "physics", "deep-dive"]
series = "maxwells-equations"
draft = true
+++

<div class="series-header">
<span>This is part of a <a href="/series/maxwells-equations/">Series on Understanding Maxwell's Equations</a></span>
</div>

Maxwell's equations describe the dynamics of the electric and magnetic fields. At the end of this series we will set the charge equal to zero and derive a wave equation that happens to travel at the speed of light. That wave turns out to be actual light!

Gauss' Law:
 $$\nabla \cdot \boldsymbol{E} = 4 \pi \rho$$

To understand this, let's start with \\( \boldsymbol{E} \\), the electric field. The electric field is a function that attaches an electric force vector to every point in space:

$$\boldsymbol{E} : \mathbb{R}^3 \to \mathbb{R^3}$$

Another way to think about this is if you have a coordinate system and the point \\((x,y,z)\\), then \\(\boldsymbol{E}(x,y,z)\\) is the electric force vector at that point in space


Backlink: [Time in Physics](/posts/time-in-physics)
