function solution(clothes) {
    let result = 1;
    const hashMap = new Map();
    
    for (const cloth of clothes) {
        if (hashMap.has(cloth[1])) {
            hashMap.set(cloth[1], hashMap.get(cloth[1]) + 1)
        } else {
            hashMap.set(cloth[1], 1)
        }
    }
    
    for (const [key, value] of hashMap) {
        result = result * ( value + 1 )
    }
    
    return result - 1
}