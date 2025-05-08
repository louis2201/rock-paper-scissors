console.log("Hello World!");

function getComputerChoice(rock, paper, scissors) {
    if(Math.floor(Math.random() * rock, paper, scissors === 0)){
        return "Rock";
    } else if (Math.floor(Math.random() * rock, paper, scissors === 1)) {
        return "Paper";
    } else {
        return "Scissors";
    }
}
console.log(getComputerChoice(3));