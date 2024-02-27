function solution(s){
    let count = 0
    const brackets = [...s];
    
    if (brackets[0] === `)` || brackets[brackets.length - 1] === `(`) return false;
    
    for (const bracket of brackets) {
        bracket === `(` ? count++ : count--
        
        if (count < 0) return false
    }
    
    return !count;
}