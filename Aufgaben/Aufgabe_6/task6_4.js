import { topoSort } from "./topoSort.js";
//Todo
class Vorrang {
  constructor(arr) {
    this.arr = arr;
  }
  handler = {
    get(receiver, index, arrToHandler) {
      console.log(index);
      return `${arrToHandler[index]} `;
    }
  };
  // p = new Proxy(Vorrang, this.handler);

  *[Symbol.iterator]() {
    const sortedArr = topoSort(this.arr);
    for (let i = 0; i < sortedArr.length; i++) {
      console.log(sortedArr.length - i);
      // yield
      console.log(Reflect.get(this, sortedArr[i]));
      yield sortedArr[i];
    }
    // while (sortedArr.length > 0) {
    //   const p = new Proxy(Vorrang, this.handler);
    //   const cur = sortedArr.shift();
    //   p.get;
    //   yield cur;
    // }
  }
}

const testArray = [["schlafen", "studieren"], ["essen", "studieren"], ["studieren", "prüfen"]]

const vorrang = new Vorrang(testArray);

for (const next of vorrang) {
  console.log(next);
}