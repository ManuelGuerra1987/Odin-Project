// player module pattern
const player = (function () {

  let active = true;

  function isActive(){

    return active;

  }

  function update(value){

    active = value;

  }

  return { isActive, update };

})();

// game module pattern
const game = (function () {

  let active = true;

  function isActive(){

    return active;

  }

  function update(value){

    active = value;

  }

  return { isActive, update };

})();


// gameboard module pattern
const gameboard = (function () {

  let board  = ["","","","","","","","",""];

  function print(){

    for (let i = 0; i < 9; i++){
      
      document.querySelector(`[data-id="${i}"]`).textContent = board[i];
      }  
      }
    
  

  function update(index, value){

    board[index] = value;

  }

  function valid(index){

    if (board[index] === ""){
      return true; }
    else{
      return false;
    }  
    
  }

  function cleanBoard(){
    for (let i = 0; i < board.length; i++) {
      board[i] = "";
    }
  }

  function checkWinner(){

    let winner = "";

    // Rows
    if (board[0] === board[1] && board[1] === board[2] && board[0] !== "") {
      winner = board[0];
    } else if (board[3] === board[4] && board[4] === board[5] && board[3] !== "") {
      winner = board[3];
    } else if (board[6] === board[7] && board[7] === board[8] && board[6] !== "") {
      winner = board[6];
    } 


    // Columns
    else if (board[0] === board[3] && board[3] === board[6] && board[0] !== "") {
      winner = board[0];
    } else if (board[1] === board[4] && board[4] === board[7] && board[1] !== "") {
      winner = board[1];
    } else if (board[2] === board[5] && board[5] === board[8] && board[2] !== "") {
      winner = board[2];
    }  

    // Diagonals
    else if (board[0] === board[4] && board[4] === board[8] && board[0] !== "") {
      winner = board[0];
    } else if (board[2] === board[4] && board[4] === board[6] && board[2] !== "") {
      winner = board[2];
    }

    //tie
    else if (board[0] !== "" && board[1] !== "" && board[2] !== "" 
      && board[3] !== "" && board[4] !== "" && board[5] !== ""
      && board[6] !== "" && board[7] !== "" && board[8] !== ""
    ) {
      winner = "tie";
    }



    if (winner === "X"){
      document.querySelector("#current-user").innerHTML = "Player X's WINS!";
      game.update(false);
    }
    else if (winner === "O"){
      document.querySelector("#current-user").innerHTML = "Player O's WINS!";
      game.update(false);
    }
    else if (winner === "tie"){
      document.querySelector("#current-user").innerHTML = "Its a tie !";
      game.update(false);
    }

  }

  return { print, update, valid, checkWinner, cleanBoard };


})();

//Print current winner
function printCurrentPlayer(){

  if (player.isActive()){

    document.querySelector("#current-user").innerHTML = "Player X's turn";
  }
  else{
    document.querySelector("#current-user").innerHTML = "Player O's turn";
  }

}


//UI
document.querySelectorAll('.grid-button').forEach(button => {
  button.addEventListener('click', function(){

    const index = button.getAttribute('data-id');

    if (game.isActive() && gameboard.valid(index)){
      if (player.isActive()){
        gameboard.update(index,"X");
        player.update(false);
      }
      else{
        gameboard.update(index,"O");
        player.update(true);
      }

    }

    gameboard.print();
    printCurrentPlayer();
    gameboard.checkWinner();

  });

});


document.querySelector("#restart").addEventListener("click", () => {

  game.update(true);
  gameboard.cleanBoard();
  gameboard.print();
  printCurrentPlayer();

});

