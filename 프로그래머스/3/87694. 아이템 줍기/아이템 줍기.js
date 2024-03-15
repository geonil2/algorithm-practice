function solution(rectangle, characterX, characterY, itemX, itemY) {
    const [startX, startY] = [1, 1];
    let max = 0;
    
    const twiceRectangle = rectangle.map(([minX, minY, maxX, maxY]) => {
        minX = 2 * minX - startX;
        minY = 2 * minY - startY;
        maxX = 2 * maxX - startX;
        maxY = 2 * maxY - startY;
        
        max = Math.max(maxX, maxY, max);

        return [minX, minY, maxX, maxY];
    });

    characterX = 2 * characterX - startX;
    characterY = 2 * characterY - startY;
    itemX = 2 * itemX - startX;
    itemY = 2 * itemY - startY;
    max += 1
    
    const filledRectangle = makeFilledShape(twiceRectangle, max);
    const borderNode = Array.from({ length: max }, () => Array.from({ length: max }).fill(false));
    
    filledRectangle.forEach(node => {
        if (isBorderNode(node, filledRectangle)) borderNode[node[0]][node[1]] = true;
    })
    
    return bfs(borderNode, characterX, characterY, itemX, itemY) / 2
}

function makeFilledShape(rectangle, max) {
    const nodeList = [];
    const visited = Array.from({ length : max }, () => Array.from({ length : max }).fill(false));
    
    for (const [minX, minY, maxX, maxY] of rectangle) {
        const node = [];

        for (let i = minX; i <= maxX; i++) {
            for (let j = minY; j <= maxY; j++) {
                if (!visited[i][j]) {
                    visited[i][j] = true;
                    node.push([i, j]);
                }
            }
        }

        nodeList.push(...node);
    }

    return nodeList;
}

const eightDirection = [[-1, -1], [-1, 0], [-1, 1], [0, -1], [0, 1], [1, -1], [1, 0], [1, 1]];

function isBorderNode([x, y], filledShape) {
    let surroundingCells = Array.from({ length : 8 }).fill(false);

    for (let i = 0; i < filledShape.length; i ++) {
        const [nx, ny] = filledShape[i];
        
        for (let j = 0; j < 8; j++) {
            const mx = x + eightDirection[j][0];
            const my = y + eightDirection[j][1];

            if (nx === mx && ny === my) surroundingCells[j] = true;
        }

        if (surroundingCells.every(direction => direction === true)) break;
    }
    
    return !surroundingCells.every(direction => direction === true);
}

const fourDirection = [[0, 1], [0, -1], [1, 0], [-1, 0]];

function bfs(graph, startX, startY, finishX, finishY) {
    const queue = [];
    let distance = 0;

    queue.push([startX, startY])
    graph[startX][startY] = false;

    bfsWhile :
    while (queue.length !== 0) {
        const size = queue.length;

        for (let j = 0; j < size; j++) {
            const [x, y] = queue.shift();

            if (x === finishX && y === finishY) {
                break bfsWhile;
            }

            for (let i = 0; i < 4; i++) {
                const nx = x + fourDirection[i][0];
                const ny = y + fourDirection[i][1];

                if (nx < 0 || nx >= graph.length || ny < 0 || ny >= graph.length) continue;
                
                if (graph[nx][ny]) {
                    queue.push([nx, ny]);
                    graph[nx][ny] = false;
                }
            }
        }
        distance += 1
    }
    
    return distance;
}