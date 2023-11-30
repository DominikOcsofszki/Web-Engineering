// task4

let listOfTasks = [["schlafen", "studieren"], ["essen", "studieren"], ["studieren", "prüfen"]];
let set = new Set();

let dict = new Map();
let dictCount = new Map();
// for (let [first, second] of listOfTasks) {
//     if (dict.has(second)) {
//         dict.set(dict.get(second) + 1);
//     } else {
//         dict.set(second, 1)
//     }
// }
for (let [first, second] of listOfTasks) {
    set.add(first);
    set.add(second);
    if (dictCount.has(second)) {
        dictCount.get(second).push(first)
    } else {
        dictCount.set(second, [first])
    }
}
// console.log(dict);
console.log(dictCount);
console.log(set);
for (let [key, value] of dictCount) {
    console.log(key, value);
}
console.log("----");
for (let x in set) {
    console.log(x);
}