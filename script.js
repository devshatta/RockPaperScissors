let choices = ['rock', 'paper', 'scissor'];

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

console.log(getComputerChoice());