function solution(n, wires) {
    let result = [];

    for (let i = 0; i < wires.length; i++) {
        result.push(bfs(wires, wires[i]));
    }

    return Math.abs(n - findClosestValue(result, n / 2) - findClosestValue(result, n / 2))
}

function bfs(graph, startEdge) {
    const visited = Array.from({ length: graph.length + 1 }, () => Array.from({ length: graph.length + 1 }).fill(false));
    const queue = [startEdge];
    let count = 1;
    visited[startEdge[0]][startEdge[1]] = true;

    while (queue.length !== 0) {
        const edge = queue.shift();
    
        for (let i = 0; i < graph.length; i++) {
            if (graph[i][0] === edge[0] || graph[i][1] === edge[0]) {
                if (JSON.stringify(edge) !== JSON.stringify(graph[i])) {
                    if (!visited[graph[i][0]][graph[i][1]]) {
                        visited[graph[i][0]][graph[i][1]] = true
                        
                        queue.push(
                            graph[i][0] === edge[0] ? 
                                [graph[i][1], graph[i][0]] : 
                                [graph[i][0], graph[i][1]]
                        );
                        count++;
                    }
                    
                }
            }
        }
    }

    return count;
}

function findClosestValue(array, target) {
    array.sort((a, b) => a - b);

    let closest = array[0];
    let minDiff = Math.abs(target - closest);

    for (let i = 1; i < array.length; i++) {
        const diff = Math.abs(target - array[i]);
        
        if (diff < minDiff) {
            closest = array[i];
            minDiff = diff;
        }
    }

    return closest;
}
