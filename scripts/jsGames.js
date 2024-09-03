const gameButtons = document.getElementById("gameSelectMenu").getElementsByClassName("gameSelectButton");
const games = Array.from(gameButtons);
console.log(games);
let userChoice;
const scriptsPath = "https://onebacaterpie.github.io/scripts/";

function loadGame(userChoice) {
  var script = document.createElement("script");
  script.src = new URL(userChoice.concat(".js"), scriptsPath);
  document.head.appendChild(script);
}

games.forEach(games => games.addEventListener("click", (e) => {
  userChoice = e.target.id;
  loadGame(userChoice);
}));
