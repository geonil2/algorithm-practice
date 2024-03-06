function solution(n, computers) {
    let result = 0;
    const visited = [];
    
    function dfs(node) {
        visited[node] = true;
        
        for(let i = 0; i < computers.length; i++) {
            if (computers[node][i] === 1 && !visited[i]) { // 해당 노드와 연결된 노드들도 visit하기 위해
                dfs(i);
            }
        }
    }
    
    for(let i = 0; i < n; i++) {
        if(!visited[i]) {
            dfs(i);
            result++;
        }
    }
    
    return result;
}