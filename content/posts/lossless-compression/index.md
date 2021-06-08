+++
title = "Lossless Compression"
date = 2019-03-20T11:34:22-07:00
tags = ["compression", "information-theory", "deep-dive", "interactive"]
draft = true
+++

<div class="yellow-note">
WORK IN PROGRESS
</div>
The question we are going to answer in this article is **how can we compress data so without losing
information?**

Let's start with a concrete example of some data, compress it, then uncompress it, then we can 
generalize from what we learned. Here is my third-least favorite quote from Hitchhiker's Guide to the Galaxy:

> Vogon poetry is of course, the third worst in the universe. The second worst is that of the Azgoths of Kria. During a recitation by their poet master Grunthos the Flatulent of his poem "Ode to a Small Lump of Green Putty I Found in My Armpit One Midsummer Morning" four of his audience died of internal haemorrhaging and the president of the Mid-Galactic Arts Nobbling Council survived by gnawing one of his own legs off. Grunthos was reported to have been "disappointed" by the poem's reception, and was about to embark on a reading of his 12-book epic entitled "My Favourite Bathtime Gurgles" when his own major intestine, in a desperate attempt to save humanity, leapt straight up through his neck and throttled his brain. The very worst poetry of all perished along with its creator, Paul Neil Milne Johnstone of Redbridge, in the destruction of the planet Earth. Vogon poetry is mild by comparison.

That is 918 characters, or 0.92 KB, and when passed to [`gzip`](https://www.gzip.org/), to compresses down to 0.57 KB, or about a 60% reduction.

Let's unpack this quote into a binary representation and study how `gzip` just saved us a bunch of space.

## Encodings

An encoding is a mapping from letters of the alphabet to numbers, like this:

```
| a   |   1 |
| b   |   2 |
| c   |   3 |
| ... | ... |
| z   |  26 |
```
