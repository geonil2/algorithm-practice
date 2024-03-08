function solution(game_board, table) {
    let result = 0;
    const n = game_board.length;
    const emptyField = [];
    const blocks = [];
    
    for (let i = 0; i < n; i++) {
        for (let j = 0; j < n; j++) {
            if (game_board[i][j] === 0) {
                emptyField.push(bfs(game_board, i, j, 0, n));
            }
        }
    }
    
    for (let i = 0; i < n; i++) {
        for (let j = 0; j < n; j++) {
            if (table[i][j] === 1) {
                blocks.push(bfs(table, i, j, 1, n));
            }
        }
    }
    // console.log(blocks)
    blocks.forEach(block => {
        for (let i = 0; i < emptyField.length; i++) {
          let match = false;
            
            for (let j = 0; j < 4; j++) {
                block = rotateBlock(block);
                
                if (JSON.stringify(block) === JSON.stringify(emptyField[i])) {
                    result+= block.length;
                    emptyField.splice(i, 1);
                    match = true;
                    break;
                }
            }
            
            if (match) break;
        }
    })
    
    return result;
}

const direction = [
  [0, 1],
  [0, -1],
  [1, 0],
  [-1, 0],
];

function bfs(table, startX, startY, nodeValue, n) {
    const visited = Array.from(Array(n), () => Array(n).fill(false));

    const queue = [];
    let block = [];

    queue.push([startX, startY]);
    visited[startX][startY] = true;

    while (queue.length !== 0) {
        const [x, y] = queue.shift();

        block.push([x, y]);
        table[x][y] = n;

        for (let i = 0; i < 4; i++) {
            const nx = x + direction[i][0];
            const ny = y + direction[i][1];

            if (nx < 0 || nx >= n || ny < 0 || ny >= n) continue;

            if (!visited[nx][ny] && table[nx][ny] === nodeValue) {
                visited[nx][ny] = true;
                queue.push([nx, ny]);
                table[nx][ny] = nodeValue;
            }
        }
    }
    
  return moveBlock(block);
}

function moveBlock(block) {
  const minX = Math.min(...block.map(el => el[0]));
  const minY = Math.min(...block.map(el => el[1]));

  return block.map((el) => [el[0] - minX, el[1] - minY]).sort();
}

function rotateBlock(block) {
    const maxX = Math.max(...block.map(el => el[0]));
    const maxY = Math.max(...block.map(el => el[1]));
    const max = maxX > maxY ? maxX : maxY;
    const roatedBlock = block.map(([x, y]) => [max - y, x]);
    
    
    return moveBlock(roatedBlock);
}
