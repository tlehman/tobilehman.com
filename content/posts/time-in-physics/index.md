+++
title = "Time in Physics"
date = 2020-12-17T21:34:14-08:00
tags = ["physics", "math", "time"]
draft = true
+++

In 1666, when the Plague was ripping through England, Isaac Newton went into quarantine outside the city and developed calculus. Calculus is an application of Euclid's geometry to problems involving time. Geometry models space, calculus models space and time.

The reason the ancient Greeks didn't develop calculus is because of tools. The ancient Greeks had rulers and compasses but not reliable clocks. They used the rulers and compasses to do geometry, and discovered many eternal truths about space and shape.

The first precise clock was invented by Dutch mathematician [Christiaan Huygens](https://en.wikipedia.org/wiki/Christiaan_Huygens) in 1656, it used a pendulum. And it reduced the loss of time by clocks from about 15 minutes per day to about 15 seconds per day. That's a 60x improvement in accuracy.

Given that small intervals of time could be practically measured, the technological environment in Europe became ripe for someone to develop calculus. It's no surprise that both Leibniz and Newton both arrived at equivalent new mathematics! 

In Newton's theory of gravity and motion, he models time as a universal sequence of "nows". In his model, it is as if God has a clock that defined a single now for all points in space. The way to visualize this is to imagine a universe with a binary star system. The stars orbit around each other in space, tracing out a double helix in spacetime:

{{<img "img/newton-binary.png">}}

<div class='yellow-note-noscroll'>The symbol \( \mathbb{R}^3 \) denotes the 3-dimensional space that we use to model our universe in most physics problems.
In the diagram above, try to imagine that each 2-dimensional plane is really a 3-dimensional space. 
</div>

Each of the planes is a 'now' where all points out to infinity exist simultaneously. Time can be visualized as a plane moving up

{{<img "img/newton-time-binary.gif">}}

In this model, it's possible to define simultaneity between any two points in space, no matter how far apart.

In 1750, less than 100 years later, Benjamin Franklin discovers that lightning is made of electricity, and invents the lightning rod. Soon after, a man named Hans Christian &Oslash;rsted discovered that electricity can create magnetic fields. Throughout the 18th and 19th centuries, people tinkered with electricity and magnetism, building on &Oslash;rsted's discoveries, and discovered the rules that govern those two intertwined forces. The Scotsman James Clerk Maxwell was like Euclid, a unifier who took the existing body of knowledge that existed scattered around and summarized it all in a set of four equations:
1. Gauss's Law ([deep-dive explanation](/posts/gauss-law))
 $$\nabla \cdot \boldsymbol{e} = 4 \pi \rho$$

2. Gauss's Law for magnetism ([deep-dive explanation](/posts/gauss-law-magnetism)):
 $$\nabla \cdot \boldsymbol{B} = 0$$

3. Faraday's Law of induction ([deep-dive explanation](/posts/faraday-law)):
$$\nabla \times \boldsymbol{E} = -\frac{1}{c}\frac{\partial\boldsymbol{B}}{\partial t}$$

4. Ampere's circuital Law ([deep-dive explanation](/posts/ampere-law)):
 $$\nabla \times \boldsymbol{B} = -\frac{1}{c}\left(4\pi\boldsymbol{J} +\frac{\partial\boldsymbol{E}}{\partial t}\right)$$

In the early 1900s, a young patent clerk named Albert Einstein had known all of this, and was struggling with trying to reconcile Maxwell's theory and Newton's theory of gravity. Both were correct, within their respective domains, but they gave contradictory answers to certain basic physical questions.

For example, using Maxwell's equations, you can show that any observer should measure the speed of light as the same number: c = 299,792,458 m/s. But in Newton's model, if an observer is traveling at half the speed of light in the direction of a light beam, they should measure the relative speed of the light as only half that.

As a thought experiment to illustrate what absolute c really means, imagine two physicists in a spaceship. For simplicity, the spaceship is not accelerating, and the physicists feel no gravity. 

The first physicist, Dr. Flashlight has a flashlight and points it at the mirrored roof of the spaceship. 

The one with a jetpack is traveling c/2. Both physicists are traveling at a constant 
velocity relative to each other, and relative to the walls of the ship. Each thinks 
of themselves as "at rest".

{{<img "img/flashlight.gif">}}

Dr. Flashlight measures light going 10 meters in 33.35 nanoseconds, that comes out to 299,792,458 m/s or just c.

Now from Dr. Jetpack's point of view:

{{<img "img/jetpack.gif">}}

From the perspective of Dr. Flashlight, Dr. Jetpack should only see the light traveling 5m away from him, since his Jetpack goes c/2. In Newton's model, **Dr. Jetpack should measure light going c/2, but Maxwell's theory says it will always be c**. 

This paradox is one that Einstein worked on, and arrived at a solution to. The solution is to treat space and time as part of a single 4-dimensional spacetime, and then measure **distance between points** using this equation:

$$ \sqrt{ (x_1 - x_2)^2 + (y_1 - y_2)^2 + (z_1 - z_2)^2 - c^2(t_1 - t_2)^2 }$$

In ordinary 3-dimensional space, we measure the distance between points with a formula based on the [Pythagorean theorem](https://en.wikipedia.org/wiki/Pythagorean_theorem). The only difference with Einstein's metric (the formula above) is that the time component is subtracted instead of added. Notice that the c<sup>2</sup> coefficient, that makes all the units work out.

This leads to some weird conclusions, first being that the distance between any two points on a ray of light, from the light's perspective, is 0. So **from the light's perspective, no time passes**.

To see why, look at c(t<sub>1</sub> - t<sub>2</sub>), by definition 



The amount of time, measured from the jetpack perspective is t. 
Because the speed of light is the same in all reference frames, that means that
$$ c = \frac{h}{t} = \frac{10\text{ m}}{33.35\text{ ns}}$$

In order for both physicists to measure the same value for the speed of light, they will have to each measure space and time differently. In this way, "1 meter" for the jetpack guy will not equal "1 meter" for the flashlight guy. Maxwell's theory has c as a real physical constant. When you hold one thing constant, something else has to give. This is why Einstein's theory is called relativity. Space and time only have meaning _relative_ to the observer.

If time is relative, then it means it's possible for two observers to disagree about which two events are simulatenous. But if that's true, then it should be possible for some observer A to see events X and Y as simultaneous, but observer B flying by on her spaceship sees X as happening before Y. Also, an alien C zips by and sees Y happening before Y.    

- {{[[TODO]]}} Talk about Einstein's definition of simultaneity and [[H. Putnam]]'s transitive argument that leads to the conclusion that time is an illusion 
- {{[[TODO]]}} expand on how this line of thinking leads to the [[Block Universe]]
- Segue into [[Lee Smolin]]'s idea of "physics in a box", and his approach which takes time as primitive and real, and define Presentism vs Eternalism
- {{[[TODO]]}}  Briefly discuss [[Carlo Rovelli]]'s "End with [[Carlo Rovelli]]'s arXiv paper about "Neither Presentism nor Eternalism""
- 
