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