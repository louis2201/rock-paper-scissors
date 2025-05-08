console.log("Let's Play Rock, Paper, Scissors!");

function playGame() {
    let humanScore = 0;
    let computerScore = 0;
    
    function getComputerChoice() {
        const randomNumber = Math.floor(Math.random() * 3); 
        if (randomNumber === 0) {
            return "rock";
        } else if (randomNumber === 1) {
            return "paper";
        } else {
            return "scissors";
        }
    }
    function getHumanChoice() {
        const userChoice = prompt("Enter your choice: rock, paper, or scissors").toLowerCase();
        return userChoice; 
    }
    function playRound(humanChoice, computerChoice) {
        humanChoice = humanChoice.toLowerCase(); 

        if (humanChoice === computerChoice) {
            console.log(`It's a tie! Both chose ${humanChoice.charAt(0).toUpperCase() + humanChoice.slice(1)}.`);
        } else if (
            (humanChoice === "rock" && computerChoice === "scissors") ||
            (humanChoice === "paper" && computerChoice === "rock") ||
            (humanChoice === "scissors" && computerChoice === "paper")
        ) {
            console.log(`You win! ${humanChoice.charAt(0).toUpperCase() + humanChoice.slice(1)} beats ${computerChoice}.`);
            humanScore++;
        } else {
            console.log(`You lose! ${computerChoice.charAt(0).toUpperCase() + computerChoice.slice(1)} beats ${humanChoice}.`);
            computerScore++;
        }
        console.log(`Scores: Human - ${humanScore}, Computer - ${computerScore}`);
    }
    console.log("Welcome to Rock, Paper, Scissors! Best of 5 rounds wins!");
    
    for (let round = 1; round <= 5; round++) {
        console.log(`Round ${round}:`);
        const humanChoice = getHumanChoice();
        const computerChoice = getComputerChoice();
        playRound(humanChoice, computerChoice);
    }
    if (humanScore > computerScore) {
        console.log("Congratulations! You are the overall winner!");
    } else if (humanScore < computerScore) {
        console.log("Sorry, you lost. The computer is the overall winner.");
    } else {
        console.log("It's a tie! No overall winner.");
    }
}
playGame();