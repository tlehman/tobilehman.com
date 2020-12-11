+++
title = "Advent of Code 2020 🎄"
date = 2020-12-02T19:48:49-08:00
tags = ["programming", "rust", "puzzles", "rust"]
draft = true
+++

{{<favicon "adventofcode.com" "https://adventofcode.com/favicon.ico">}}

[Advent of Code](https://adventofcode.com/) is an annual programming puzzle contest that is structured like an [Advent Calendar](https://en.wikipedia.org/wiki/Advent_calendar). This year I wanted to learn the [Rust Programming Language](https://rust-lang.org), and this is the perfect excuse to do so. In this post, I want to document the thought process I went through to get to a working solution.

Day 1 gave a list of expenses, encoded as integers, and asked the programmer to find the pair of expenses that adds up to 2020, and then multiply them together. As an example, they give this list:


```
[1721, 979, 366, 299, 675, 1456]
```

The problem description highlights the solution: `1721 + 299 = 2020`, so the answer is `1721 * 299 = 514579`. To the astute [TDD](https://en.wikipedia.org/wiki/Test-driven_development) practitioner, this smells like a unit test! From here I wrote the test, before any code that made it pass:

```rust
fn sum2_to_2020_mult_test() {
    let input: &[i32] = &[1721, 979, 366, 299, 675, 1456];
    assert_eq!(514579, sum2_to_2020_mult(input));
}
```

After writing this test, I can run `cargo test` and know when I'm done implementing `sum2_to_2020_mult`. The main idea in my implementation is to iterate over a single [slice](https://doc.rust-lang.org/std/slice/index.html) with two indepentently floating indicies, `i` and `j`.

This caused the above test to pass:

```rust
fn sum2_to_2020_mult(input: &[i32]) -> i64 {
    for i in 0..input.len()-1 {
        for j in 0..i {
            let x = input[i];
            let y = input[j];
            if x + y  == 2020 {
                // to avoid integer overflow
                return (x as i64) * (y as i64);
            }
        }
    }
    return 0;
}
```

After solving this problem, I was given a new problem, taking the same list, but looking at triples. I ran through the same process to find the answer, wrote a test, wrote the function, earned my stars. Here's the code for full context: https://github.com/tlehman/advent-2020/blob/mainline/src/day1.rs

Day 2 (today) is more interesting, because it involves strings and password cracking.

They give this sample input:

```
1-3 a: abcde
1-3 b: cdefg
2-9 c: ccccccccc
```

The string to the left of the `:` is the rule, and the right side is the password.

The first place we should start is **the simplest non-trivial function that can parse `1-3 a `** as `Rule { min: 1, max: 3, letter: 'a'}`