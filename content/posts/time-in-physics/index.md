+++
title = "Time in Physics"
date = 2020-12-17T21:34:14-08:00
tags = ["physics", "math", "time"]
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

<div class="sidescroll">
$$ \sqrt{ (x_1 - x_2)^2 + (y_1 - y_2)^2 + (z_1 - z_2)^2 - c^2(t_1 - t_2)^2 }$$
</div>

In ordinary 3-dimensional space, we measure the distance between points with a formula based on the [Pythagorean theorem](https://en.wikipedia.org/wiki/Pythagorean_theorem). Any formula used to measure distance between points is called a **metric**.
The only difference with Einstein's metric above is that the time component is subtracted instead of added. Notice that the c<sup>2</sup> coefficient, that makes all the units work out.

This leads to some weird conclusions, first being that the distance between any two points on a ray of light, from the light's perspective, is 0. So **from the light's perspective, no time passes**.

To see why, look at c(t<sub>1</sub> - t<sub>2</sub>), since c is absolute, this will 
equal the distance that light travels through space: 

<div class="sidescroll">
$$ \sqrt{ (x_1 - x_2)^2 + (y_1 - y_2)^2 + (z_1 - z_2)^2} = c(t_1 - t_2) $$
</div>

So when you subtract the right side from the left side, you always get 0.

This property of light being absolute leads to a this idea of a **light cone**. In relativity, you can't unambiguously define a single, simultaneous "now" for all points in space, but you can sweep out a cone of possible past and future events that can communicate, and partition them from events that can never possibly communicate.

{{<img "img/light-cone.png">}}

That "hypersurface of the present" above defines all the points that would be simultaneous with the center of the cone. However, two different oberservers can disagree about which events are simultaneous. 

Here's an animation to visualize how the light cone is constant, but the hypersurface of the present can tilt depending on relativity velocities of observers:

{{<img "img/Relativity_of_Simultaneity_Animation.gif">}}

{{<favicon "weebly.com" "https://283403168925209589.weebly.com/favicon.ico" >}}

Einstein's realization that time is relative leads to an interesting line of thought. If an observer Alice sees events X and Y as simultanous, but observes Y happening before Z, then it will be possible to find an observer Bob who sees Y and Z as simultaneous, but not X. If you keep iterating this, then it becomes possible to show that there is no unambiguous notion of now, and the idea that "the only thing that is real is now" dissolves under the acid of relativity and transitivity. The formal argument is in [Hilary Putnam's paper Time and Physical Geometry](http://283403168925209589.weebly.com/uploads/9/3/3/0/9330952/putnam_1967.pdf). 

This line of thought concludes in a view called Eternalism. Eternalism posits that time is not fundamentally real. The main alternative to this is the view called Presentism. Presentism holds that time is real, and that "now" is well defined.

{{<favicon "maths.org" "https://plus.maths.org/content/sites/plus.maths.org/themes/bootplus/favicon.ico">}}
Eternalism leads to this idea of the [Block Universe](https://plus.maths.org/content/what-block-time). The block universe is the idea that the universe is a single unchanging structure, and time only appears to flow. One way to think about the block universe is to imagine that binary star system above: it's a double helix in the block universe.

Physicist Lee Smolin rejects the block universe, and starts by assuming that time is real, and attempts to re-found physics. In his book [Time Reborn](https://www.amazon.com/Time-Reborn-Crisis-Physics-Universe-ebook/dp/B009JWCQMK/ref=sr_1_2?dchild=1&hvadid=78340273050258&hvbmt=be&hvdev=c&hvqmt=e&keywords=time+reborn&qid=1609735790&s=digital-text&sr=1-2&tag=mh0b-20) he doesn't acheive this, but he comes up with a good beginning framework for what such a theory would look like.

The physicist Carlo Rovelli published a paper called [Neither Presentism nor Eternalism](https://arxiv.org/abs/1910.02474) where he argues for a form of centrism between Presentism and Eternalism. In it he doesn't assume a single now, but a bunch of "here-nows" that are well defined for the observers and all their close neighbors. By weakening the requirement that my here-now and some alien's here-now in a distant galaxy are directly comparable, he recovers a notion of time that flows, but with timelines that can't all be reconciled into a single universal line. It's more like a cosmic textile, where some timelines are woven together and inseparable, and some are far away and never interact.

Rovelli makes his idea precise by defining close neighbors using the diamond-present from a light cone of an observer:
{{<img "img/diamond-present.png">}}

Going back to Hilary Putnam's argument, I think we need to define a continuous function `asRealAs(diamondPresent1, diamondPresent2): float` that goes from 0 to 1. If one diamond present is contained in the other, or they are equal, then it outputs 1, if there's no overlap, then it outputs 0. If there's some overlap, then they can interact, and it's some number strictly between 0 and 1. This continuity allows us to escape Putnman's transitive collapse of all of spacetime into a single block of equally-real points.

**To summarize**: Rovelli defines diamond events, and I define a continuous function that allows for more distant diamond events to be less mututually real than closer diamond events. This allows us to reject Hilary Putnam's argument that leans heavily on transitivity, and escape the conclusion that points in the distant future and the distant past are all equally real.

The picture of the universe that emerges is of a bunch of independent here-nows that communicate with light signals in a cosmic network. This is very similar to way time is modeled in some distributed systems. Here I discuss how these ideas about time influence thinking about [time in distributed systems](/posts/time-in-distributed-systems).

