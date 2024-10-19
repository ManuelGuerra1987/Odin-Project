function knightMoves([x,y],[w,z]){

    let queue = [];
    let path = [];
    let moves = [[2,1],[1,2],[-1,2],[-2,1],[-2,-1],[-1,-2],[1,-2],[2,-1]];

    path.push([x,y])
    queue.push([[x,y],path])

    while (queue.length > 0){

        let [currPos,currPath] = queue.shift();
        let [currX, currY] = currPos;

        if (currX === w && currY === z){
            return currPath;
        }

        for (let i = 0; i < 8; i++){

            let move = moves[i];
            let dx = move[0];
            let dy = move[1];

            if (currX+dx >= 0 && currX+dx <= 7 && currY+dy >= 0 && currY+dy <= 7){

                let cpath = [...currPath];
                cpath.push([currX+dx,currY+dy]);
                queue.push([[currX+dx,currY+dy],cpath]);
            }
        }
    }
    return;
}


console.log(knightMoves([0, 0], [7, 7]));
