function fibonacci(maxNr) {
    const arr = [];
    arr[0] = 0n;
    arr[1] = 1n;
    for (let i = 2; i < maxNr; i++) {
        arr[i] = arr[i - 1] + arr[i - 2];
        // arr[i] = BigInt(arr[i - 1] + arr[i - 2]);

    }
    return arr;
}
let NumberToTest = {
    maxsafeInteger: Number.MAX_SAFE_INTEGER,
    maxValue: Number.MAX_VALUE,
}
let arrFibonacci = fibonacci(15000);
function findIndex(arr, maxValue) {
    for (let i = 0; i < maxValue; i++) {
        if (arrFibonacci[i] > NumberToTest.maxsafeInteger) {
            console.log("The number " + arrFibonacci[i] + " is bigger than the max safe integer " + NumberToTest.maxsafeInteger);
            console.log("The index of the number bigger is " + i);
            console.log("Index of highest:" + (i - 1));
            return (i - 1);
        }
        // console.log(arrFibonacci[i]);
    }
}
let indexMaxsafeInteger = findIndex(arrFibonacci, NumberToTest.maxsafeInteger);
let indexMaxValue = findIndex(arrFibonacci, NumberToTest.maxValue);
console.log("The number " + arrFibonacci[indexMaxsafeInteger] + " is the closest to the max safe integer " + NumberToTest.maxsafeInteger);
console.log("The number " + arrFibonacci[indexMaxValue] + " is the closest to the max value " + NumberToTest.maxValue);
// console.log(NumberToTest.maxsafeInteger);
// console.log(NumberToTest.maxValue);
// console.log("-----------------------");
// let arrFibonacci = fibonacci(2000);
// // console.log(arrFibonacci[arrFibonacci.length-1]);
// console.log(arrFibonacci[100]);
// console.log(arrFibonacci[200]);
// console.log(arrFibonacci[300]);
console.log(arrFibonacci[400]);
console.log("Show 1000:")
console.log(arrFibonacci[1000]);
console.log("Show 1500:")
//
console.log(arrFibonacci[1500]);
console.log("Show 2000:")

console.log(arrFibonacci[2000 - 1]);
console.log(arrFibonacci[30000 - 1]);

function findUndefined(arr) {
    for (let i = 0; i < 30000; i++) {
        if (arrFibonacci[i] == undefined) {
            console.log("Index of highest:" + (i - 1));
            return (i - 1);
        }
        // console.log(arrFibonacci[i]);
    }
}
let undefined_bigint = findUndefined(arrFibonacci);
console.log(undefined_bigint);
console.log(undefined_bigint +1);
console.log(arrFibonacci[undefined_bigint]);
console.log(arrFibonacci[undefined_bigint + 1]);
