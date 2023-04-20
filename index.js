const player_x = "PLAYER_X";
const player_O = "PLAYER_O";
const tie = "TIE";
const wining_combinations = [
  ["btn-0", "btn-1", "btn-2"],
  ["btn-3", "btn-4", "btn-5"],
  ["btn-6", "btn-7", "btn-8"],
  ["btn-0", "btn-3", "btn-6"],
  ["btn-1", "btn-4", "btn-7"],
  ["btn-2", "btn-5", "btn-8"],
  ["btn-0", "btn-4", "btn-8"],
  ["btn-2", "btn-4", "btn-6"],
];

let playerSymbol = "X";
let currentPlayer = player_x;

let allButtons = document.getElementsByClassName("input-box");
const elements = document.getElementsByTagName("button");
const winnerText = document.getElementById("win-text");

const handleClick = (id) => {
  let button = document.getElementById(id);
  button.innerHTML = playerSymbol;
  button.disabled = true;
  playerSymbol = playerSymbol == "X" ? "O" : "O" ? "X" : "";
  currentPlayer =
    currentPlayer == player_x
      ? player_O
      : currentPlayer == player_O
      ? player_x
      : "";
  document.getElementById("turn-text").innerHTML = ` ${currentPlayer}'s turn`;
  checkWinner();
};
const restartGame = () => {
  Array.from(elements).forEach(function (elements) {
    elements.innerHTML = "";
    elements.disabled = false;
    currentPlayer = player_x;
    document.getElementById("turn-text").innerHTML = ` ${currentPlayer}'s turn`;
    playerSymbol = "X";
    document.getElementById("win-text").innerHTML = "";
  });
};
const checkWinner = () => {
  for (let i = 0; i <= wining_combinations.length; i++) {
    let first = document?.getElementById(wining_combinations[i][0])?.innerHTML;
    let second = document?.getElementById(wining_combinations[i][1])?.innerHTML;
    let third = document?.getElementById(wining_combinations[i][2])?.innerHTML;
    if (first && second && third) {
      if (first == second && second == third) {
        if (first === "X") {
          afterWin(first);
        }
        // else {
        //   drawMatch();
        // }
      }
    }
  }
};

const afterWin = (first) => {
  Array.from(elements).forEach(function (elements) {
    elements.disabled = true;
  });
  document.getElementById("win-text").innerHTML = `PLAYER_${first} WINS`;
};

const drawMatch = () => {
  Array.from(elements).forEach(function (elements) {
    elements.disabled = true;
  });
  document.getElementById("win-text").innerHTML = `DRAW MATCH`;
};
