//old
function addf(x) {
    return function (y) {
        return x + y;
    }
}
function applyf(f) {
    return function (a) {
        return function (b) {
            return f(a, b);
        }
    }
}
//old


function curry(func, arg) {
    return function (arg2) {
        return func(arg, arg2);
    };
}
function add(a, b) {
    return a + b;
}
function mult(a, b) {
    return a * b;
}
const add3 = curry(add, 3);
console.log(add3(4));
const mult5 = curry(mult, 5);
console.log(mult5(6));

function inc(x) {
    return applyf(add)(x)(1);
}
console.log(inc(5));
function methodize(func) {
    return function (y) {
        return func(this, y);
    };
}
Number.prototype.add = methodize(add);
console.log((3).add(4));

function demethodize(func) {
    return function (that, y) {
        return func.call(that, y);
    };
}
console.log(demethodize(Number.prototype.add)(5, 6));

function twice(func) {
    return function (x) {
        return func(x, x);
    };
}
const double = twice(add);
console.log(double(11));
const square = twice(mult);
console.log(square(11));

function composeu(func1, func2) {
    return function (x) {
        return func2(func1(x));
    };
}
console.log(composeu(double, square)(3));

function composeb(func1, func2) {
    return function (a, b, c) {
        return func2(func1(a, b), c);
    };
}
console.log(composeb(add, mult)(2, 3, 5));

function once(func) {
    return function () {
        const f = func;
        func = null;
        return f.apply(this, arguments);
    };
}
const add_once = once(add);
console.log(add_once(3, 4));
// console.log(add_once(3, 4));

function counterf(x) {
    return {
        inc: function () {
            return x += 1;
        },
        dec: function () {
            return x -= 1;
        }
    };
}
console.log(counterf(10).inc());
console.log(counterf(10).dec());

function revocable(func) {
    return {
        invoke: function () {
            return func.apply(this, arguments);
        },
        revoke: function () {
            func = null;
        }
    };
}
const temp = revocable(alert);
console.log(temp.invoke(3));
temp.revoke();