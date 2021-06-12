// Call the review API to add a new review. 
const reviewForm = async (event) => {
	event.preventDefault();

	// collect the input data from the page
	const newReview = document.querySelector("#reviewComment").value
	const rating = document.querySelector('.gameRate').id
	const game = document.querySelector('.gameProfileSection').id
	const errorMsg = document.querySelector("#problem")

	// Do not call the DB if they have not chosen a score
	if (rating === 'default') {
		errorMsg.innerText = "Score is required"
		return
	}

	// Call review API 
	const createReview = await fetch("/api/review/add", {
		method: "POST",
		body: JSON.stringify({
			review_txt: newReview,
			review_score: rating,
			game_id: game
		}),
		headers: {
			"Content-Type": "application/json",
		}
	})

	createReview.ok
		? window.location.reload()
		: errorMsg.innerText = "create failed - try later"
}


// listeners for each star button and for add button
window.onload = () => {
	var stars = document.querySelectorAll('.star')
	var rating = document.querySelector('.gameRate')
	stars.forEach(item => {
		item.addEventListener('click', () => {
			rating.id = item.value
		})
	});

	document.querySelector(".submitReviewBtn").addEventListener("click", reviewForm);
}