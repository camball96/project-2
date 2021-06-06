async function login(e) {
    e.preventDefault();

    const username = document.querySelector('#username').value;
    const password = document.querySelector('#password').value;
    var errorMsg = document.querySelector('#problem');

    if (password.length > 5) {
        if (username) {

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
                    console.log(response)
                    response == 1
                        ? window.location.replace('/')
                        : errorMsg.innerText = response
                })
            return
        }
        errorMsg.innerText = 'Username must be filled out'
        return
    }
    errorMsg.innerText = 'Password needs to be 6 characters minimum'
}


document.querySelector('#login').addEventListener('click', login);