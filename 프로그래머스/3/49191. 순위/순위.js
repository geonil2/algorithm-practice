function solution(n, results) {
    let result = 0;
    const graph = Array.from({ length: n }, () => Array.from({ length: n }).fill(false));

    results.forEach(([x, y]) => {
        const winner = x - 1;
        const loser = y - 1;

        graph[winner][loser] = 1; 
        graph[loser][winner] = -1;
        graph[winner][winner]= 0;
        graph[loser][loser]= 0;
    })

    for (let i = 0; i < n; i++) { // 경유지
        for (let j = 0; j < n; j++) { // 출발지
            for (let k = 0; k < n; k++) { // 도착지
                if (graph[j][i] === 1 && graph[i][k] === 1) { 
                    // a가 b에게 이기고, b가 c를 이기면 a는 c를 이긴 것이다.
                    graph[j][k] = 1;
                } 
                
                if (graph[j][i] === -1 && graph[i][k] === -1) {
                    // a가 b에게 지고 b가 c에게 지면 a는 c에게 진 것이다.
                    graph[j][k] = -1;
                }
            }
        }   
    }
    
    graph.forEach((line) => {
        if (!line.filter((result) => result === false).length) {
            result++;
        }
    })
    
    return result;
}