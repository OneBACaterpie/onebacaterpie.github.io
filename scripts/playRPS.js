// Sources: "Learn JavaScript by Building 7 Games": https://www.youtube.com/watch?v=ec8vSKJuZTk and https://github.com/kubowania

const gameContainer = document.getElementById("gameContainer");

gameContainer.replaceChildren();

const computerChoiceDisplay = document.getElementById('computer-choice')
const userChoiceDisplay = document.getElementById('computer-choice')
const resultDisplay = document.getElementById('result')
const possibleChoices = document.querySelectorAll('button')
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
    computerChoice = 'rock'
  }
  if (randomNumber === 2) {
    computerChoice = 'paper'
  }
  if (randomNumber === 3) {
    computerChoice = 'scissors'
  }
  computerChoiceDisplay.innerHTML = computerChoice
}

function getResult() {
  if (computerChoice === userChoice) {
    result = 'It's a draw!'
  }
  if (computerChoice === 'rock' && userChoice ==='paper') {
    result = 'You win!'
  }
  if (computerChoice === 'rock' && userChoice ==='scissors') {
    result = 'You lose!'
  }
  if (computerChoice === 'paper' && userChoice ==='rock') {
    result = 'You lose!'
  }
  if (computerChoice === 'paper' && userChoice ==='scissors') {
    result = 'You win!'
  }
  if (computerChoice === 'scissors' && userChoice ==='rock') {
    result = 'You win!'
  }
  if (computerChoice === 'scissors' && userChoice ==='paper') {
    result = 'You lose!'
  }
  resultDisplay.innerHTML = result
}
