const prompt = require("prompt-sync")();

let wins = 0;
let losses = 0;
let draws = 0;

while (true){
  const playerChoice = prompt("Enter Rock,Paper,Scissor(or q to quit)");
  if (playerChoice.toLowerCase() === "q"){
    break;
  }

  if (playerChoice !== "rock" &&
    playerChoice !== "scissor" &&
    playerChoice !== "paper"){
    prompt("Please enter a valid entry");
    continue;
  }


  const choices = ["rock","scissor","paper"];
  const randomIndex = Math.round(Math.random()* 2);
  const computerChoice = choices[randomIndex];

  console.log("Computer choice is ",computerChoice);

  if(computerChoice === playerChoice){
    console.log("draw");
    draws ++;
  }
  else if ((playerChoice === "paper" && computerChoice === "rock") ||
    (playerChoice === "scissor" && computerChoice === "paper") ||
    (playerChoice === "scissor" && computerChoice === "paper")){
      console.log("Player has won");
      wins ++;
    }else{
      console.log("Player has lost");
      losses ++;
    }
}


console.log("wins:",wins, "Losses:",losses,"Draws:",draws)
