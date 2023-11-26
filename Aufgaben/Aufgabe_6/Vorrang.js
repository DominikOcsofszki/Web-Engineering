import { topoSort } from "./topoSort.js";

class Vorrang {
  constructor(arr) {
    this.arr = arr;
  }
  [Symbol.iterator]() {
    const sortedArr = topoSort(this.arr);
    return {
      next() {
        let arrLen = sortedArr.length;
        const cur = sortedArr.shift();
        return { done: arrLen <= 0, value: cur }
      }
    }
  }
}

const testArray = [["schlafen", "studieren"], ["essen", "studieren"], ["studieren", "prüfen"]]

const vorrang = new Vorrang(testArray);

for (const next of vorrang) {
  console.log(next);
}