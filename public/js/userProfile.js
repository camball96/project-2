// waiting on userprofile handlebars. 


function constructRequest(e) {
    e.preventDefault();
    console.log(e.target.id)
    var option = e.target.id
    // waiting for input field to name
    const usernameVal = document.querySelector('#username').value;
    const emailVal = document.querySelector('#email').value;
    const passwordVal = document.querySelector('#password').value;

    var body = {}

    if (option === 'updatePass') {

        // if (password.length < 5) {
        //     errorMsg.innerText = 'password must be at least 6 characters'
        //     return
        // }

        body = { password: passwordVal }
        updateProfile(body)
        return

    }

    // if (option.value.length > 50) {
    //     errorMsg.innerText = 'usernames and emails should be below 50 characters'
    //     return
    // }

    option === 'updateUser'
        ? body = { user_name: usernameVal }
        : body = { user_email: emailVal }

    updateProfile(body)


    // obj.key3 = "value3";
    // if (username.value) {
    //     body.user_name = username
    // }
    // if (email.value) {
    //     body.user_email = email
    // }
    // if (password.value) {
    //     body.password = password
    // }

    // if (!body) {
    //     return
    // }

}


async function updateProfile(body) {
    // goes to /api/user/update to modify user account details

    const accountUpdate = await fetch('/api/user/update', {
        method: 'put',
        credentials: 'same-origin',
        body: JSON.stringify(body),
        headers: { 'Content-Type': 'application/json' }
    })
    console.log(accountUpdate.status)
    // converts the response to useable data then sends them to home if log in success other wise it displays an error.
    // console.log(accountUpdate)
    accountUpdate.text()

        .then((response) => {
            console.log(response)

            var readable = JSON.parse(response)
            var errorMsg = document.querySelector("#messagesDiv");

            response == 1
                ? errorMsg.innerText = 'Updated!'
                : errorLookup(readable)
        })
}

const errorLookup = (errors) => {
    var errorMsg = document.querySelector("#messagesDiv");
    var failType = errors.errors[0].validatorKey;
    var failValue = errors.errors[0].value;
    console.log(failType)
    var display = failType == 'isEmail'
        ? `${failValue} is not a valid email`
        : `${failValue} is already taken`

    errorMsg.innerText = display

}



document.querySelector('#updateUser').addEventListener('click', constructRequest);