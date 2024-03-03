function solution(prices) {
    const result = [];
    let count = 0;
    
    for (let i = 0; i < prices.length; i++) {
        let j = i + 1;
        
        while (prices[i] <= prices[j]) {
            j++;
            count++;
        }
        
        if (prices[i] > prices[j]) count++;
        
        result.push(count);
        count = 0;
    }
    
    return result;
}