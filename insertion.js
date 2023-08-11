/**
 * Approach
 * 1. Start by picking the second element
 * 2. Compare the second element with the one before it and swap if necessary
 * 3. Continue to the next element and if its in incorrect order, iterate through the sorted portion and place
 *      the element at the right spot
 * 4. Repeat until the array is sorted
 * [1,3,2]
 * [1,2,3]
 */

const insertionSort = (arr) => {
  let current;

  for (let i = 1; i < arr.length; i++) {
    current = arr[i];
    for (let j = i - 1; j >= 0; j--) {
      if (arr[j] > current) {
        arr[j + 1] = arr[j];
        arr[j] = current;
      }
    }
  }

  return arr;
};

const input = [29, 14, 44, 3, 5, 1, 17, 9];
console.log(insertionSort(input));
