// Tic Tac Toe done in node
const rocks = "rocks";
const paper = "papers";
const scissors = "scissors";

const weapons = [rocks, paper, scissors];

const randomNumber = Math.floor(Math.random() * 3);

computersChoice = weapons[randomNumber];

console.log(computersChoice);
