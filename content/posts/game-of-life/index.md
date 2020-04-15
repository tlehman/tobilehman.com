+++
title = "Conway's Game of Life"
date = 2020-04-14T19:42:32-07:00
tags = ["math", "cellular-automata", "web-programming"]
+++

[John H. Conway](https://en.wikipedia.org/wiki/John_Horton_Conway) has passed away, his contributions to math are too numerous for me to list in this post. What I wanted to explore in this post is one of his "recreational math" contributions: The Game of Life. 

If you haven't heard, It's this zero player computer "game":
{{<img "img/glider-gun.gif">}}
Not this multi-player board game:
{{<img "img/board-game-of-life.jpg">}}

I scare-quoted _game_ because there are no actual players. It is an example of a [cellular automaton](https://en.wikipedia.org/wiki/Cellular_automaton), which is a simple program that evolves over time according to a fixed, simple set of rules. To play the game, start with a rectangular grid, each square on the grid can be "alive" or "dead", represented with a color. Conventionally, black is alive and white is dead.

Those rules can be represented like this:

 - Any live cell with two or three live neighbors survives.
 - Any dead cell with three live neighbors becomes a live cell.
 - All other live cells die in the next generation. Similarly, all other dead cells stay dead.

 So these three rules, plus an initial state, will determine the infinite future of the game. Let's implement this in JavaScript and then sit back and watch!

Conway originally implemented this game on a Go board, but running it on a computer lets us see more patterns over a longer time period. This is where the true complexity emerges from these simple rules.

I will make the grid with HTML5 Canvas, I used the same technology when creating my [imaginary number explainer last year](/posts/imaginary-numbers-are-real/).

<canvas class="ca-life" id="game-of-life1" data-cells-wide="50" data-cells-high="50">
</canvas>

Above is a randomly generated initial condition, with 20% of the cells being alive. To start the game, click this button:

<input type="button" onclick="start()" value="Start"></input>
<input type="button" onclick="stop()" value="Stop"></input>
<input type="button" onclick="randomize()" value="Randomize"></input>

Notice the patterns that emerge, all of this arises from three simple rules. The game is not as complicated as real life. However, it contains in it a lesson about real life: **even if you have complete control over the present, you will probably lose control of the future**. I can conclude this because the rules underlying the universe are more complicated than life. If [Stephen Wolfram is right](https://writings.stephenwolfram.com/2020/04/finally-we-may-have-a-path-to-the-fundamental-theory-of-physics-and-its-beautiful/), then the rules underlying the universe might _actually_ be cellular automaton rules.

In a later post I would love to explore Conway's Surreal numbers, they are numbers that contain the real numbers as well as the infinite numbers and the infinitesimal numbers.

For now I wish you safety, health and delightful things to think about as many of us shelter in place. Best part about a zero-player game is that you don't need any players around, great for quarantine.

<div class="yellow-note">
<b>Notes on implementation</b>:
The state of the grid is a pair of Int8Arrays. To evolve the game forward one time step, I loop through one, update the other, and then swap them. Finally there is a render function, which takes the current Int8Array and draws it as a bunch of squares (1 = Black, 0 = White).
The code is <a href="/posts/game-of-life/game-of-life.js">here</a>
</div>

{{<script "game-of-life.js">}}