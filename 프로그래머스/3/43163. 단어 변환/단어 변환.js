function solution(begin, target, words) {
    return bfs(begin, target, words);
}

function bfs(begin, target, words) {
    const queue = [];
    const visited = {};
    
    queue.push(begin);
    visited[begin] = 0;
    
    while (queue.length !== 0) {
        const beginText = queue.shift();
        
        if (target === beginText) break;
        
        for (const word of words) {
            if (isOneDiff(beginText, word) && !visited[word]) {
                visited[word] = visited[beginText] + 1;
                queue.push(word);
            }
        }
    }
    
    return visited[target] ?? 0
}

function isOneDiff(begin, word) {
    let diffCount = 0;

    for (let i = 0; i < word.length; i++) {
        if (word[i] !== begin[i]) {
            diffCount++;
        }
    }
    
    return diffCount === 1 ? true : false
}
