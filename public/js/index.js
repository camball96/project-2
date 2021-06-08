
// search for a game by name

async function searchGame() {

    criteria = document.querySelector("#searchBar").value

    const searchResult = await fetch(`/api/game/search/${criteria}`, {
        method: 'get',
        credentials: 'same-origin',
        headers: { 'Content-Type': 'application/json' }
    })
        .then((searchResult) => {
            searchResult.redirected
                ? window.location.replace(searchResult.url)
                : console.log('no results were found')
        })
}
// Listeners.

document.querySelector('.searchButton').addEventListener('click', searchGame);