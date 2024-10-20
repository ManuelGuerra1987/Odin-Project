class Ship{
    constructor(length,coordinates){
        this.length = length;
        this.hits = 0;
        this.coordinates = coordinates;
    }

    hit(){
        if(!this.isSunk()){
            this.hits++;
        }
    }

    isSunk(){
        if(this.hits === parseInt(this.length)){
            return true;
        }
        else{
            return false;
        }
    }
}

class Gameboard{
    constructor(){
        this.board = Array.from({ length: 10 }, () => Array(10).fill(0));
        this.ships = [];
        this.missedShots = [];
    }

    placeShip(length,coordinates){

        coordinates = coordinates;
        let ship = new Ship(length,coordinates);
        this.ships.push(ship);

        for (let i = 0; i < length; i++){
            let coordinate = coordinates[i];
            let [row,col] = coordinate;
            this.board[row][col] = 1;
        }
    }

    receiveAttack (coordinate){

        let [row,col] = coordinate;

        if(this.board[row][col] === 1){

            for (let ship of this.ships){
                
                for (let coord of ship.coordinates){

                    if(coord[0] === row && coord[1] === col){

                        ship.hit();
                        return;
                    }
                }
            }
        }
        else{
            this.missedShots.push(coordinate);
        }
    }

    hasShipsLeft(){

        let shipsQ = this.ships.length;
        let shipsSunked = 0;

        for (let ship of this.ships){
            if(ship.isSunk()){
                shipsSunked++;
            }
        }
        if (shipsQ === shipsSunked){
            return false;
        }
        else{
            return true;
        }

    }
}

class Player{
    constructor(type){
        this.type = type;
        this.board = new Gameboard();
    }
}




function createGrid(size,player){

    const containerDiv = document.querySelector("#container");
    const squareSize = (400 / size).toFixed(2);

    const rows = size;
    const cols = size;

    if (player.type === "human"){

        for (let i = 0; i < rows; i++){
            for (let j = 0; j < cols; j++){

                const square = document.createElement('div'); 
                square.className = 'grid-square'; 
        
                square.style.width = `${squareSize}px`;
                square.style.height = `${squareSize}px`;
                square.style.border = '1px solid #ccc';
                square.style.boxSizing = 'border-box';
    
                if(player.board.board[i][j] === 1){
                    square.style.backgroundColor = 'black';
                }
                else if(player.board.board[i][j] === 0){
                    square.style.backgroundColor = 'white';
                }
                
        
                containerDiv.appendChild(square);

            }
        }
    }

}

let player1 = new Player("human");

player1.board.placeShip(4,[[3,1],[3,2],[3,3],[3,4]]);
player1.board.placeShip(2,[[1,1],[1,2]]);

createGrid(10,player1);