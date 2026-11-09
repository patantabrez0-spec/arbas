const loginForm = document.getElementById("loginForm");
const username = document.getElementById("username");
const password = document.getElementById("password");
const message = document.getElementById("message");
const showPassword = document.getElementById("showPassword");

// Show and Hide Password
showPassword.addEventListener("change", function () {
    if (this.checked) {
        password.type = "text";
    } else {
        password.type = "password";
    }
});

// Login Validation
loginForm.addEventListener("submit", function (event) {
    event.preventDefault();

    let user = username.value.trim();
    let pass = password.value.trim();

    if (user === "" || pass === "") {
        message.style.color = "red";
        message.innerHTML = "Please fill all fields!";
    } else if (user === "tabrez" && pass === "12345") {
        message.style.color = "green";
        message.innerHTML = "Login Successful! Welcome " + user;
    } else {
        message.style.color = "red";
        message.innerHTML = "Invalid Username or Password!";
    }
});

