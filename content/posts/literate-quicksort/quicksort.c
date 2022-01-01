#line 59 "index.md"
#include <stdio.h>

#line 95 "index.md"
#include <time.h>
#include <stdlib.h>
int random_number(int low, int high) {
  int current_time = time(0);
  srand(current_time);
  return (rand() % (high - low + 1)) + low;
}
#line 12 "index.md"
void quicksort(int numbers[], int low, int high) {
#line 23 "index.md"
  if(high - low < 2) { return; }
#line 14 "index.md"
  printf("quicksort(numbers, %d, %d)\n", low, high);
#line 29 "index.md"
  int pivot = random_number(low+1, high);
#line 35 "index.md"
  quicksort(numbers, low, pivot);
  quicksort(numbers, pivot, high);
#line 17 "index.md"
}
#line 63 "index.md"

int main() {
#line 44 "index.md"
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
#line 66 "index.md"

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
