function solution(numbers) {
    const result = numbers.sort((a, b) => {
        const aString = a.toString();
        const bString = b.toString();
        
        return bString + aString - (aString + bString);
    }).join(``);
    
    return result[0] === `0` ? `0` : result;

}