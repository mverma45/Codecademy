let humanScore = 0;
let computerScore = 0;
let currentRoundNumber = 1;

// Write your code below:

function generateTarget() {
  return Math.floor(Math.random() * 10);
}
function compareGuesses(humanGuessInput, computerGuessDisplay, targetNumberDisplay) {
  const humanGuess = Math.abs(targetNumberDisplay - humanGuess);
  const computerGuess = Math.abs(targetNumberDisplay - computerGuess);

  return humanGuess <= computerGuessDisplay; 

  const updateScore = winner => {
    if (winner === "human") {
      humanScoreDisplay++;
    } else if (winner === "computer"){
      computerScoreDisplay++;
    }

    const advanceRound = () =>
      nextRoundButton++;   
        
  }
}