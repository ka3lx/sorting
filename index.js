"use strict";

class Sorter {
  constructor(arr) {
    this.array = arr;
  }

  /**
   *
   * @param {"ASC" | "DSC"} order
   */
  bubleSort(order = "ASC") {
    if (order == "ASC") {
      for (let i = 0; i < this.array.length; i++) {
        for (let j = 0; j < this.array.length - i; j++) {
          if (this.array[j] > this.array[j + 1]) {
            [this.array[j], this.array[j + 1]] = [
              this.array[j + 1],
              this.array[j],
            ];
          }
        }
      }
    } else {
      for (let i = 0; i < this.array.length; i++) {
        for (let j = 0; j < this.array.length - i; j++) {
          if (this.array[j] < this.array[j + 1]) {
            [this.array[j], this.array[j + 1]] = [
              this.array[j + 1],
              this.array[j],
            ];
          }
        }
      }
    }

    return this.array;
  }
}

const array = [180, 165, 170];
console.log(new Sorter(array).bubleSort("DSC"));
