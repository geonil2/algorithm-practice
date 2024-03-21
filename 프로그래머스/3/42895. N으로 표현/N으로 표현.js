function solution(N, number) {
    let result = -1;
    const n = 9;
    const dpTable = Array.from({ length: n }, () => new Set());
    
    for (let i = 1; i < n; i++) { // 1 2 3 4 5 6 7 8
        dpTable[i].add('1'.repeat(i) * N); // { 5 }, { 55 } ...
        
        for (let j = 1; j < i; j++) { // i = 2 j = 1, i = 3, j = 1, 2, i = 4 j = 1, 2, 3...
            for (const arg1 of dpTable[j]) { // 5, 5, 55, 5, 55, 555...
                for (const arg2 of dpTable[i - j]) {
                    // 5 + 5, 5 - 5, 5 * 5, 5 / 5
                    dpTable[i].add(arg1 + arg2);
                    dpTable[i].add(arg1 - arg2);
                    dpTable[i].add(arg1 * arg2);
                    dpTable[i].add(arg1 / arg2);
                }
            }
        }
     
        if (dpTable[i].has(number)) {
            result = i;
            break;
        }
    }
    
    return result;
}