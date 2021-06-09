
// Functions in this file are for sending a request to update user profile details

// below function constructs the request depending on what the user wants to update

function constructRequest() {

    const usernameVal = document.querySelector('#username').value;
    const emailVal = document.querySelector('#email').value;
    const passwordVal = document.querySelector('#password').value;

    var body = {}

    if (this.id === 'updatePass') {
        // body.password?
        body = { password: passwordVal }
        updateProfile(body)
        return

    }

    this.id === 'updateUser'
        ? body = { user_name: usernameVal }
        : body = { user_email: emailVal }

    updateProfile(body)

}


// this function goes to /api/user/update to modify user account details

async function updateProfile(body) {

    const accountUpdate = await fetch('/api/user/update', {
        method: 'put',
        credentials: 'same-origin',
        body: JSON.stringify(body),
        headers: { 'Content-Type': 'application/json' }
    })

    // converts the response to useable data then sends them to home if log in success other wise it displays an error.
    // console.log(accountUpdate)
    accountUpdate.text()

        .then((response) => {

            var readable = JSON.parse(response)
            var errorMsg = document.querySelector("#messagesDiv");

            response == 1
                ? errorMsg.innerText = 'Updated!'
                : errorLookup(readable) //If it fails goes to error Lookup to get error message
        })
}


// will decide which error to display. 

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

// Function for users to delete their profile
async function deleteProfile(event) {
    console.log("Delete button was clicked.");    
    event.preventDefault();

    const response = await fetch(`/api/user/delete`, {
        method: 'DELETE',
        credentials: 'same-origin',
        headers: { 'Content-Type': 'application/json' }
    });


    if (response.ok) {
        window.alert("Profile deleted.");
        document.location.replace('/dashboard');
    } else {
        alert(response.statusText);
    };
}

// Listeners.

document.querySelector('#updateUser').addEventListener('click', constructRequest);
document.querySelector('#updateEmail').addEventListener('click', constructRequest);
document.querySelector('#updatePass').addEventListener('click', constructRequest);
document.querySelector('#deleteProfileBtn').addEventListener('click', deleteProfile);


