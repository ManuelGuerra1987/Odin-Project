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
        this.goodShots = [];
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
                        this.goodShots.push(coordinate);
                        return;
                    }
                }
            }
        }
        else{
            this.missedShots.push(coordinate);
        }
    }

    isInMissedShots(coordinate) {
        for (let coord of this.missedShots) {
            if (coord[0] === coordinate[0] && coord[1] === coordinate[1]) {
                return true;
            }
        }
        return false;
    }

    isInGoodShots(coordinate) {
        for (let coord of this.goodShots) {
            if (coord[0] === coordinate[0] && coord[1] === coordinate[1]) {
                return true;
            }
        }
        return false;
    }

    hasShipsLeft(){

        let shipsQ = parseInt(this.ships.length);
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


function generatePcShoot() {
    let row, col;
    do {
        row = Math.floor(Math.random() * 10);
        col = Math.floor(Math.random() * 10);
    } while(player1.board.isInMissedShots([row, col]) || player1.board.isInGoodShots([row, col]));
    console.log([row,col]);

    return [row, col];
}

function endGame(){

    document.querySelector("#container-human").style.border = "1px solid rgb(11, 127, 228)";
    document.querySelector("#container-human").innerHTML = "";
    document.querySelector("#container-pc").style.border = "1px solid rgb(11, 127, 228)";
    document.querySelector("#container-pc").innerHTML = "";
    document.querySelector("form").innerHTML = "";

}

function humanTurn() {

    if (!game) return;

    let titleDiv = document.querySelector("#turn-title"); 
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
                    endGame();
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
                    endGame();
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

    if (!game) return;

    let titleDiv = document.querySelector("#turn-title");

    let coord = generatePcShoot();
    let [row, col] = coord;
    
    let square = document.querySelector(`#container-human .grid-square[data-coordinate='${row}-${col}']`);
    
    if (player1.board.board[row][col] === 1) {
        square.style.backgroundColor = 'red'; 
        player1.board.receiveAttack([row, col]);
        
        if (!player1.board.hasShipsLeft()) {
            game = false;
            titleDiv.textContent = "PC wins!";
            endGame();
            return;
        }
        return;
       
    } else if (player1.board.board[row][col] === 0) {
        square.style.backgroundColor = 'green'; 
        player1.board.receiveAttack([row, col]);
        
        if (!player1.board.hasShipsLeft()) {
            game = false;
            titleDiv.textContent = "PC wins!";
            endGame();
            return;
        }
        return;
       
    }


}
let game = true;
let player1 = new Player("human");

//Add ship
document.querySelector("#submit-button").addEventListener("click", () => {

    const length = document.querySelector("#form-length").value;
    const row = document.querySelector("#form-row").value;
    const col = document.querySelector("#form-col").value;

    let coordinates = [];
  
    for (let i = 0; i < length; i++){

        let coordinate = [parseInt(row),parseInt(col) + parseInt(i)];
        coordinates.push(coordinate);
    }

    player1.board.placeShip(length,coordinates);
  
    document.querySelector("#form-length").value = "";
    document.querySelector("#form-row").value = "";
    document.querySelector("#form-col").value = "";
  
    let containerDiv = document.querySelector("#container-human");
    containerDiv.innerHTML = "";
    createGrid(10,player1);
  });


function generatePcShips(){

    let coordinates1 = [];
    let row1 = Math.floor(Math.random() * 4);
    let col1 = Math.floor(Math.random() * 4);

    for (let i = 0; i < 4; i++){

        let coordinate = [parseInt(row1),parseInt(col1) + parseInt(i)];
        coordinates1.push(coordinate);
    }

    player2.board.placeShip(4,coordinates1);

    let coordinates2 = [];
    let row2 = Math.floor(Math.random() * (6 - 4 + 1)) + 4;
    let col2 = Math.floor(Math.random() * 4);

    for (let i = 0; i < 4; i++){

        let coordinate = [parseInt(row2),parseInt(col2) + parseInt(i)];
        coordinates2.push(coordinate);
    }

    player2.board.placeShip(4,coordinates2);
}

let player2 = new Player("pc");
generatePcShips();
createGrid(10,player1);
createGrid(10,player2);

humanTurn();

