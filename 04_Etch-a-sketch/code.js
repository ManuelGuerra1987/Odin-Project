function createGrid(size){

    const containerDiv = document.querySelector("#container");
    const squareSize = (400 / size).toFixed(2);

    for (let i = 0; i < size*size; i++) {
     
        const square = document.createElement('div'); 
        square.className = 'grid-square'; 

        square.style.width = `${squareSize}px`;
        square.style.height = `${squareSize}px`;
        square.style.border = '1px solid #ccc';
        square.style.boxSizing = 'border-box';
        square.style.backgroundColor = 'white';

        containerDiv.appendChild(square);
      }

      // hover effect
      const squares = document.querySelectorAll(".grid-square");

      squares.forEach((square) => {
       
        square.addEventListener("mouseenter", () => {
    
            square.style.backgroundColor = "black";
        });
      });
}

// Initial grid
createGrid(16)

function changeGridSize(){

    // Clean grid
    document.querySelector("#container").innerHTML = ''; 

    //prompt size
    let size = parseInt(prompt("Enter grid size"));
    
    createGrid(size);

}

// change size  
document.querySelector("#size-button").addEventListener("click", changeGridSize);



