function solution(operations) {
    const result = [];
    
    const insertNumber = (num) => {
        result.push(num)
    }

    const removeMaxNumber = () => {
        const maxNumberIndex = result.indexOf(Math.max(...result));
        result.splice(maxNumberIndex, 1)
    }

    const removeMinNumber = () => {
        const maxNumberIndex = result.indexOf(Math.min(...result));
        result.splice(maxNumberIndex, 1);
    }
    
    operations.map(operation => {
        if (operation.startsWith("I ")) {
            insertNumber(Number(operation.replace('I ', '')));
        } else if (operation.startsWith("D 1")) {
            removeMaxNumber();
        } else if (operation.startsWith("D -1")) {
            removeMinNumber();
        }
    })
    
    return result.length === 0 ? [0, 0] : [Math.max(...result), Math.min(...result)];
}

