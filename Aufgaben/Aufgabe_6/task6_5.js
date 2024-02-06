//ToDo
import { Vorrang } from "./VorrangYield.js";
function deepCopy(struct) {
    let copy = {};
    for (let key in struct) {
        // if (typeof struct[key] == "object") {
        //     copy[key] = deepCopy(struct[key]);
        // } else {
        //     copy[key] = struct[key];
        // }
        copy[key] = typeof struct[key] == "object"
            ? deepCopy(struct[key]) : struct[key];
    }
    return copy;
}
function deepCopy2(struct) {
    return JSON.parse(JSON.stringify(struct));
}

const testArray = [["schlafen", "studieren"], ["essen", "studieren"], ["studieren", "prüfen"]]

const vorrang = new Vorrang(testArray);

const vorrangCopy = deepCopy(vorrang);
const vorrangCopy2 = deepCopy2(vorrang);
console.log(vorrangCopy);
console.log(vorrangCopy2);
