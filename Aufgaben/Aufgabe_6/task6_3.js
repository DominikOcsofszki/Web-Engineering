import { topoSort } from "./topoSort.js";

export class Vorrang {
  constructor(arr) {
    this.arr = arr;
  }
  *[Symbol.iterator]() {
    const sortedArr = topoSort(this.arr);
    while (sortedArr.length > 0) {
      const cur = sortedArr.shift();
      yield cur;
    }
  }
}

const testArray = [["schlafen", "studieren"], ["essen", "studieren"], ["studieren", "prüfen"]]

const vorrang = new Vorrang(testArray);

for (const next of vorrang) {
  console.log(next);
}
