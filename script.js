let choices = ['rock', 'paper', 'scissor'];


// A compact form of the getComputerChoice function

// function getComputerChoice(choices){
//     return choices[Math.floor(choices.length * Math.random())];
// }

function getComputerChoice(){
    let rand = Math.random();
    rand *= choices.length;
    rand = Math.floor(rand);
    let compChoice = choices[rand];

    return compChoice;
}

// console.log(getComputerChoice());

//Rock beats scissors
//Rock ties with rock
//Rock is beaten by paper

// evaluates the result of the round
function playRound(playerSelection, computerSelection){
    let result;
    let message;

    if (playerSelection == "rock" || playerSelection == "paper" || playerSelection == "scissor"){
        if (playerSelection == computerSelection){
            result = "ties";
        } else if (playerSelection == "rock" && computerSelection == "paper"){
            result = "lose";
        } else if (playerSelection == "paper" && computerSelection == "scissor"){
            result = "lose";
        } else if (playerSelection == "scissor" && computerSelection == "rock"){
            result = "lose";
        } else {
            result = "win";
        }
    } else {
        result = "error";
    }
    
    if (result == "ties"){
        message = `Equal! \n${playerSelection} ties with ${computerSelection}`;
    } else if (result == "error"){
        message = `Error! \n${playerSelection} isn't a valid choice`;
    } else if (result == "lose"){
        message = `You lost the round! \n${playerSelection} is beaten by ${computerSelection}`;
    } else {
        message = `You won the round! \n${playerSelection} beats ${computerSelection}`;
    }

    return message;
}

const playerSelection = prompt("Write down your choice 'rock,paper or scissor'").toLowerCase();
const computerSelection = getComputerChoice();
console.log(playRound(playerSelection, computerSelection));
