let choices = ['rock', 'paper', 'scissor'];

let playerScore = 0;
let compScore = 0;


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

let playerSelection;
let computerSelection;
// let playerSelection = prompt("Write down your choice 'rock,paper or scissor'").toLowerCase();
// let computerSelection = getComputerChoice();

// console.log(getComputerChoice());

//Rock beats scissors
//Rock ties with rock
//Rock is beaten by paper

// evaluates the result of the round
function playRound(playerSelection, computerSelection){
    let result;
    let message;

    playerSelection = prompt("Write down your choice 'rock,paper or scissor'").toLowerCase();
    computerSelection = getComputerChoice();
    
    if (playerSelection == "rock" || playerSelection == "paper" || playerSelection == "scissor"){
        if (playerSelection == computerSelection){
            result = 0;
            message = `Equal! \n${playerSelection} ties with ${computerSelection}`;
        } else if (
            (playerSelection == "rock" && computerSelection == "paper") ||
            (playerSelection == "paper" && computerSelection == "scissor") ||
            (playerSelection == "scissor" && computerSelection == "rock")){
            result = -1;
            message = `You lost the round! \n${playerSelection} is beaten by ${computerSelection}`;
            compScore++
        } else {
            result = 1;
            message = `You won the round! \n${playerSelection} beats ${computerSelection}`;
            playerScore++
        }
    } else {
        result = "error";
        message = `Error! \n${playerSelection} isn't a valid choice`;
    }
    // console.log(message);
    console.log(`${message}\nYour score : ${playerScore} \nComputer score : ${compScore}`);
    // return result;
    
}

function game(){
    while ((playerScore < 5) && (compScore <5)){
        playRound();
    } if (playerScore < compScore){
        return "YOU LOST THE GAME :(";
    } else {
        return "YOU WON THE GAME:)";
    }
    }

    // if (playerScore < compScore){
    //     return "YOU LOST THE GAME :(";
    // } else if (playerScore > compScore){
    //     return "YOU WON THE GAME:)";
    // } else {
    //     return "NO WINNERS OR LOSERS! PLAY AGAIN"
    // }

console.log(game());
// console.log(playRound(playerSelection,computerSelection));
// console.log(message);
// console.log(compScore);