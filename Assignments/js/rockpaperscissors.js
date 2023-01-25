const getUserChoice = (userInput) => {
    userInput = userInput.toLowerCase();
  
    if (
      userInput === "rock" ||
      userInput === "paper" ||
      userInput === "scissors"
    ) {
      return userInput;
    } else {
      console.log("Error, Please type rock, paper or scissors");
    }
  };
  
  const getComputerChoice = () => {
    const randomNum = Math.floor(Math.random() * 3);
  
    if (randomNum === 0) {
      return "rock";
    } else if (randomNum === 1) {
      return "paper";
    } else {
      return "scissors";
    }
  };
  
  const determineWinner = (userChoice, computerChoice) => {
    if (userChoice === computerChoice) {
      return "The game was a tie.";
    }
    if (userChoice === "rock") {
      if (computerChoice === "paper") {
        return "Sorry, the computer wins.";
      } else {
        return "Congratulations, you won.";
      }
    }
  
    if (userChoice === "paper") {
      if (computerChoice === "scissors") {
        return "Sorry, the computer wins.";
      } else {
        return "Congratulations, you won.";
      }
    }
  
    if (userChoice === "scissors") {
      if (computerChoice === "rock") {
        return "Sorry, the computer wins.";
      } else {
        return "Congratulations, you won.";
      }
    }
  
    const playGame = () => {
      const userChoice = getUserChoice("paper");
      const computerChoice = getComputerChoice();
      console.log(`You threw ${userChoice}`);
      console.log(`The computer threw ${computerChoice}`);
    
    console.log(determineWinner(userChoice, computerChoice));
    };
  };
  