function solution(phone_book) {
    const hashMap = new Map()
    for (const number of phone_book) {
        hashMap.set(number, true)
    }
    
    for (const number of phone_book) {
        for(i = 1; i < number.length; i++) {
            const prefix = number.slice(0, i)
            if (hashMap.has(prefix)) {
             return false
            }
        }
    } 
    return true
}