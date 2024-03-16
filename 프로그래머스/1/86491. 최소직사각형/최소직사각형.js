function solution(sizes) {
    const sortSizes = sizes.map(size => size.sort((a, b) => b - a));
    const maxWidth = Math.max(...sortSizes.map(([width, height]) => width));
    const maxHeight = Math.max(...sortSizes.map(([width, height]) => height));

    return maxWidth * maxHeight;
}


