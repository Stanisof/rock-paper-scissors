function getComputerChoice() {
    let choiceArray = ["rock", "paper", "scissors"];
   let computerChoice = Math.floor(Math.random() * choiceArray.length);
   return choiceArray[computerChoice];
}


function playRound(playerSelection, computerSelection) {

let playerChoice = playerSelection.toLowerCase()

    if (playerChoice === computerSelection) {
        return "It's a tie"

    } else if (playerChoice === "rock" && computerSelection === "scissors"){
        return "You won! Rock beats scissors.";

    } else if (playerChoice === "paper" && computerSelection == "rock") {
        return "You won! Paper beats rock.";

    } else if (playerChoice === "scissors" && computerSelection === "paper") {
        return "You won! Scissors beats paper.";

    } else {
        return `You lost! The computer chose ${computerSelection}.`;
    }
}

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

// let playThrough = 0;

// if (playerChoice === "rock") {
//     playThrough = 0;
// } else if (playerChoice === "paper") {
//     playThrough = 1;
// } else if (playerChoice === "scissors") {
//     playThrough = 2;
// }

// if (computerSelection === "rock") {
//     compThrough = 0;
// } else if (computerSelection === "paper") {
//     compThrough = 1;
// } else if (computerSelection === "scissors") {
//     compThrough = 2;
// }