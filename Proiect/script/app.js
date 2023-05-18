const gameData = [

[0, 0, 0],
[0, 0, 0],
[0, 0, 0],

]

let editedPlayer = 0;
let activePlayer = 0;
let currentRound = 1;

const players = [
    {

name: "",
Symbol: "X"

    },
    {
        name: "",
        Symbol: "0"
    },
];

const playerConfigOverlayElement = document.getElementById("config-overlay");
const backdropElement = document.getElementById("backdrop");
const formElement = document.querySelector("form");
const errorsElementOutput = document.getElementById("config-errors");
const startNewGameElementBtn = document.getElementById("start-new-game-btn")
const gameAreaElement = document.getElementById("active-game")
const activePlayerNameId = document.getElementById("active-player-name")
const editPlayer1BtnElement = document.getElementById("edit-name-player-1-btn");
const editPlayer2BtnElement = document.getElementById("edit-name-player-2-btn");
const gameOverElement = document.getElementById("game-over");
const cancelButtonElement = document.getElementById("cancel-button")
// const gameFieldElements = document.querySelectorAll("#game-board li");
const playerNameElement = document.getElementById("playername")
editPlayer1BtnElement.addEventListener("click", openPlayerConfig);
editPlayer2BtnElement.addEventListener("click", openPlayerConfig);
cancelButtonElement.addEventListener("click", cancelPlayerConfig);
backdropElement.addEventListener("click", cancelPlayerConfig);
startNewGameElementBtn.addEventListener("click", startNewGame,);



formElement.addEventListener("submit", savePlayerConfig);

// for (const gameFieldElement of gameFieldElements){
//     gameFieldElement.addEventListener ("click", selectGameField)
// }

const gameBoardElement = document.getElementById("game-board")

gameBoardElement.addEventListener("click" ,selectGameField)

