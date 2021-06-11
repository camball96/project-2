// Run a fetch to add a new review to a game.

const reviewForm = async (event) => {
	event.preventDefault();

	const newReview = document.querySelector("#reviewComment").value;
	var rating = document.querySelector(".gameRate").id;
	var game = document.querySelector(".gameProfileSection").id;
	var errorMsg = document.querySelector("#problem");

	if (rating === "default") {
		errorMsg.innerText = "Score is required";
		return;
	}

	const createReview = await fetch("/api/review/add", {
		method: "POST",
		body: JSON.stringify({
			review_txt: newReview,
			review_score: rating,
			game_id: game,
		}),
		headers: {
			"Content-Type": "application/json",
		},
	});
	if (createReview.redirected) {
		document.location.replace(createReview.url);
		return;
	}
	createReview.ok
		? window.location.reload()
		: (errorMsg.innerText = "create failed - try later");
};

window.onload = function () {
	var stars = document.querySelectorAll(".star");
	var rating = document.querySelector(".gameRate");
	stars.forEach((item) => {
		item.addEventListener("click", () => {
			rating.id = item.value;
		});
	});
	document
		.querySelector(".submitReviewBtn")
		.addEventListener("click", reviewForm);
};
