function identity(x) {
    return x;
}

function identity_function(x) {
    return identity(x);
}

function add(x, y) {
    return x + y;
}
function mul (x,y) {
    return x * y;
}

function addf2(x) {
    y_id = identity(y)   
    return x_id + x;
}

function addf(x) {
    return function(y) {
        return x + y;
    }
}
function applyf(f) {
    return function(a){
        return function(b){
            return f(a,b);
        }
    }
}
