function getComputerChoice() {
    let choiceArray = ["rock", "paper", "scissors"];
   let computerChoice = Math.floor(Math.random() * choiceArray.length);
   return choiceArray[computerChoice];


   //    if
//    (computerChoice == 0) {
   //     console.log("Rock")
//     return 0;
//    }
//    else if 
//    (computerChoice == 1) {
//     return "Paper";
//    }
//    else if
//    (computerChoice == 2) {
//     return "Scissors";
//    }
}



function playRound(playerSelection, computerSelection) {

let playerChoice = playerSelection.toLowerCase()
let playThrough = 0;

if (playerChoice === "rock") {
    playThrough = 0;
} else if (playerChoice === "paper") {
    playThrough = 1;
} else if (playerChoice === "scissors") {
    playThrough = 2;
}

if (computerSelection === "rock") {
    compThrough = 0;
} else if (computerSelection === "paper") {
    compThrough = 1;
} else if (computerSelection === "scissors") {
    compThrough = 2;
}


if (playThrough === compThrough) {
    return "It's a tie"
} else if (playThrough == 0 && compThrough == 2){
    return `You won! ${playerSelection} beats ${computerSelection}.`;
} else if (playThrough == 1 && compThrough == 0) {
    return `You won! ${playerSelection} beats ${computerSelection}.`;
} else if (playThrough == 2 && compThrough == 1) {
    return `You won! ${playerSelection} beats ${computerSelection}.`;
} else {
    return `You lost! ${computerSelection} beats ${playerSelection}`;
}

    
}
//rock = 0
//paper = 1
//scissor = 2
//the Player puts puts in a var
// the let will be rock, paper or scissor
//the function takes the playerSelect and the computerSelect
//the computerSelect basically are the numbers 0,1,2
//when the player inputs e.g. rock the function takes the word and passes 
//the function should take the given string and pass it to a number