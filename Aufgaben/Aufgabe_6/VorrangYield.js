import { topoSort } from "./topoSort.js";

class Vorrang {
  constructor(arr) {
    this.arr = arr;
  }
  *[Symbol.iterator]() {
    const sortedArr = topoSort(this.arr);
    let arrLen = sortedArr.length;
    console.log(arrLen);
    while (arrLen.length > 0) {
      arrLen = sortedArr.length;
      const cur = sortedArr.shift();
      console.log(cur);
      yield cur;
    }
  }
}

const testArray = [["schlafen", "studieren"], ["essen", "studieren"], ["studieren", "prüfen"]]

const vorrang = new Vorrang(testArray);

for (const next of vorrang) {
  console.log(next);
}