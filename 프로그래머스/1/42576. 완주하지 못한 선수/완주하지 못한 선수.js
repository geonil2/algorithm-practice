function solution(participant, completion) {
    const map = new Map();
    
    participant.forEach((name) => {
        if (map.has(name)) {
            map.set(name, map.get(name) + 1);
        } else {
            map.set(name, 1);
        }
    })
    
    completion.forEach((name) => {
        if (map.has(name)) {
            map.set(name, map.get(name) - 1);
        }
    })
    
    for (const [name, count] of map) {
        if (count === 1) {
            return name;
        }
    }   
}