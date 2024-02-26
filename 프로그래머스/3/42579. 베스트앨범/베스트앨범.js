function solution(genres, plays) {
    const result = [];
    const hashMap = new Map();
    const maxHashMap = new Map();
    const secondMaxHashMap = new Map();
    
    for (let i = 0; i < genres.length; i++) {
        hashMap.set(genres[i], (hashMap.get(genres[i]) || 0) + plays[i]);
    }
    
    for (let i = 0; i < genres.length; i++) {
        const genre = genres[i];
        const play = plays[i];
        
        if (!maxHashMap.has(genre) || play > maxHashMap.get(genre)) {
            secondMaxHashMap.set(genre, maxHashMap.get(genre) || 0);
            maxHashMap.set(genre, play);
        } else if (!secondMaxHashMap.has(genre) || play > secondMaxHashMap.get(genre)) {
            secondMaxHashMap.set(genre, play);
        }
    }
    
    const sortedGenreList = [...hashMap.keys()].sort((a, b) => hashMap.get(b) - hashMap.get(a));
    
    for (const genre of sortedGenreList) {
        const maxValue = maxHashMap.get(genre);
        const secondMaxValue = secondMaxHashMap.get(genre);
        const maxIndex = plays.indexOf(maxValue);
        
        result.push(maxIndex);
        
        const secondMaxIndex = maxValue === secondMaxValue ? plays.indexOf(secondMaxValue, maxIndex + 1) : plays.indexOf(secondMaxValue)
        
        if (secondMaxIndex !== -1 && secondMaxIndex !== maxIndex) {
            result.push(secondMaxIndex)
        }
    }
    
    return result
}