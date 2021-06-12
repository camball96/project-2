// Searching for game by name.
function searchGame(e) {
	criteria = document.querySelector("#searchBar").value
	criteria
		? window.location.assign(`${window.location.origin}/search/game/${criteria}`)
		: window.location.assign(`${window.location.origin}/search/game/nocriteriaspecified`)
}

// When clicking all games button
function searchAllGames() {
	window.location.assign(`${window.location.origin}/search/games/all`)
}

// Listeners
document.querySelector('.searchButton').addEventListener('click', searchGame);
document.querySelector('.searchGameButton').addEventListener('click', searchAllGames)
document.querySelector('#searchBar').addEventListener('keypress', function (e) {
	if (e.key === 'Enter') { searchGame() }
})