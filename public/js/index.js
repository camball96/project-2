// search for a game by name

function searchGame() {

    criteria = document.querySelector("#searchBar").value

    window.location.replace(`${window.location.origin}/search/${criteria}`)

}

// Listener.

document.querySelector('.searchButton').addEventListener('click', searchGame);
