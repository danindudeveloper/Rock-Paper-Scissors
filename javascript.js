function getComputerChoice() {
  const randomNumber = Math.random();
  if (randomNumber < 0.33) {
    return "rock";
  } else if (randomNumber < 0.66) {
    return "paper";
  } else {
    return "scissors";
  }
}

function getHumanChoice() {
  let humanChoice = prompt("Enter your choice 'scissors', 'paper', 'rock': ").toLowerCase();
  while (humanChoice !== "scissors" && humanChoice !== "paper" && humanChoice !== "rock") {
    humanChoice = prompt("Invalid choice. Please enter rock, paper, or scissors:").toLowerCase();
  }
  return humanChoice;
}

function playGame() {
  let humanScore = 0;
  let computerScore = 0;

  function playRound(humanChoice, computerChoice) {
    if (humanChoice === computerChoice) {
      console.log("It's a tie!");
    } else if (
      (humanChoice === "rock" && computerChoice === "scissors") ||
      (humanChoice === "paper" && computerChoice === "rock") ||
      (humanChoice === "scissors" && computerChoice === "paper")
    ) {
      console.log(`You win! ${humanChoice} beats ${computerChoice}`);
      humanScore++;
    } else {
      console.log(`You lose! ${computerChoice} beats ${humanChoice}`);
      computerScore++;
    }
  }

  for (let i = 0; i < 5; i++) {
    const humanSelection = getHumanChoice();
    const computerSelection = getComputerChoice();
    playRound(humanSelection, computerSelection);
    console.log(`Round ${i + 1} Score: Human - ${humanScore}, Computer - ${computerScore}`); // Display score after each round

  }
  console.log(`Final Score: Human - ${humanScore}, Computer - ${computerScore}`); // Display final score
}


playGame(); // Call the game function to start playing