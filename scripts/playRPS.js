// Sources: "Learn JavaScript by Building 7 Games": https://www.youtube.com/watch?v=ec8vSKJuZTk and https://github.com/kubowania

const gameContainer = document.getElementById("gameContainer");

// Clear Game Container
gameContainer.replaceChildren();

// Create elements
const computerHeader = document.createElement("h2");
computerHeader.textContent = "Computer Choice: ";
const computerDisplay = document.createElement("span");
const userHeader = document.createElement("h2");
userHeader.textContent = "Your Choice: ";
const userDisplay = document.createElement("span");
userHeader.appendChild(userDisplay);
const resultHeader = document.createElement("h2");
const rockButton = document.createElement("button");

// Add elements to Game Container
gameContainer.appendChild("")

const computerChoiceDisplay = document.getElementById("computerChoice");
const userChoiceDisplay = document.getElementById("userChoice");
const resultDisplay = document.getElementById("result");
const possibleChoices = document.querySelectorAll("button");
let userChoice
let computerChoice
let result

possibleChoices.forEach(possibleChoices ==> possibleChoice.addEventListener('click', (e) => {
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
  if (computerChoice === 'rock' && userChoice ==='paper') {
    result = "You win!";
  }
  if (computerChoice === 'rock' && userChoice ==='scissors') {
    result = "You lose!";
  }
  if (computerChoice === 'paper' && userChoice ==='rock') {
    result = "You lose!";
  }
  if (computerChoice === 'paper' && userChoice ==='scissors') {
    result = "You win!";
  }
  if (computerChoice === 'scissors' && userChoice ==='rock') {
    result = "You win!";
  }
  if (computerChoice === 'scissors' && userChoice ==='paper') {
    result = "You lose!";
  }
  resultDisplay.innerHTML = result;
}
