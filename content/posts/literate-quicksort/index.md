+++
title = "Literate Quicksort"
date = 2021-12-31T07:01:33-08:00
tags = ["algorithms", "programming", "literate-programming"]
card = "https://tobilehman.com/posts/literate-quicksort/img/pivot.jpg"
+++

This post is a literate program that explains quicksort. Quicksort is a fast, recursive sorting algorithm. The big idea is to take an array of \\( n \\) unsorted integers, choose a **pivot** element. There are several variations of quicksort that choose the pivot element differently. For this post, we will choose it uniformly at random.



{{<img "img/pivot.jpg">}}

As the image above suggests, move all the left elements larger than the pivot to the right. Then move all the right elements smaller than the pivot to the left. To avoid shifting the entire array around, we can use a technique called **partitioning**. Partitioning swaps elements in the array and chooses a pivot element to prepare the algorithm for the recursive step. Here's an example of partitioning, I made this animation from these excellent [slides from Tulane university](http://www.cs.tulane.edu/~carola/teaching/cmps2200/fall14/slides/Lecture-randomizedAlgos.pdf).

<video controls="controls" src="partitioning.mov"></video>

At the end of the partitioning step, the variable `i` points to the pivot, everything to the left is less than `6`, and everything to the right is bigger than `6`.

Now the {{<yellow "pivot">}} is in it's final sorted position, and the {{<blue "left">}} and {{<red "right">}} sub-arrays can be sorted independently.  At this point, we can make two recursive calls on the left and right sub-arrays.

```c recurse
quicksort(numbers, start, pivot); // sort left sub-array
quicksort(numbers, pivot, end);   // sort right sub-array
```



## Define the input and parameters

Before we begin sorting, let's name the numbers to be sorted: `numbers`. Let `n` be the size of the unsorted array. For this example, the [unsorted_integers.txt](unsorted_integers.txt)

```c numbers
int numbers[n];
```

We can borrow the `random_number` function from the previous post [Generating random numbers in C](/posts/rand-int-c).

