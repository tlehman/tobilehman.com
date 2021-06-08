+++
title = "The Game Theory of Masks"
date = 2021-04-19T20:53:43-07:00
tags = ["covid-19", "game-theory"]
+++

I see a lot people mocking the CDC's guidance to remain masked and social distanced even after vaccination. Obviously the point of vaccinations is not to have to take those precautionary measures. But what the CDC is probably doing is thinking about this game of imperfect information.

If someone says they are vaccinated, you have no good way of knowing that, so there is a [free rider problem](https://en.wikipedia.org/wiki/Free-rider_problem).

In [game theory](https://en.wikipedia.org/wiki/Game_theory), there is a way of visualizing the incentives that guide the players.

Assume you get into an elevator alone. Then, after rising one floor, the elevator stops and some guy gets on who isn't wearing a mask. You can either choose to stay or get off the elevator and wait, what should you do?

There are two possibilities, either the other guy is vaccinated or not. 
Here is the game theoretic payoff matrix. The number 1 means you are 100% sure to be safe. The number 0 means you are 100% sure to get sick.

<table border=1 cellpadding=5>
<tr><td></td><td>vaccinated</td><td>unvaccinated</td></tr>
<tr><td>stay</td><td>1</td><td>0.95<sup>*</sup></td></tr>
<tr><td>leave</td><td>1</td><td>1</td></tr>
</table>

<sup>*</sup>From [this paper](https://www.ncbi.nlm.nih.gov/pmc/articles/PMC7476454/), the median county has around 5% of the population infected, including the estimated non-confirmed cases. This is approximate, but if you assume 5% of people have it, then there's a 95% chance that a randomly chosen person doesn't have it.

In this case, the rational thing to do would be get off the elevator. The big problem is not knowing which column is the case. Even if there were good Proof of Vaccination, it would be awkward to hassle strangers for that proof, and it would also risk getting into close contact with them before you can verify their proof. 

Since they could be free-riding by not wearing a mask and lying about being vaccinated, it makes sense to assume they are not, and then act accordingly. That's the cynical logic that I believe is behind the CDC's current guidance.

