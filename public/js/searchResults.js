// This will send them to the new game form if they click the button

function newGameAdd() {
	window.location.assign(`${window.location.origin}/create/newgame`)
}

// Listeners.
window.onload = function () {
	document.querySelector('#buttonID').addEventListener('click', newGameAdd)
}