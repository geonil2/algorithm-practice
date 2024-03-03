function solution(people, limit) {
    people.sort((a, b) => b - a);
    
    let result = 0;
    let startIndex = 0;
    let endIndex = people.length - 1; // 3
    
    while (startIndex < endIndex) {
        if (people[startIndex] + people[endIndex] > limit) {
            startIndex++;
        } else {
            startIndex++;
            endIndex--;
        }
        
        result++;
    }
    
    if (startIndex === endIndex) result++;
    
    return result;
}
