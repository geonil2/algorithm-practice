function solution(m, n, puddles) {
    const dp = Array.from({ length: n }, () => Array(m).fill(1));
    
    for (const [x, y] of puddles) {
        dp[y - 1][x - 1] = 0
    }
    
    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
            if (dp[j][i] === 1) {
                if (i === 0 && j === 0) continue;
                
                dp[j][i] = ((j > 0 ? dp[j - 1][i] : 0) + (i > 0 ? dp[j][i - 1] : 0)) % 1000000007; 
            }
        }
    }
    
    return dp[n - 1][m - 1];
}
