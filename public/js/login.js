// Login function
async function login(e) {
	e.preventDefault();
	const username = document.querySelector('#username').value;
	const password = document.querySelector('#password').value;
	const errorMsg = document.querySelector('#problem')

	// Avoid wasteful DB call if they have not filled data
	if (!username && !password) {
		errorMsg.innerText = 'Both username and password must be filled out'
		return
	}

	// Call user API to check user/pass 
	const verification = await fetch('/api/user/login', {
		method: 'post',
		credentials: 'same-origin',
		body: JSON.stringify({
			user_name: username,
			password: password
		}),
		headers: { 'Content-Type': 'application/json' }
	})

	// sends them back a page if successful (1)
	// displays an error otherwise
	verification.text().then((response) => {
		response == 1
			? window.location.replace("/")
			: errorMsg.innerText = response;
	})
}

document.querySelector("#login").addEventListener("click", login);
document.querySelector('#password').addEventListener('keypress', function (e) {
	if (e.key === 'Enter') { login(e) }
})
