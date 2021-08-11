/**
 * 
 * Depth-First Search
 * https://www.freecodecamp.org/learn/coding-interview-prep/data-structures/depth-first-search
 */


function getNonVisitedNeighbours(graph, node, visitedNodes) {
    let neighbours = [];
    for (let i = 0; i < graph[node].length; i++) {
        if (graph[node][i] === 1) neighbours.push(i);
    }
    return neighbours.filter(node => !visitedNodes.has(node));
}

function dfs(graph, root) {
    var reachableNodes = [];

    let nodesToVisit = [root];  // stack
    let visitedNodes = new Set();

    while (nodesToVisit.length > 0) {
        let currentNode = nodesToVisit.pop();
        reachableNodes.push(currentNode);
        visitedNodes.add(currentNode);
        let nonVisitedNeighbours = getNonVisitedNeighbours(graph, currentNode, visitedNodes);
        nonVisitedNeighbours.forEach(node => {
            nodesToVisit.push(node);
        });
    }

    return reachableNodes;
}

var exDFSGraph = [
    [0, 1, 0, 0],
    [1, 0, 1, 0],
    [0, 1, 0, 1],
    [0, 0, 1, 0]
];
console.log(dfs(exDFSGraph, 3));
