// Searching for game by name.

function searchGame() {
	criteria = document.querySelector("#searchBar").value;
	window.location.replace(`${window.location.origin}/search/${criteria}`);
}

function searchAllGames() {
	window.location.replace(`${window.location.origin}/all/games`);
}

document
	.querySelector(".searchGameButton")
	.addEventListener("click", searchAllGames);
document.querySelector(".searchButton").addEventListener("click", searchGame);
