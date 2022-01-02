+++
title = "Generating random numbers in C"
date = 2021-12-30T11:40:09-08:00
tags = ["programming", "literate-programming", "wasm"]
+++

Assume your range is `lower` to `upper`, both of type `int`.

## Choose random number in range
A random integer, uniformly distributed, over that interval is generated with:

```c "choose random number in range"
int random_number(int lower, int upper) {
    return (rand() % (upper - lower + 1)) + lower;
}
```

But in C, the `rand()` function is deterministic. That means that if you don't "seed"
the random number generator (RNG), then it will return the same sequence every time.

So `rand()` is not really random, it's pseudo-random. In order to get different sequences
every time you run the program, you have to seed it with something. A common choice is
the time.

```c "includes"
#include <time.h>
#include <stdlib.h> // rand() is defined here
#include <stdio.h>  // printf() is defined here
```

## Seeding the RNG

To seed the RNG, we take the time and pass it into the `srand()` function:

```c "seed rng"
int current_time = time(0);
srand(current_time);
```

## Putting it all together

This document is a literate program, so it can be directly compiled by running [lmt](https://github.com/driusan/lmt) on
 this markdown file.

```c rand_int.c +=
<<<includes>>>

<<<choose random number in range>>>

int main() {
    int lower = 42;
    int upper = 75;
    <<<seed rng>>>
    printf(
        "Random number between %d and %d: %d\n",
        lower,
        upper,
        random_number(lower, upper)
    );
    return 0;
}
```

# Running the compiled program in WASM

As a demonstration of WebAssembly, I compiled the rand_int.c output file into a.out.js, and linked it below. If you open up the Chrome console, you will see the output of this program running!

<script type="module" src="a.out.js">
const random_number = Module.cwrap('random_number', 'number', ['number', 'number']);
</script>
