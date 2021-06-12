// Adds a new game and a review for it
// Validate the inputs
function validateForm(e) {
	e.preventDefault();

	// get the data from the page and use it in the fetch 
	const gameDesc = document.querySelector("#gameDesc").value.trim()
	const gameName = document.querySelector("#gameName").value.trim()
	const reviewText = document.querySelector("#reviewComment").value.trim()
	const reviewScore = document.querySelector('.gameRate').id
	const errorMsg = document.querySelector("#problem")

	// Do not call the DB if they have an incomplete request
	if (reviewScore === 'default') {
		errorMsg.innerText = "Score is required"
		return
	}

	if (!gameDesc || !gameName || !reviewText) {
		errorMsg.innerText = "Name, description, and review are required"
		return
	}

	// Put together the request body:
	body = {}
	body.game_desc = gameDesc;
	body.game_name = gameName;
	body.review_txt = reviewText;
	body.review_score = reviewScore;

	// Finally, Call fetch function
	addGameForm(body)
}

// Call Game API to Add game & review 
const addGameForm = async (body) => {
	const newGame = await fetch("/api/game/new", {
		method: "POST",
		body: JSON.stringify(body),
		headers: {
			"Content-Type": "application/json",
		}
	});

	// redirect to new game if successful
	// handle the error if not successful
	newGame.redirected
		? document.location.assign(newGame.url)
		: newGame.text()
			.then(data => JSON.parse(data))
			.then((msg => errorLookup(msg)))
}


// Below decides which error to display. 
// The idea is to expand this later to include other errors we find 
// without needing to mess with the main code.
const errorLookup = (errors) => {
	console.log(errors)
	var failType = errors.errors[0].validatorKey;
	var failValue = errors.errors[0].value;

	var returnedMessage = failType == 'not_unique'
		? `${failValue} already exists`
		: `unknown error occurred - please report timestamp to admin`

	document.querySelector("#problem").innerText = returnedMessage
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

	document.querySelector(".addNewGameBtn").addEventListener("click", validateForm)
}