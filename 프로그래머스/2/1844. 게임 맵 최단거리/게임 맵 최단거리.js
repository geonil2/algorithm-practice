function solution(maps) {
    const n = maps.length; // 세로 길이
    const m = maps[0].length; // 가로 길이
    const direction = [[0, 1], [0, -1], [1, 0], [-1, 0]];
    
    function bfs(graph, startX, startY) {
      const queue = [];
      queue.push([startX, startY]);

      while (queue.length !== 0) {
        const [x, y] = queue.shift();

        for (let i = 0; i < 4; i++) {
          const nx = x + direction[i][0];
          const ny = y + direction[i][1];

          if (nx < 0 || nx >= n || ny < 0 || ny >= m) // map 밖으로 나가는 경우 제외
            continue;

          if (graph[nx][ny] === 1) { // 처음 방문할 경우에만 확인
            queue.push([nx, ny]);
            graph[nx][ny] = graph[x][y] + 1;
          }
        }
      }
    }
    
    bfs(maps, 0, 0)
    
    const count = maps[n - 1][m - 1];
    
    return count === 1 ? -1 : count;
}