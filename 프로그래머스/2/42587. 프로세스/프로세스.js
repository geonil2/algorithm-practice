function solution(priorities, location) {
    let count = 0;
    const array = priorities.map((prioritie, index) => { return { prioritie, index }});
    
    while (array.length) {
        const process = array.shift();
        
        if (array.some(({ prioritie, index }) => prioritie > process.prioritie)) {
            array.push(process)
        } else {
            count++;
            
            if (process.index === location) break;
        }
    }
    
    return count;
}