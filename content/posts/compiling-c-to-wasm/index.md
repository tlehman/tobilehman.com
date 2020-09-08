+++
title = "Compiling C to WebAssembly"
date = 2020-09-07T21:09:07-07:00
tags = ["programming", "wasm", "math"]
+++

Ten years ago, a coworker tried to teach me cribbage on my last day, but I was too drunk to follow. I walked several miles home and lost my phone in a movie theater.

The following year, I met my future wife, and she was a cribbage fan. She taught me, and I've loved the game ever since.

Six years ago, I wrote this [cribbage score calculator](https://github.com/tlehman/crib_calc) in C. It takes a string like `JH 2C 3C 3S JS`, and returns the full accounting of the score in a game of cribbage. Example:

```
% ./bin/hand JH 2C 3C 3S JS
J♥  2♣  3♣  3♠  J♠

Pair for 2: 3♠  3♣
Fifteen for 2: 2♣  3♠  J♠
Fifteen for 2: 2♣  3♣  J♠
Fifteen for 2: 2♣  3♠  J♥
Fifteen for 2: 2♣  3♣  J♥
Pair for 2: J♠  J♥

Score: 12
```

The way I calculate the score is by using a neat mapping between sets and strings of bits.

## Correspondence between subsets and bitstrings
Suppose I had a set of cards: 
$$ S = \\{{ 5♣, 10♥, 5♥ \\}} $$

How many subsets are there? One way to answer this question is to count the number of subset functions. Consider a function f which takes a card in S as input, and returns 1 if it's in the subset, and 0 otherwise.

$$ f : S \to \\{{ 0,1 \\}} $$

Now, working backwards from all the possible outputs, you can enumerate all 8 subsets:

```
    //        Hand         | Bits |
    //        -------------|------|
    //                 5♥  | 001  |
    //            10♥      | 010  |
    //            10♥  5♥  | 011  |
    //        5♣           | 100  |
    //        5♣       5♥  | 101  |
    //        5♣  10♥      | 110  |
    //        5♣  10♥  5♥  | 111  |
```

Well, it's only 8 if you count the empty set. Since my code is a janky little C program, you need to compile it and run it at the command line. But thanks to a glorious new technology called [WebAssembly](https://developer.mozilla.org/en-US/docs/WebAssembly), you can compile C programs to an assembly language that runs natively in a browser, and then call into it with JavaScript.

WebAssembly, or wasm, can be emitted by first installing emscripten, and then changing the makefile like so:

``` diff
 hand: cribbage.o cards.o hand.o
-       gcc-4.7 -g3 tmp/*.o -o bin/hand
+       emcc -O3 -s WASM=1 tmp/*.o -o bin/hand.js

 cribbage.o:
-       gcc-4.7 -g3 -c src/cribbage.c -o tmp/cribbage.o
+       emcc -O3 -s WASM=1 -c src/cribbage.c -o tmp/cribbage.o

 cards.o:
-       gcc-4.7 -g3 -c src/cards.c -o tmp/cards.o
+       emcc -O3 -s WASM=1 -c src/cards.c -o tmp/cards.o

 hand.o:
-       gcc-4.7 -g3 -c src/hand.c -o tmp/hand.o
+       emcc -O3 -s WASM=1 -c src/hand.c -o tmp/hand.o
```

Remarkably, that totally worked. Then you can import the compiled `hand.js` output into the browser and call into it:

The standard output goes to `console.log`, here is my cribbage calculator working with almost no effort:

{{<img "img/wasm-c-in-browser.jpg">}}

While my crib_calc program is not the best example, I chose it because it was a small but nontrivial C program that used multiple files, structs, bit-shifting and standard I/O. Even though I haven't touched this C code in 6 years, I could quickly get it compiling to wasm with almost no effort.

The [dream of portable programs](/posts/dream-90s-wasm/) is alive in WebAssembly.