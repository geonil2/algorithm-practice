function solution(n, costs) {
    let result = 0;
    let connectedIsLandCount = 0;
    const sortedCosts = costs.sort((a, b) => a[2] - b[2]); // cost 최소값 기준으로 정렬
    const parent = Array(n).fill().map((_,index) => index);
        
    for (const [from, to, cost] of sortedCosts) {
        const rootFrom = findParent(from, parent);
        const rootTo = findParent(to, parent);
        
        if (rootFrom !== rootTo) { // root from, to가 같지 않다는 것은 서로 연결되어 있지 않다는 것을 의미
            parent[rootTo] = rootFrom;
            result += cost;
            connectedIsLandCount++;
        }
        
        if (connectedIsLandCount === n - 1) break; // 1개 적어야 최소로 모두 연결가능
    }
    
    return result;
}

function findParent(isLand, parent) {
    if (parent[isLand] === isLand) return isLand; // isLand가 root인 경우
    return parent[isLand] = findParent(parent[isLand], parent); // root index로 변경하는 재귀함수
}