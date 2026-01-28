
// Ask the player to choose a fighter
let guessCount = 0;
let guess = (prompt("Guess between 1 and 10"));
guessCount++;



let randomNumber = Math.floor(Math.random() * 10) + 1;
console.log(randomNumber); // just so you can see it in the console while testing




// Step 3: Generate computer choice
while (guess !== randomNumber) {
  if (guess < randomNumber) {
    alert("Your guess is too low, guess again.");
  } else if (guess > randomNumber) {
    alert("Your guess is too high, guess again.");
  }

  guess = (prompt("Guess between 1 and 10"));
  guessCount++;


if (guess == randomNumber) {
  alert("You win! The number was " + randomNumber);
  alert("You guessed it in " + guessCount + " guesses!");
  break;
} 
}