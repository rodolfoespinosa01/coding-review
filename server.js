// Tic Tac Toe done in node
const userChoice = prompt("Enter your choice");
const rocks = "rocks";
const paper = "papers";
const scissors = "scissors";

const weapons = [rocks, paper, scissors];

const randomNumber = Math.floor(Math.random() * 3);

computersChoice = weapons[randomNumber];

console.log(computersChoice);

console.log(userChoice);

if (userChoice === computersChoice) {
  console.log("It's a tie!");
} else if (
  (userChoice === rocks && computersChoice === scissors) ||
  (userChoice === paper && computersChoice === rocks) ||
  (userChoice === scissors && computersChoice === paper)
) {
  console.log("You win!");
} else {
  console.log("Computer wins!");
}
