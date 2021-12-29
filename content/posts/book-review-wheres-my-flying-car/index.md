+++
title = "Book Review: Where's My Flying Car?"
date = 2021-12-26T12:49:54-08:00
tags = ["history", "book-review", "future", "game-theory", "technology", "progress", "economics"]
card = "https://tobilehman.com/posts/book-review-wheres-my-flying-car/img/wmfc.jpg"
+++

<div style="float: right">{{<img "img/wmfc.jpg">}}</div>

This book has two parts, one looks back and asks why flying cars never came to market, and the other looks forward to what possibilities lay ahead. The author has a background in chip design and nanotechnology, and even became a pilot so he could better evaluate the feasibility of flying car designs.



The autogyro, developed in the 1930s by Juan de la Cierva, was a promising candidate for a flying car. It was small, cheap, and was able to gracefully descend if the motor failed. Harold Pitcairn was more of a businessman and de la Cierva was more of an engineer, the two worked together until de la Cierva's tragic death in 1936. Juan de la Cierva died in a DC-8 plane crash on his way to Amsterdam. Pitcairn and the company pivoted towards helicopters after that, and after World War 2, the autogyro vanished to history.

Looking at the first half of the 20th century, the author has an answer to why flying cars never took off. In 1903, the Wright Brother's invent the first working flying machine. In 1908, Ford releases the affordable Model T, and the [Age of Oil, Cars and Mass Production](/posts/book-review-perez-trfc/) begins. Transportation becomes individualized, and the individual becomes liberated from the inflexibility of trains. Juan de la Cierva develops the autogyro during the 1920s and by early 1930s he has a viable design, along with a solid business partner and a plan for mass production. But during the 1930s, the Great Depression meant that there was not a healthy mass market ready to buy these cars, and with de la Cierva's death, he was never able to see it through to production. Then during 1941-1945, World War 2 crowded out private production, sucked up all the pilots into the war effort, and saw the invention of the Atomic Bomb. This disrupted the virtuous cycle of experimentation and mass-market production of private flying machines.

After the war, Pitcairn filed suit against the U.S. Government in 1951, since the government was legally responsibile for any patent infringement in their contracts with Bell Helicopter. Pitcairn spent the rest of his life in court, dying before SCOTUS finally declined to hear an appeal on the ruling from a lower court.

So in the 1930s, the Great Depression and Juan's death prevented takeoff. In the 1940s the war crowded out everything else. In the 1950s, Pitcairn stuck in court. In 1958, the FAA was created, and the monopoly on the skies began. It's at this point in history that the heavy-handed regulatory environment snuffed out most private experimentation with flight.

The author points to an example of FAA's unreasonable rules. There are rules about _who is even allowed to file the paperwork_, and these create unnecessary delays while paperwork requests sit in queues at the FAA. Regulatory agencies like FAA and NRC write the rules, enforce the rules, and adjudicate the disputes about the rules.  There are no checks and balances. The only thing limiting the power of these agencies is the clarity of the statute that congress writes. That is, when congress passes a law that the FAA has to go administer, if the law is vague, then the agency can fill in the details however it wishes.

## Game Theory and Learning Curves
It's easy to roll your eyes at the claim that "regulation destroys innovation" because it's sometimes used as an excuse by companies to avoid having to spend money on safety. But aside from that occasional opportunism, there is a deep kernel of truth in that statement. Businesspeople have to weigh the risks and the rewards of a given decision. Regulators only have to weigh the risks.

Thinking about this in game theory terms, regulators are playing this game: if they approve product X and it leads to an accident, then they get penalized. But if X doesn't lead to an accident, it's neutral, because the Agency doesn't get rewarded. If they delay X and impose more costs on it's production, they can create more work for themselves and more work for the company being regulated. The way government budgets are allocated, agencies that use their whole budget tend to get re-approved for that amount, and if they spend less than their budget, their budget gets downsized.

<style>
    td {
        border-style: solid;
        border-width: 1px;
        padding: 5px;
    }
</style>
|    | X causes accident | X doesn't cause accident |
|----|----|----|
| approve X | Agency gets punished | Neutral for Agency <sub><i>(or negative if quick decision justifies less budget next fiscal year)</i></sub> |
| delay X   | Agency gets budget re-approved| Agency gets budget re-approved |

From this payoff table, you can see that there are no incentives for regulators to approve things, but there are incentives to delay. This delay adds an unbounded amount of time and cost to production.

Okay, so some delay is added while regulators decide whether to grant permission, what's the harm in that? 

In order to appreciate why an unchecked, unbounded delay on production is harmful, we need to study a common pattern in production called a **learning curve**. Here is a chart show the price of a Model T from 1909-1923 (in constant 1958 dollars).

{{<img "img/learning-curve-car.png">}}

Notice that as the cumulative number of Model Ts doubles, the price lowers by some constant fraction. That means that if **production grows exponentially, the price goes down exponentially**. 

Another example of this is solar panels. When solar panel **production grows exponentially, the price goes down exponentially**.

{{<img "img/learning-curve-pv.png">}}

The reason this happens is that producers learn by doing. They produce the first batch of goods, then get feedback from the market. They then use what they learned to produce better versions of those goods, faster, and at lower cost. If each year, the people producing these goods can improve by some fixed percent, like say 7%, then after 10 years, they will be twice as good. After another decade, they will be four times as good, and after 30 years, they will be eight times as good. This is the miracle of [compound growth](/posts/compound-growth).

This is the virtuous cycle of improving production through market feedback. It's capitalism at it's best. It happens when producers can experiment freely, try things out, get market feedback and then iterate and improve quickly, to stay ahead of their competitors.

Now imagine that instead of trying new things and seeing how the market responds, they had to file a form instead. The form is with a bureau that is run by a small number of people who don't have to produce anything. They will get around to your form whenever they do. The form isn't just for permission to sell your product, it's a form to start a _process_ that might end in permission, or end in more forms. While you are waiting on the regulators for permission, there's a government shutdown, and while other businesses are operating, you are stuck waiting around for the bureau to get back to work and finish the process. The process turns out to take longer than you expected, your most talented and ambitious people are chafing at having to wait, and they quit out of frustration and take their talents somewhere else. Even if they stay, your customers won't wait around forever. In this way, unchecked regulation can smother progress and destroy the learning curve.

{{<favicon "rootsofprogress.org" "https://rootsofprogress.org/apple-touch-icon.png">}}

One clear example of this is with nuclear power, you can see the learning curve in action here, until there's a sharp turn upward around 1975. This is when the Nuclear Regulatory Commission was formed. 

{{<img "img/learning-curve-nuclear.png">}}

The NRC does an important job, to ensure that nuclear reactors are safe. Unfortunately, they use a (almost certainly false) model of radiation safety called LNT (Linear No-Threshold). Also, NRC uses a slippery standard with shifting goalposts called ALARA for "As Low As Reasonably Possible". This ALARA standard inflates costs, and even though the fundamentals for nuclear fission are so excellent, this regulatory standard has the effect of pushing up production costs until they are in the ballpark of other methods of energy generation. For more on why nuclear energy has been made so artificially expensive, see Jason Crawford's article [Why Has Nuclear Power Been a Flop?](https://rootsofprogress.org/devanney-on-the-nuclear-flop).

The reason we don't have flying cars is that during the window of opportunity between 1903 and 1958, the few promising threads of flying car development never made it to fruition. After 1958, the aviation industry became so heavily regulated that new attempts struggled to move down the learning curve.

# Ergophobia and Energy Use

The author noticed a very clear pattern in which sci-fi predictions were realized, and which weren't:

{{<img "img/energy-intensity-scifi.jpg">}}

Notice that very low-energy intensity things like pocket phones are more than realized (lower right), and very high-energy intensity things like space travel to Jupiter are not realized (upper left). But the upper right corner is totally empty.

The author interprets this as a strong sign that the root cause of "The Great Stagnation" is energy use. He points out this exponential trend in energy usage since the Industrial Revolution began, called the Henry Adams curve: 

{{<img "img/henry-adams.png">}}

{{<favicon "eia.gov" "https://www.eia.gov/favicon.ico">}}

Notice how energy usage flatlines around 1970. That is around when the Arab Oil Embargo happens, and also when the NRC was created and slowed down the brisk progress  in nuclear fission. We were on a path to abdundant, CO2-free electricity, but we strayed from that path because we got stopped by the cops (regulators). Now, 50 years later, we risk losing the great benefits of progress we inherited. Nuclear plants are being [shut down early](https://www.eia.gov/todayinenergy/detail.php?id=47776) and leading to [power outages during heatwaves](https://www.nytimes.com/2021/05/03/climate/heat-climate-health-risks.html). Renewable energy sources are growing, and fracked natural gas is abundant (in the U.S. at least), but efficiency, renewables and natgas are only enough to maintain our current lifestyles. We really should aim higher for our kids. Our grandparents did, and we should be doing everything we can to make sure their lives are blessed with more energy than ours was.

The idea that we should be dialing down our energy use for climate reasons presupposes we are using fossil fuels. While those fuels kickstarted the industrial revolution, we should be ascending the [Kardashev scale](https://en.wikipedia.org/wiki/Kardashev_scale) and going nuclear.

We will never fix the climate if we can't control more energy than the sun hits the earth with. Furthermore, assuming we do fix the climate and secure a stable environment on earth for millenia, we should be opening up the final frontier. The frontier of space will redirect humanity's aggressive instincts towards conquering nature, not simply winning in zero-sum battles with our neighbors. An expanding frontier will inspire, challenge, and push us and our descendants to grow beyond where we stand now.

Sustainability by surrender to nature is not the answer. Nature must be tamed.

# Looking to the future

Enough about what we _should_ do, what is actually doable?