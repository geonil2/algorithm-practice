function solution(k, dungeons) {
    const permutations = [];
    
    for (let i = 1; i <= dungeons.length; i++) {
        permutations.push(...getPermutation(dungeons, i));
    }
    
    const reverse = permutations.reverse();

    for (let i = 0; i < reverse.length; i++) {
        let isComplete = true;

        reverse[i].reduce((accumulator, currentValue) => {
            if (accumulator >= currentValue[0]) {
                return accumulator - currentValue[1];
            } else {
                isComplete = false;
                return accumulator;
            }
        }, k);
        
        if (isComplete) {
            result = reverse[i].length
            break;
        };
    }
    
    return result;
}

function getPermutation (array, number) {
    const result = [];

    if (number === 1) return array.map((el) => [el]); 

    array.forEach((fixed, index, origin) => {
            const rest = [...origin.slice(0, index), ...origin.slice(index + 1)];
            const permutations = getPermutation(rest, number - 1);
            const attached = permutations.map((el) => [fixed, ...el]); 

            result.push(...attached);
        }
    );

    return result;
}