+++
title = "Literate Quicksort"
date = 2021-12-31T07:01:33-08:00
tags = ["algorithms", "programming", "literate-programming"]
draft = true
+++


Quicksort is a recursive algorithm for sorting. To be properly generic, it can sort any set \\( S \\) of items with a total ordering relation \\( R \\) defined on, it. But I'm going to use integers, and there will be no loss of generality in doing this.

The input to quicksort is an array of integers `int[]`. If there are less than 2 elements, then return. Otherwise, you need to find a **pivot**, which has the property that there are no elements left of the pivot that are greater than the pivot, and there are no elements to the right of the pivot that are less. Quicksort's recursive structure makes it easy to implement, since there are only three basic things you need to do: handle the base case

```c ""quicksort function""
void quicksort(int numbers[], int low, int high) {
  <<<"base case">>>
  <<<"debug statement">>>
  <<<"find pivot">>>
  <<<"recurse on pivot">>>
}
```

That is the high-level structure of quickstort. Let's implement the base case. For the base case, we check if there are less than 2 elements:

```c ""base case""
if(high - low < 2) { return; }
```

Then find the pivot. It is possible to get \\( O(n) \\) performance on average by choosing pivots randomly. We can use the `random_number` function from [the previous post](/posts/rand-int-c).

```c ""find pivot""
int pivot = random_number(low+1, high);
```

Finally, we recurse left over the range `low` to `pivot`, and right over the range `pivot` to `high`.

```c ""recurse on pivot""
quicksort(numbers, low, pivot);
quicksort(numbers, pivot, high);
```

To really test this, we should open a [file containing a lot of integers](unsorted_integers.txt)

In C, we need to `fscanf` the integers, assume they are newline-delimited. We will loop over all 1,000,000 integers and put them into an array called `numbers`:

```c ""open unsorted integer file""
FILE *fptr = fopen("unsorted_integers.txt", "r");
int number = 0;
int index = 0;
int numbers[1000000];
while(index < 1000000) {
  fscanf(fptr, "%d\n", &number);
  numbers[index] = number;
  index += 1;
}
fclose(fptr);
```

Now let's put all these pieces together and "tangle" this into a valid program:

```c quicksort.c
#include <stdio.h>

<<<"random int function">>>
<<<"quicksort function">>>

int main() {
  <<<"open unsorted integer file">>>

  // Unsorted
  for(int i = 0; i < 10; i++) {
    printf("%d ", numbers[i]);
  }
  printf("\n");

  int low = 0;
  int high = 1000000;
  quicksort(numbers, low, high);

  // Sorted
  for(int i = 0; i < 10; i++) {
    printf("%d ", numbers[i]);
  }
  return 0;
}
```

This document is a literate program, so it can be directly compiled by running [lmt](https://github.com/driusan/lmt):

```
lmt index.md # outputs quicksort.c
gcc quicksort.c
./a.out
```

Borrow the [`random_number`](/posts/rand-int-c) function
```c ""random int function""
#include <time.h>
#include <stdlib.h>
int random_number(int low, int high) {
  int current_time = time(0);
  srand(current_time);
  return (rand() % (high - low + 1)) + low;
}
```

Good old printf debugging:

```c ""debug statement""
#ifdef
printf("quicksort(numbers, %d, %d)\n", low, high);
```

We can visualize the execution of quicksort as a binary tree: 

