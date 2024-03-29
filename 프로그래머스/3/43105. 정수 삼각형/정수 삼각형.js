function solution(triangle) {
    const n = triangle.length;

    for(let i = 1 ; i < n; i++) {
        for (let j = 0; j <triangle[i].length; j++) {
            triangle[i][j] += Math.max(triangle[i - 1][j - 1] || 0, triangle[i - 1][j] || 0);
        };
    };

    return Math.max(...triangle[n - 1]);
}
