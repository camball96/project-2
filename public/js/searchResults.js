


function newGameAdd() {

    window.location.replace(`${window.location.origin}/review/newgame`)

}
// Listeners.

document.querySelector('#buttonID').addEventListener('click', newGameAdd);