console.log("Hello World");

function getComputerChoice() {

    const randomNum = Math.floor(Math.random() * 3);

    if (randomNum === 0){
        return "Rock";}
    else if (randomNum === 1){
        return "Paper";}
    else{
        return "Scissors";}    
    

}

function getHumanChoice(){

    let HumanChoice = prompt("Type R for Rock, P for Paper or S for Scissors");
    HumanChoice = HumanChoice.toUpperCase();

    if (HumanChoice === "R"){
        return "Rock";}
    else if (HumanChoice === "P"){
        return "Paper";}
    else{
        return "Scissors";}  

}

function playGame(){

    let humanScore = 0;
    let computerScore = 0;


    function playRound(humanChoice, computerChoice) {
        
        if (humanChoice === "Rock" && computerChoice === "Scissors"){
            humanScore++;
            console.log(`Human choice: ${humanChoice}`);
            console.log(`Computer choice: ${computerChoice}`);
            console.log("You win! ");
        }
        else if (humanChoice === "Rock" && computerChoice === "Paper"){
            computerScore++;
            console.log(`Human choice: ${humanChoice}`);
            console.log(`Computer choice: ${computerChoice}`);
            console.log("You lose! ");
        }
        else if (humanChoice === "Scissors" && computerChoice === "Paper"){
            humanScore++;
            console.log(`Human choice: ${humanChoice}`);
            console.log(`Computer choice: ${computerChoice}`);
            console.log("You win! ");
        }
        else if (humanChoice === "Scissors" && computerChoice === "Rock"){
            computerScore++;
            console.log(`Human choice: ${humanChoice}`);
            console.log(`Computer choice: ${computerChoice}`);
            console.log("You lose! ");
        }
        else if (humanChoice === "Paper" && computerChoice === "Rock"){
            humanScore++;
            console.log(`Human choice: ${humanChoice}`);
            console.log(`Computer choice: ${computerChoice}`);
            console.log("You win! ");
        }
        else if (humanChoice === "Paper" && computerChoice === "Scissors"){
            computerScore++;
            console.log(`Human choice: ${humanChoice}`);
            console.log(`Computer choice: ${computerChoice}`);
            console.log("You lose! ");
        }
        else{
            console.log(`Human choice: ${humanChoice}`);
            console.log(`Computer choice: ${computerChoice}`);
            console.log("It's a tie");
        }


    }

    for (let i = 0; i < 5; i++ ){

        const humanSelection = getHumanChoice();
        const computerSelection = getComputerChoice();
        playRound(humanSelection,computerSelection);
    }

    console.log(`Human score: ${humanScore}`);
    console.log(`Computer score: ${computerScore}`);
    if (humanScore > computerScore){
        console.log("Human wins");
    }
    else if (computerScore > humanScore){
        console.log("Computer wins");
    }
    else{
        console.log("No winner");
    }

}


playGame();


