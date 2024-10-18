
function knightMoves([x, y], [w, z]) {

    let start = [x, y];
    let queue = [];
    let path = [];
    
    path.push(start);
    queue.push([start, path]);

    const moves = [
        [2, 1], [2, -1], [1, 2], [1, -2],
        [-2, 1], [-2, -1], [-1, 2], [-1, -2]
    ];

    while (queue.length > 0) {

        let [currentPosition, currentPath] = queue.shift();
        let [cx, cy] = currentPosition;

        if (cx === w && cy === z) {
            return currentPath;
        }

        // Generate new movements
        for (let move of moves) {
            let [dx, dy] = move;
            let newX = cx + dx;
            let newY = cy + dy;

            // Inside board check
            if (newX >= 0 && newX < 8 && newY >= 0 && newY < 8) {
                
                let newPath = currentPath.concat([[newX, newY]]);

                queue.push([[newX, newY], newPath]);
            }
        }
    }

    
    return;
}


console.log(knightMoves([3, 3], [4, 3]));
