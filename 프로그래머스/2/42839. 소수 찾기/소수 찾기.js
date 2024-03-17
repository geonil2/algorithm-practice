function solution(numbers) {
    let result = 0;
    let permutationedNumber = [];
    const numberArray = [...numbers];
    
    for (let i = 0; i < numberArray.length; i++) {
        const numbers = permutation(numberArray, i + 1);
        numbers.forEach(number => permutationedNumber.push(Number(number.join(''))));
    }
    
    
    [...new Set(permutationedNumber)].forEach(number => isPrime(number) && result++);
    
    return result;
}

function permutation (array, selectNumber) {
  const results = [];
    
  if (selectNumber === 1) return array.map((value) => [value]);

  array.forEach((fixed, index, origin) => {
    const rest = [...origin.slice(0, index), ...origin.slice(index + 1)];
    const permutations = permutation(rest, selectNumber - 1);
    const attached = permutations.map((permutation) => [fixed, ...permutation]);
      
    results.push(...attached);
  });

  return results;
};

function isPrime(number) {
    if (number <= 1) return false;
    if (number % 2 === 0) return number === 2 ? true : false;
  
    const sqrt = parseInt(Math.sqrt(number));

    for (let i = 3; i <= sqrt; i += 2) {
        if(number % i === 0) {
            return false;
        }
    }
  
    return true;
}