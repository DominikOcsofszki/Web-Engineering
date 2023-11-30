
const testArray = [["schlafen", "studieren"], ["essen", "studieren"], ["studieren", "prüfen"]]

function topoSort(array) {
    let result = [];
    let visited = [];
    let stack = [];

    for (let i = 0; i < array.length; i++) {
        if (!visited.includes(array[i][0])) {
            dfs(array[i][0], array, visited, stack);
        }
    }

    while (stack.length > 0) {
        result.push(stack.pop());
    }

    return result;
}

function dfs(node, array, visited, stack) {
    visited.push(node);

    for (let i = 0; i < array.length; i++) {
        if (array[i][0] === node && !(visited.includes(array[i][1]))) {
            dfs(array[i][1], array, visited, stack);
        }
    }

    stack.push(node);
}
console.log(topoSort(testArray));