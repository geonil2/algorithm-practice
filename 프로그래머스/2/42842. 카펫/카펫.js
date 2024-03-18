function solution(brown, yellow) {
    let result = [];
    const maxX = brown / 2 - 1;
    
    for (let x = 3; x <= maxX; x++) {
        const y = ((brown - (x * 2)) / 2) + 2;
    
        if ((x - 2) * (y - 2) === yellow) {
            result.push([x, y]);
        };
    }
    
    return result.length === 1 ? result[0] : result[1];
}