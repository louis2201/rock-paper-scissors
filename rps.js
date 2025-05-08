console.log("Hello World!");

function getComputerChoice() {
    const randomNumber = Math.floor(Math.random() * 3);
    if(randomNumber === 0) {
        return "Rock";
    } else if(randomNumber === 1) {
        return "Paper";
    } else {
        return "Scissors";
    }
}
console.log(getComputerChoice());

function getHumanChoice() {
    const userChoice = prompt("Enter your choice: Rock, Paper, or Scissors");
    return userChoice;
}
console.log(getHumanChoice());