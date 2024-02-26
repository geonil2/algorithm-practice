function solution(arr) {
    const result = [];
    
    for (i = 0; i < arr.length; i++) {
        if (arr[i] !== arr[i + 1]) {
            result.push(arr[i])
        }    
    }
    
    return result
}