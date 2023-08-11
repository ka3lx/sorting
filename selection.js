/**
 * Selection sort approach - Start with the first element, traverse till the end,
 * find the minimum value and move it to the beginning
 */

const selectionSort = (arr) => {
  let min, index;

  for (let i = 0; i < arr.length - 1; i++) {
    min = arr[i];
    index = i;
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[j] < min) {
        min = arr[j];
        index = j;
      }
    }

    [arr[i], arr[index]] = [arr[index], arr[i]];
  }

  return arr;
};

const arr = [15, 6, 7, 1, 44, 39, 100, 41];
console.log(selectionSort(arr));
