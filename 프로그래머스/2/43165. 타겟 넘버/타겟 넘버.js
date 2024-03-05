function solution(numbers, target) {
    let result = 0;
    const length = numbers.length;
    
    function dfs (index, sum) {
        if (index === length) {
            if (target === sum) {
                console.log(index, sum)
                result++;
            }
            
            return;
        }
        
        dfs(index + 1, sum + numbers[index]);
        dfs(index + 1, sum - numbers[index]);
    }
    
    dfs(0, 0);
    
    return result;
}