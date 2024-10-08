
function getComputerChoice() {

    const randomNum = Math.floor(Math.random() * 3);

    if (randomNum === 0){
        return "Rock";}
    else if (randomNum === 1){
        return "Paper";}
    else{
        return "Scissors";}    
    

}


let humanScore = 0;
let computerScore = 0;


function playRound(humanChoice, computerChoice) {

        let result = "";
        
        if (humanChoice === "Rock" && computerChoice === "Scissors"){
            humanScore++;
            result = `Human choice: ${humanChoice}. Computer choice: ${computerChoice}, You win! ` 

        }
        else if (humanChoice === "Rock" && computerChoice === "Paper"){
            computerScore++;
            result = `Human choice: ${humanChoice}. Computer choice: ${computerChoice}, You lose! ` 

        }
        else if (humanChoice === "Scissors" && computerChoice === "Paper"){
            humanScore++;
            result = `Human choice: ${humanChoice}. Computer choice: ${computerChoice}, You win! ` 

        }
        else if (humanChoice === "Scissors" && computerChoice === "Rock"){
            computerScore++;
            result = `Human choice: ${humanChoice}. Computer choice: ${computerChoice}, You lose! ` 

        }
        else if (humanChoice === "Paper" && computerChoice === "Rock"){
            humanScore++;
            result = `Human choice: ${humanChoice}. Computer choice: ${computerChoice}, You win! ` 
     
        }
        else if (humanChoice === "Paper" && computerChoice === "Scissors"){
            computerScore++;
            result = `Human choice: ${humanChoice}. Computer choice: ${computerChoice}, You lose! ` 

        }
        else{
            result = `Human choice: ${humanChoice}. Computer choice: ${computerChoice}, It's a tie ` 
        }

        const resultParagraph = document.querySelector("#result");
        resultParagraph.textContent = result;

}

const buttons = document.querySelectorAll("button");

buttons.forEach((button) => {
   
    button.addEventListener("click", () => {
        const humanChoice = button.textContent;
        const computerChoice = getComputerChoice();
        playRound(humanChoice, computerChoice);

        const humanScoreSpan = document.querySelector("#human-score");
        const computerScoreSpan = document.querySelector("#computer-score");

        humanScoreSpan.textContent = humanScore;
        computerScoreSpan.textContent = computerScore;
    });
  });









