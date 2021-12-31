+++
title = "Literate Quicksort"
date = 2021-12-31T07:01:33-08:00
tags = ["programming", "literate-programming"]
draft = true
+++

Quicksort is a recursive algorithm for sorting. To be properly generic, it can sort any set $$S$$ of items with a total ordering relation $$R$$ defined on, it. But I'm going to use integers, and there will be no loss of generality in doing this.

The input to quicksort is a slice of integers `int[]`. If there are less than 2 elements, then return. Otherwise, you need to find a **pivot**, which has the property that there are no elements left of the pivot that are greater than the pivot, and there are no elements to the right of the pivot that are greater.

```c
void quicksort(int[] input, int lo, int hi) {
  <<<base case>>>
  <<<find pivot>>>
  <<<recurse on pivot>>>
```

That is the high-level structure of quickstort. Let's implement the base case. For the base case, we check if there are less than 2 elements:

```c
if(hi - lo < 2) { return; }
```

Then find the pivot. It is possible to get $$O(n)$$ performance on average by choosing pivots randomly.

```c
```

Finally, we recurse left over the range `lo` to `pivot`, and right over the range `pivot` to `high`.

```c
quicksort(input, lo, pivot);
quicksort(input, pivot, high);```
- Once you have a pivot, you recurse on the left and the right range. This divide and conquer is where the $$\log n$$ term comes from. This is because cutting something in half can be done at most $$\log_2 n$$ times, and all logarithms are in the same asymptotic class of functions.

