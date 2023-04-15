const player_x = "PLAYER_X";
const player_O = "PLAYER_O";
const tie = "TIE";
const wining_combinations = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
];

let playerSymbol = "X";
let currentPlayer = player_x;
let turnText = document.getElementById("turn-text");
let allButtons = document.getElementsByClassName("input-box");
const elements = document.getElementsByTagName("button");

const handleClick = (id) => {
  let button = document.getElementById(id);
  button.innerHTML = playerSymbol;
  button.disabled = true;
  playerSymbol = playerSymbol == "X" ? "O" : "O" ? "X" : "";
  console.log(currentPlayer, "before");
  currentPlayer =
    currentPlayer == player_x
      ? player_O
      : currentPlayer == player_O
      ? player_x
      : "";
  document.getElementById("turn-text").innerHTML = ` ${currentPlayer}'s turn`;
};
const restartGame = () => {
  Array.from(elements).forEach(function (elements) {
    elements.innerHTML = "";
    elements.disabled = false;
    currentPlayer = player_x;
    document.getElementById("turn-text").innerHTML = ` ${currentPlayer}'s turn`;
    playerSymbol = "X";
  });
};
