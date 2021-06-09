// front-end code to listen to submit review/comment under each game

const newFormHandler = async (event) => {
    event.preventDefault();

    // need an input to collect the review_score on the page.
    const picture = document.querySelector("#review-comment")
    const gameDesc = document.querySelector("#review-comment")
    const gameName = document.querySelector("#review-comment")
    const reviewText = document.querySelector("#review-comment")
    const reviewScore = document.querySelector(".submitReviewBtn");

    body = {}

    // if we use a form, can we use 'this'???
    body.picture = picture;
    body.game_desc = gameDesc;
    body.game_name = gameName;
    body.review_txt = reviewText;
    body.review_score = reviewScore


    if (newReview) {
        const response = await fetch("/api/game/new", {
            method: "POST",
            // Note: might need to trim extra whitespace at the front of the review
            body: JSON.stringify(body),
            headers: {
                "Content-Type": "application/json",
            }
        });

        if (response.ok) {
            document.location.add("/review");
        } else {
            alert("Failed to add review!");
        }
    }
};

document
    .querySelector("#buttonID")
    .addEventListener("submit", newFormHandler);