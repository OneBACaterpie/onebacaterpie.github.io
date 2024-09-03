const gameButtons = document.getElementById("gameSelectMenu").getElementsByClassName("gameSelectButton");
const games = Array.from(gameButtons);
let selectedGame;
const scriptsPath = "https://onebacaterpie.github.io/scripts/";

function loadGame(userChoice) {
  var script = document.createElement("script");
  script.src = new URL(selectedGame.concat(".js"), scriptsPath);
  document.head.appendChild(script);
}

games.forEach(games => games.addEventListener("click", (e) => {
  selectedGame = e.target.id;
  loadGame(selectedGame);
}));
