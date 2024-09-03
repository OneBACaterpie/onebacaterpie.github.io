const gameButtons = document.getElementById("gameSelectMenu").getElementsByClassName("gameSelectButton");
console.log(gameButtons);
let userChoice;
const scriptsPath = "https://https://onebacaterpie.github.io/scripts/";

function loadGame(userChoice) {
  var script = document.createElement("script");
  script.src = URL(userChoice.concat(".js"), scriptsPath);
  document.head.appendChild(script);
}

gameButtons.forEach(gameButtons => gameButtons.addEventListener("click", (e) => {
  userChoice = e.target.id;
  loadGame(userChoice);
}));
