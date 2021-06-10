
// when submit button clicked it will verify the form is complete and then run the fetch

function validateForm(e) {

    e.preventDefault();

    // get the data from the page and use it in the fetch 
    const gameDesc = document.querySelector("#gameDesc").value
    const gameName = document.querySelector("#gameName").value
    const reviewText = document.querySelector("#reviewComment").value
    const reviewScore = document.querySelector('.gameRate').id

    // Do not call the DB if they have an incomplete request

    if (reviewScore === 'default') {
        document.querySelector("#problem").innerText = "Score is required"
        return
    }

    // Put together the request body:

    body = {}

    body.game_desc = gameDesc;
    body.game_name = gameName;
    body.review_txt = reviewText;
    body.review_score = reviewScore;

    // Call fetch function

    addGameForm(body)

}


// Fetch function: Adds a new game & review

const addGameForm = async () => {

    const newGame = await fetch("/api/game/new", {
        method: "POST",
        body: JSON.stringify(body),
        headers: {
            "Content-Type": "application/json",
        }
    });

    // redirect them to their new game if successful
    // handle the error if not successful

    newGame.redirected
        ? document.location.replace(newGame.url)
        : newGame.text()
            .then((readable) => { return JSON.parse(readable) })
            .then((msg) => { errorLookup(msg) })
}


// the idea behind this is that this function can be modified to cater for new errors that we see. 

const errorLookup = (errors) => {
    console.log(errors)
    var displayErrorTo = document.querySelector("#problem");
    var failType = errors.errors[0].validatorKey;
    var failValue = errors.errors[0].value;

    var returnedMessage = failType == 'not_unique'
        ? `${failValue} already exists`
        : `unknown error occurred - please report timestamp to admin`

    displayErrorTo.innerText = returnedMessage

}


// listeners for submit button and for each star button

window.onload = function () {
    var stars = document.querySelectorAll('.star')
    var rating = document.querySelector('.gameRate')

    stars.forEach(item => {

        item.addEventListener('click', () => {
            rating.id = item.value
        })
    });

    document.querySelector(".addNewGameBtn").addEventListener("click", validateForm);

}