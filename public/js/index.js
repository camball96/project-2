// search for a game by name

function searchGame() {

    criteria = document.querySelector("#searchBar").value

    window.location.replace(`${window.location.origin}/search/${criteria}`)

}

function searchAllGames() {

    window.location.replace(`${window.location.origin}/all/games`)

}
// Listeners.

document.querySelector('.searchGameButton').addEventListener('click', searchAllGames);

// Listener.

document.querySelector('.searchButton').addEventListener('click', searchGame);
