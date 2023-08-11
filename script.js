let scorePlayer = 0;
let scoreComp = 0;

function getComputerChoice() {
    let choiceArray = ["rock", "paper", "scissors"];
    let computerChoice = Math.floor(Math.random() * choiceArray.length);
   return choiceArray[computerChoice];
}

let btnRock = document.querySelector('#rock');
btnRock.addEventListener('click', () => {
    player = "rock";
    game();
})

let btnPaper = document.querySelector('#paper');
btnPaper.addEventListener('click', () => {
    player = "paper";
    game();
})

const btnScissors = document.querySelector('#scissors');
btnScissors.addEventListener('click', () => {
    player = "scissors";
    game();
})


function playRound(playerSelection, computerSelection) {

computerSelection = getComputerChoice();
playerSelection = player;

    if (playerSelection === computerSelection) {
        document.getElementById("result").textContent = "It's a tie.";
        return 0

    } else if (playerSelection === "rock" && computerSelection === "scissors"){
        document.getElementById("result").textContent = "You won! Rock beats scissors."
        return 1;

    } else if (playerSelection === "paper" && computerSelection === "rock") {
        document.getElementById("result").textContent = "You won! Paper beats rock."
        return 1;

    } else if (playerSelection === "scissors" && computerSelection === "paper") {
        document.getElementById("result").textContent = "You won! Scissors beats paper."
        return 1;

    } else {
        document.getElementById("result").textContent = `You lost! The computer chose ${computerSelection}.`
        return 2;
    }
}



function game() {

result = playRound() 

    if (result === 0) {
        document.getElementById("scorePlayer").textContent = ` ${scorePlayer}`;
        document.getElementById("scoreComp").textContent = ` ${scoreComp}`;

    } else if (result === 1 ) {
        document.getElementById("scorePlayer").textContent = ` ${++scorePlayer}`;
        document.getElementById("scoreComp").textContent = ` ${scoreComp}`;
        

    } else if (result === 2) {
        document.getElementById("scorePlayer").textContent = ` ${scorePlayer}`;
        document.getElementById("scoreComp").textContent = ` ${++scoreComp}`;
    }

    if (scorePlayer === 5) {
        document.getElementById("endResult").textContent = `You won the round with five wins and the computer scored ${scoreComp}.`;
        scorePlayer = 0;
        scoreComp = 0;

    } else if (scoreComp === 5) {
        document.getElementById("endResult").textContent = `You loose with a score of ${scorePlayer}.`;
        scorePlayer = 0;
        scoreComp = 0;
    }
}