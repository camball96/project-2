function formCheck(e) {
    e.preventDefault();
    const username = document.querySelector('#username').value;
    const password = document.querySelector('#password').value;
    const email = document.querySelector('#email').value;
    var errorMsg = document.querySelector('#problem');

    if (!email || !username) {
        errorMsg.innerText = 'Both email and password need to be filled out'
        return
    }
    if (email.length > 50 || username.length > 50) {
        errorMsg.innerText = 'username and email should be below 50 characters'
        return
    }
    if (password.length < 5) {
        errorMsg.innerText = 'password must be at least 6 characters'
        return
    }

    register(username, password, email)
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

// listeners.

window.onload = function () {
    document.querySelector('#join').addEventListener('click', formCheck);
}
