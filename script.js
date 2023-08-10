let scorePlayer = 0;
let scoreComp = 0;

function getComputerChoice() {
    let choiceArray = ["rock", "paper", "scissors"];
    let computerChoice = Math.floor(Math.random() * choiceArray.length);
   return choiceArray[computerChoice];
}



function playRound(playerSelection, computerSelection) {

computerSelection = getComputerChoice();
playerSelection = prompt("Make a choice!", 'Rock, paper or scissors?').toLowerCase();

    if (playerSelection === computerSelection) {
        console.log("It's a tie")
        return 0

    } else if (playerSelection === "rock" && computerSelection === "scissors"){
        console.log("You won! Rock beats scissors.")
        return 1;

    } else if (playerSelection === "paper" && computerSelection === "rock") {
        console.log("You won! Paper beats rock.")
        return 1;

    } else if (playerSelection === "scissors" && computerSelection === "paper") {
        console.log("You won! Scissors beats paper.")
        return 1;

    } else {
        console.log(`You lost! The computer chose ${computerSelection}.`)
        return 2;
    }
}



function game() {

result = playRound() 

    if (result === 0) {
        console.log(`The score is ${scorePlayer} for you and ${scoreComp} for the computer`);

    } else if (result === 1 ) {
        console.log(`The score is ${++scorePlayer} for you and ${scoreComp} for the computer.`);
        

    } else if (result === 2) {
        console.log(`The score is ${scorePlayer} for you and ${++scoreComp} for the computer.`);
    }

    if (scorePlayer === 5) {
        console.log(`You won the round! You won five times and the computer scored ${scoreComp}`);
        scorePlayer = 0;
        scoreComp = 0;

    } else if (scoreComp === 5) {
        console.log(`You loose with a score of ${scorePlayer}.`)
        scorePlayer = 0;
        scoreComp = 0;
    }
}