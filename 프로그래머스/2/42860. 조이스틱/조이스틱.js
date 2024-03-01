function solution(name) {
    let offsetCount = 0;
    let cursorCount = name.length - 1;
    const aOffset = 'A'.charCodeAt(0);
    const letterOffsets = [...name].map(letter => letter.charCodeAt(0) - aOffset);
    
    for (let i = 0; i < letterOffsets.length; i++) {
        offsetCount += letterOffsets[i] > 13 ? 26 - letterOffsets[i] : letterOffsets[i];
    }
    
    [...name].forEach((nowCursor, index) => {
        let nextCursor = index + 1;
        
        while (nextCursor < name.length && name[nextCursor] === 'A') 
            nextCursor++;
        
        const toBack = name.length - nextCursor;

        cursorCount = Math.min(cursorCount, (index * 2) + toBack, index + (2 * toBack));
    });
    
    return offsetCount + cursorCount;
}