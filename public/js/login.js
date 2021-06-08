
async function login(e) {
    e.preventDefault();

    const username = document.querySelector('#username').value;
    const password = document.querySelector('#password').value;
    var errorMsg = document.querySelector('#problem')

    if (username && password) {

        // goes to /api /user / login route to check user/pass against DB
        const verification = await fetch('/api/user/login', {
            method: 'post',
            credentials: 'same-origin',
            body: JSON.stringify({
                user_name: username,
                password: password
            }),
            headers: { 'Content-Type': 'application/json' }
        })

        // converts the response to useable data then sends them to home if log in success other wise it displays an error.
        console.log(verification)
        verification.text()
            .then((response) => {
                response == 1
                    ? window.location.replace('/')
                    : errorMsg.innerText = response
            })
        return
    }
    // user only reaches this code if they left something blank.
    errorMsg.innerText = 'Both username and password must be filled out'
}


document.querySelector('#login').addEventListener('click', login);