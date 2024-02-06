//for showing saved as .js
const add = (x: number, y: number) => x + y;
const equals = (x: boolean, y: boolean) => x === y;

console.log(add(1, 2));
console.log(add(true, true));
console.log(add(true, false));
var x = y = 1;
console.log(add(equals(x, y), equals(y, x)));
//  │     Argument of type 'boolean' is not assignable to parameter of type 'number'. typescript (2345) [5, 18]
//  │     Argument of type 'boolean' is not assignable to parameter of type 'number'. typescript (2345) [6, 18]
//  │     Cannot find name 'y'. typescript (2304) [7, 9]
//  │     Argument of type 'boolean' is not assignable to parameter of type 'number'. typescript (2345) [8, 18]
//  │     Argument of type 'number' is not assignable to parameter of type 'boolean'. typescript (2345) [8, 25]
//  │     Cannot find name 'y'. typescript (2304) [8, 27]
//  │     Cannot find name 'y'. typescript (2304) [8, 38]
//  │     Argument of type 'number' is not assignable to parameter of type 'boolean'. typescript (2345) [8, 40]
// Es zeigt falsche Zuweisungen an und kann anzeigen wo Fehler vorhanden
// es hilft aber auch beim schreiben von Code, da LSP damit arbeiten kann
