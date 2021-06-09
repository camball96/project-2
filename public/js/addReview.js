// front-end code to listen to submit review/comment under each game

const newFormHandler = async (event) => {
  event.preventDefault();

  // need an input to collect the review_score on the page.
  const newReview = document.querySelector("#review-comment")
  const submitReview = document.querySelector(".submitReviewBtn");

  if (newReview) {
    const response = await fetch("/api/review", {
      method: "POST",
      // Note: might need to trim extra whitespace at the front of the review
      body: JSON.stringify({ newReview }),
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
  .querySelector(".review-form")
  .addEventListener("submit", newFormHandler);