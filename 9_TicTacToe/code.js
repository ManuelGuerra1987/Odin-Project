const gameboard  = ["","","","","","","","",""];
let isPlayerturn = true;

function printBoard(){

  for (let i = 0; i < 9; i++){
    if(gameboard[i] !== ""){
      document.querySelector(`[data-id="${i}"]`).textContent = gameboard[i];
    }
  }

}

document.querySelectorAll('.grid-button').forEach(button => {
  button.addEventListener('click', function(){

    const index = button.getAttribute('data-id');
    if (isPlayerturn){
      gameboard[index] = "X";
      isPlayerturn = false;
    }
    else{
      gameboard[index] = "O";
      isPlayerturn = true;
    }
    
    printBoard();

  });

});