const form = document.querySelector("form");
const email = document.querySelector("input[type=text]");
const errorMsg = document.querySelector(".form__error-msg");

form.addEventListener("submit", (e) => {
	e.preventDefault();

	// when button click, remove error msg and email input border first before checking
	errorMsg.textContent = "";
	email.classList.remove("danger");

	if (!email.value.trim()) {
		errorMsg.textContent = "Oops! Please add your email";
		email.classList.add("danger");
		return;
	}

	if (!email.value.includes("@")) {
		errorMsg.textContent = "Oops! That doesn’t look like an email address";
		email.classList.add("danger");
		return;
	}

	alert("We'll notify you once we launch!");
	errorMsg.textContent = "";
	email.value = "";
});
