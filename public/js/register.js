// Validate data first to avoid wasteful API calls
function formCheck(e) {
	e.preventDefault();
	const username = document.querySelector('#username').value;
	const email = document.querySelector('#email').value;
	const password = document.querySelector('#password').value;
	var errorMsg = document.querySelector('#problem');

	if (!email || !username) {
		errorMsg.innerText = 'Both email and password need to be filled out'
		return
	}
	if (email.length > 50 || username.length > 50) {
		errorMsg.innerText = 'username and email should be below 50 characters'
		return
	}
	if (password.length < 6) {
		errorMsg.innerText = 'password must be at least 6 characters'
		return
	}

	body = {}
	body.user_name = username
	body.password = password
	body.user_email = email

	register(body)
}


// Calls User API to create new acc for user
async function register(body) {
	const registration = await fetch('/api/user/register', {
		method: 'post',
		credentials: 'same-origin',
		body: JSON.stringify(body),
		headers: { 'Content-Type': 'application/json' }
	})

	registration.redirected
		? window.location.replace(registration.url)
		: registration.text().then(data =>
			JSON.parse(data)).then(msg => errorLookup(msg))
}


// error lookup, the idea is to expand this to handle more errors
const errorLookup = (errors) => {
	console.log(errors)

	var errorMsg = document.querySelector('#problem');
	var failType = errors.errors[0].validatorKey;
	var failValue = errors.errors[0].value;

	var display = failType == 'isEmail'
		? `${failValue} is not a valid email`
		: `${failValue} is already taken`

	errorMsg.innerText = display
}


// listeners.
window.onload = function () {
	document.querySelector('#join').addEventListener('click', formCheck);
}
