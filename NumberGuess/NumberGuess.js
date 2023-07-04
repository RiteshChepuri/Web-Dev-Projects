const prompt = require("prompt-sync")();

const target = Math.round(Math.random()*100);

let guesses = 0;

while(true){
  guesses++;

  const guess = Number(prompt(
    "Guess the Number in range of 0 to 100 : "
  ))

  if(guess>target){
    console.log("Your Guess is too high");
    continue;
  } else if(guess<target){
    console.log("Your Guess is too low");
    continue;
  }

  console.log("you guessed it right!");
  break;
}

console.log("You Guessed the number in", guesses, "tries");
