// front-end code to listen to submit review/comment under each game

const reviewForm = async (event) => {
  event.preventDefault();

  // collect the input data from the page
  const newReview = document.querySelector("#review-comment").value
  var rating = document.querySelector('.gameRate').id
  var game = document.querySelector('.gameProfileSection').id
  var errorMsg = document.querySelector("#problem")

  // Do not call the DB if they have an incomplete request
  if (rating === 'default') {
    errorMsg.innerText = "Score is required"
    console.log('hit')
    return
  }

  // post data to database
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
  console.log(createReview)
  createReview.ok
    ? window.location.reload()
    : errorMsg.innerText = "create failed"

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

  document.querySelector(".review-form").addEventListener("submit", reviewForm);

}