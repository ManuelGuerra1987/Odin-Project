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

    let containerDiv;

    if (player.type === "human"){
        containerDiv = document.querySelector("#container-human");
    }
    else if (player.type === "pc"){
        containerDiv = document.querySelector("#container-pc");
    }
    
    const squareSize = (400 / size).toFixed(2);
    const rows = size;
    const cols = size;

    for (let i = 0; i < rows; i++){
        for (let j = 0; j < cols; j++){

            const square = document.createElement('div'); 
            square.className = 'grid-square'; 
            square.setAttribute('data-coordinate', `${i}-${j}`);
            square.style.width = `${squareSize}px`;
            square.style.height = `${squareSize}px`;
            square.style.border = '1px solid #ccc';
            square.style.boxSizing = 'border-box';
    
            if(player.type === "human" && player.board.board[i][j] === 1){
                square.style.backgroundColor = 'black';
            }
            else{
                square.style.backgroundColor = 'white';
            }

                
            containerDiv.appendChild(square);

        }
    }
}



function generatePcShoot(){

    let row = Math.floor(Math.random() * 10);
    let col = Math.floor(Math.random() * 10);
    return [row,col];
}



function humanTurn() {
    let titleDiv = document.querySelector("#turn-title");
    titleDiv.textContent = "Human turn";
    
    let squares = document.querySelectorAll("#container-pc .grid-square");

    squares.forEach((square, index) => {
        square.addEventListener("click", function handleHumanAttack() {
            let row = Math.floor(index / 10);
            let col = index % 10;

            if (player2.board.board[row][col] === 1) {
                square.style.backgroundColor = 'red'; 
                player2.board.receiveAttack([row, col]);

                    if (!player2.board.hasShipsLeft()) {
                        game = false;
                        titleDiv.textContent = "Human wins!";
                        return;
                    }

                    // Cambiar el turno al PC
                    squares.forEach(sq => sq.removeEventListener("click", handleHumanAttack)); 
                    turn = "pc";
                    setTimeout(pcTurn, 1000);
            } else if (player2.board.board[row][col] === 0) {
                square.style.backgroundColor = 'green'; 
                player2.board.receiveAttack([row, col]);

                if (!player2.board.hasShipsLeft()) {
                    game = false;
                    titleDiv.textContent = "Human wins!";
                    return;
                }

                // Cambiar el turno al PC
                squares.forEach(sq => sq.removeEventListener("click", handleHumanAttack)); 
                turn = "pc";
                setTimeout(pcTurn, 1000);
            }
            
        });
    });

 
}

function pcTurn() {

    let titleDiv = document.querySelector("#turn-title");
    titleDiv.textContent = "PC turn";

    let coord = generatePcShoot();
    let [row, col] = coord;
    
    let square = document.querySelector(`#container-human .grid-square[data-coordinate='${row}-${col}']`);
    
    if (player1.board.board[row][col] === 1) {
        square.style.backgroundColor = 'red'; 
        player1.board.receiveAttack([row, col]);
    } else if (player1.board.board[row][col] === 0) {
        square.style.backgroundColor = 'green'; 
        player1.board.receiveAttack([row, col]);
    }

   
    if (!player1.board.hasShipsLeft()) {
        game = false;
        titleDiv.textContent = "PC wins!";
        return;
    }

    // Cambiar el turno de vuelta al humano 
    turn = "human";
    setTimeout(humanTurn, 1000); 
}

let turn = "human";
let game = true;

let player1 = new Player("human");

player1.board.placeShip(4,[[3,1],[3,2],[3,3],[3,4]]);
player1.board.placeShip(2,[[1,1],[1,2]]);

let player2 = new Player("pc");
player2.board.placeShip(4,[[5,1],[5,2],[5,3],[5,4]]);
player2.board.placeShip(3,[[0,0],[0,1],[0,2]]);

createGrid(10,player1);
createGrid(10,player2);

humanTurn();

