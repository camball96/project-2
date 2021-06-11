// Logs out the user
const logOut = function leave() {
	const destroySession = fetch(`/api/user/logout`, {
		method: "delete",
		credentials: "same-origin",
		headers: { "Content-Type": "application/json" },
	}).then((resp) => {
		console.log(resp);
		document.location.replace("/");
		return;
	});
};

// // --------Listeners------------//
document.querySelector(".logoutButton").addEventListener("click", logOut);
