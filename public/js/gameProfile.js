
function formCheck(e) {
    e.preventDefault();
    const reviewTxt = document.querySelector('#username').value;
    const reviewScore = document.querySelector('#password').value;

    var errorMsg = document.querySelector('#problem');

    if (!reviewTxt || !review_score) {
        errorMsg.innerText = 'Both review score and review text need to be filled out'
        return
    }

    var body = { game_id: this.id, review_txt: reviewTxt, review_score: reviewScore }

    // user_name: '', user_id: '',

    createReview(username, password, email)
}

async function register(username, password, email) {

    const registration = await fetch('/api/user/register', {
        method: 'post',
        credentials: 'same-origin',
        body: JSON.stringify({
            user_name: username,
            password: password,
            user_email: email
        }),
        headers: { 'Content-Type': 'application/json' }
    })

    registration.text()
        .then((response) => {
            var readable = JSON.parse(response)

            response == 1
                ? window.location.replace('/')
                : errorLookup(readable)
        })
}


const errorLookup = (errors) => {
    var errorMsg = document.querySelector('#problem');
    var failType = errors.errors[0].validatorKey;
    var failValue = errors.errors[0].value;
    console.log(failType)
    var display = failType == 'isEmail'
        ? `${failValue} is not a valid email`
        : `${failValue} is already taken`

    errorMsg.innerText = display

}


document.querySelector('#signup').addEventListener('click', formCheck);