function setupTopsort(dependencyPairs) {
    let successors = {};
    let indegs = {};

    for (let [from, to] of dependencyPairs) {
        successors[from] = successors[from] || [];
        successors[from].push(to);

        indegs[from] = indegs[from] || 0;
        indegs[to] = (indegs[to] || 0) + 1;
    }

    return [successors, indegs];
}

function topsort(dependencyPairs) {
    let result = [];
    let [successors, indegs] = setupTopsort(dependencyPairs);
    let nodes = Object.keys(indegs);

    while (nodes.length !== 0) {
        let node = nodes.find(node => indegs[node] === 0);

        if (node === undefined) {
            throw new Error('Cycle detected');
        }

        result.push(node);
        nodes = nodes.filter(key => key !== node);

        if (successors[node] !== undefined) {
            successors[node].forEach(succ => indegs[succ] -= 1);
            delete successors[node];
        }
    }

    return result;
}

const testArray = [["schlafen", "studieren"], ["essen", "studieren"], ["studieren", "prüfen"]]
console.log(topsort(testArray));