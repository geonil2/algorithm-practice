function solution(routes) {
    const ranges = [];
    const sortedRoutes = routes.sort((a, b) =>  a[0] - b[0]);

    for (const route of sortedRoutes) {
        if (ranges.length === 0) { // start 
            ranges.push(route);
        } else {
            findRange:
            for (let i = 0; i < ranges.length; i++) { 
                const commonMin = Math.max(route[0], ranges[i][0]);
                const commonMax = Math.min(route[1], ranges[i][1]);

                if (commonMin <= commonMax) { // 공통 부분이 있다면
                    ranges[i] = [commonMin, commonMax];
                    break findRange;
                } else {
                    if (i === ranges.length - 1) { // ranges의 마지막까지 포함되는게 없다면
                        ranges.push(route);
                    }
                }
            }
        }
    }
    
    return ranges.length;
}
