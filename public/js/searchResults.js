// This will send them to the new game form if they click the button

function newGameAdd() {

    window.location.replace(`${window.location.origin}/review/newgame`)

}
// Listeners.

document.querySelector('#buttonID').addEventListener('click', newGameAdd);