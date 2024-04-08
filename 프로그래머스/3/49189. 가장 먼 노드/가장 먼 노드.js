function bfs(adjacencyList) {
    const visited = [0];
    const queue = [0];
    
    while (queue.length) {
        const node = queue.shift();

        for(const next of adjacencyList[node]) {
            if(!visited[next] && visited[next] !== 0) {
                visited[next] = visited[node] + 1;
                queue.push(next);
            }
        }
    }

    return visited;
}

function solution(n, edge) {
    const adjacencyList = new Array(n).fill().map(_ => []);

    for (const line of edge) {
        adjacencyList[line[0] - 1].push(line[1] - 1);
        adjacencyList[line[1] - 1].push(line[0] - 1);
    }

    const distances = bfs(adjacencyList);
    const max = Math.max(...distances);

    return distances.filter(distance => distance === max).length;
}
