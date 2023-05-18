function openPlayerConfig (event) {
    const selectecPlayerId = +event.target.dataset.playerid;
    editedPlayer = selectecPlayerId;

    playerConfigOverlayElement.style.display = "block";
    backdropElement.style.display = "block";
}
function cancelPlayerConfig () {
    playerConfigOverlayElement.style.display = "none";
    backdropElement.style.display = "none";
    formElement.firstElementChild.classList.remove("error")
    errorsElementOutput.textContent = "";
    formElement.firstElementChild.lastChild.textContent = "";
}
function savePlayerConfig(event){
event.preventDefault();
const formData = new FormData(event.target) ;

const enteredPlayerName = formData.get("playername").trim(); 
if (!enteredPlayerName) {
event.target.firstElementChild.classList.add("error");
errorsElementOutput.textContent = "Va rugam sa introduceti un nume acceptat";
return;


}

const updatedPlayerDataElement = document.getElementById("player-" + editedPlayer + "-data")
updatedPlayerDataElement.children[1].textContent = enteredPlayerName;

players[editedPlayer - 1].name = enteredPlayerName;

cancelPlayerConfig();

}