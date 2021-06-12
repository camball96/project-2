// Password update fetch function
async function updatePassword() {
    const passwordVal = document.querySelector('#passW').value;

    // Save wasteful db call if PW too short
    if (passwordVal.length < 6) {
        document.querySelector("#problem")
            .innerText = "password needs to be 6 characters minimum"
        return
    }

    // Otherwise call the API to update it
    const updatePW = await fetch('/api/user/update/pw', {
        method: 'put',
        credentials: 'same-origin',
        body: JSON.stringify({
            password: passwordVal
        }),
        headers: { 'Content-Type': 'application/json' }
    })

    // Display success message or deal with error
    updatePW.status === 200
        ? document.querySelector("#problem").innerText = 'password updated!'
        : document.querySelector("#problem").innerText = (updatePW.statusText);
}


// Email or Username update function
// the request body changes depending on what they are updating
async function updateProfile() {
    const usernameVal = document.querySelector('#userN').value;
    const emailVal = document.querySelector('#userEmail').value;

    var body = {}
    this.id === 'username'
        ? body.user_name = usernameVal
        : body.user_email = emailVal

    const accountUpdate = await fetch('/api/user/update', {
        method: 'put',
        credentials: 'same-origin',
        body: JSON.stringify(body),
        headers: { 'Content-Type': 'application/json' }
    })

    // return success message or deal with error
    accountUpdate.status === 200
        ? document.querySelector("#problem").innerText = `${this.id} updated!`
        : accountUpdate.text().then(data =>
            JSON.parse(data)).then(msg => errorLookup(msg))
}


// Function for users to delete their profile
// If there was time would like to add a modal to ask their password first 
async function deleteProfile(e) {
    e.preventDefault();

    const response = await fetch(`/api/user/delete`, {
        method: 'DELETE',
        credentials: 'same-origin',
        headers: { 'Content-Type': 'application/json' }
    });

    response.redirected
        ? document.location.replace('/')
        : document.querySelector("#problem").innerText = (response.statusText);
}

// will decide which error to display. 
// The idea is to expand this later to include other errors we find 
// without needing to mess with the main code.
const errorLookup = (msg) => {
    console.log(msg)
    var failType = msg.errors[0].validatorKey;
    var failValue = msg.errors[0].value;

    var display = failType == 'isEmail'
        ? `${failValue} is not a valid email`
        : `${failValue} is already taken`

    document.querySelector("#problem").innerText = display
}

// Listeners.
window.onload = function () {
    document.querySelector('#username').addEventListener('click', updateProfile);
    document.querySelector('#email').addEventListener('click', updateProfile);
    document.querySelector('#password').addEventListener('click', updatePassword);
    document.querySelector('#deleteProfileBtn').addEventListener('click', deleteProfile);
}


