async function register(e) {
    e.preventDefault();

    const username = document.querySelector('#username').value;
    const password = document.querySelector('#password').value;
    const email = document.querySelector('#email').value;
    var errorMsg = document.querySelector('#problem');


    const registration = await fetch('/api/user/register', {
        method: 'post',
        body: JSON.stringify({
            user_name: username,
            password: password,
            user_email: email
        }),
        headers: { 'Content-Type': 'application/json' }
    })
    registration.status === 200 ?
        document.location.replace('/') :
        errorMsg.innerText = 'error occurred - messages need to be defined still'
}


document.querySelector('#signup').addEventListener('click', register);