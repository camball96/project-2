

async function login(e) {
    e.preventDefault();

    const username = document.querySelector('#username').value;
    const password = document.querySelector('#password').value;
    var errorMsg = document.querySelector('#problem');

    // goes to /api /user / login route to check user/pass against DB
    const verification = await fetch('/api/user/login', {
        method: 'post',
        body: JSON.stringify({
            user_name: username,
            password: password
        }),
        headers: { 'Content-Type': 'application/json' }
    })

    // converts the response to useable data then sends them to home if log in success other wise it displays an error.
    verification.text()
        .then((response) => {
            console.log(response)
            response == 1 ? document.location.replace('/') :
                errorMsg.innerText = response
        })
}

document.querySelector('#login').addEventListener('click', login);