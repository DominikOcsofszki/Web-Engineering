function performTopologicalSort() {
    const inputField = document.getElementById('inputField');
    const outputDiv = document.getElementById('output');

    // Parse input relationships
    const inputLines = inputField.value.split('\n');
    const relationships = [];

    for (const line of inputLines) {
        const [dependency, task] = line.split('->');
        relationships.push({ dependency: dependency.trim(), task: task.trim() });
    }

    // Perform topological sort
    const sortedTasks = topologicalSort(relationships);

    // Display sorted tasks
    outputDiv.textContent = `Topologische Sortierung: ${sortedTasks.join(' -> ')}`;
}

function topologicalSort(relationships) {
    const graph = createGraph(relationships);
    const visited = new Set();
    const sorted = [];

    for (const node of graph) {
        if (!visited.has(node)) {
            visitNode(node, visited, sorted, graph);
        }
    }

    return sorted.reverse();
}

function visitNode(node, visited, sorted, graph) {
    visited.add(node);

    for (const neighbor of graph.get(node)) {
        if (!visited.has(neighbor)) {
            visitNode(neighbor, visited, sorted, graph);
        }
    }

    sorted.push(node);
}

function createGraph(relationships) {
    const graph = new Map();

    for (const { dependency, task } of relationships) {
        if (!graph.has(dependency)) {
            graph.set(dependency, new Set());
        }
        if (!graph.has(task)) {
            graph.set(task, new Set());
        }

        graph.get(dependency).add(task);
    }

    return graph;
}