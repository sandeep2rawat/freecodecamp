/**
 * Breadth-First Search
 * https://www.freecodecamp.org/learn/coding-interview-prep/data-structures/breadth-first-search
*/

function getAllNeighbours(graph, node) {
    var neighbours = [];
    for (let i = 0; i < graph[node].length; i++) {
        if (graph[node][i] === 1) neighbours.push(i);
    }
    return neighbours;
}

function filterNonVisitedNodes(nodes, visitedNodes) {
    return nodes.filter(node => !visitedNodes.has(node));
}

function bfs(graph, root) {
    var nodesLen = {};

    // initialize distance to infinity
    (function () {
        for (let i = 0; i < graph.length; i++) {
            nodesLen[i] = Infinity;
        }
    })();

    var visitedNodes = new Set();
    var nodesToVisit = [[root, 0]];
    while (nodesToVisit.length > 0) {
        let [currentNode, distance] = nodesToVisit.shift();
        visitedNodes.add(currentNode);
        nodesLen[currentNode] = distance;
        let neighbours = getAllNeighbours(graph, currentNode);
        neighbours = filterNonVisitedNodes(neighbours, visitedNodes);
        // add nodes to queue to visit
        neighbours.forEach(node => {
            nodesToVisit.push([node, distance + 1]);
        });
    }

    return nodesLen;
};

var exBFSGraph = [
    [0, 1, 0, 0],
    [1, 0, 1, 0],
    [0, 1, 0, 1],
    [0, 0, 1, 0]
];
console.log(bfs(exBFSGraph, 3));
