// Sources: "Learn JavaScript by Building 7 Games": https://www.youtube.com/watch?v=ec8vSKJuZTk and https://github.com/kubowania

// Clear Game Container
gameContainer.replaceChildren();

// Create an empty array for RPS elements
const rpsElements = [];

// Create elements for Computer Choice and push to rpsElements array
const computerHeader = document.createElement("h2");
computerHeader.textContent = "Computer Choice: ";
const computerDisplay = document.createElement("span");
computerDisplay.setAttribute("id", "computerChoice");
rpsElements.push(computerHeader, computerDisplay);

// Create elements for User Choice and push to rpsElements array
const userHeader = document.createElement("h2");
userHeader.textContent = "Your Choice: ";
const userDisplay = document.createElement("span");
userDisplay.setAttribute("id", "userChoice");
rpsElements.push(userHeader, userDisplay)

// Create elements for Result and push to rpsElements array
const resultHeader = document.createElement("h2");
resultHeader.textContent = "Result: ";
const displayResult = document.createElement("span");
displayResult.setAttribute("id", "result");
rpsElements.push(resultHeader, displayResult);

// Rock button
const rockButton = document.createElement("button");
rockButton.setAttribute("value", "Rock");
rockButton.setAttribute("id", "rock");

// Paper button
const paperButton = document.createElement("button");
paperButton.setAttribute("value", "Paper");
paperButton.setAttribute("id", "paper");

// Scissors button
const scissorsButton = document.createElement("button");
scissorsButton.setAttribute("value", "Scissors");
scissorsButton.setAttribute("id", "scissors");

// Push buttons to rpsElements array
rpsElements.push(rockButton, paperButton, scissorsButton);

// Add elements to Game Container
for (let i = 0; i < rpsElements.length(); i++) {
  gameContainer.appendChild(rpsElements[i]);
}

const computerChoiceDisplay = document.getElementById("computerChoice");
const userChoiceDisplay = document.getElementById("userChoice");
const resultDisplay = document.getElementById("result");
const possibleChoices = [];
possibleChoices.push(rockButton, paperButton, scissorsButton);
let userChoice
let computerChoice
let result

possibleChoices.forEach(possibleChoices => possibleChoice.addEventListener("click", (e) => {
  userChoice = e.target.id
  userChoiceDisplay.innerHTML = userChoice
  generateComputerChoice()
  getResult()
}))

function generateComputerChoice() {
  const randomNumber = Math.floor(Math.random() * possibleChoices.length) + 1
  console.log(randomNumber)
  if (randomNumber === 1) {
    computerChoice = "rock";
  }
  if (randomNumber === 2) {
    computerChoice = "paper";
  }
  if (randomNumber === 3) {
    computerChoice = "scissors";
  }
  computerChoiceDisplay.innerHTML = computerChoice
}

function getResult() {
  if (computerChoice === userChoice) {
    result = "It's a draw!";
  }
  if (computerChoice === "rock" && userChoice === "paper") {
    result = "You win!";
  }
  if (computerChoice === "rock" && userChoice === "scissors") {
    result = "You lose!";
  }
  if (computerChoice === "paper" && userChoice === "rock") {
    result = "You lose!";
  }
  if (computerChoice === "paper" && userChoice === "scissors") {
    result = "You win!";
  }
  if (computerChoice === "scissors" && userChoice === "rock") {
    result = "You win!";
  }
  if (computerChoice === "scissors" && userChoice === "paper") {
    result = "You lose!";
  }
  resultDisplay.innerHTML = result;
}
