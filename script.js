const loginlog = document.getElementById("login-log");
const signupsign = document.getElementById("signup-log");
const loginForm = document.getElementById("login-form");
const signupForm = document.getElementById("signup-form");

loginlog.addEventListener("click", () => {
    loginlog.classList.add("active");
    signupsign.classList.remove("active");
    loginForm.classList.add("active");
    signupForm.classList.remove("active");
    clearErrors();
});

signupsign.addEventListener("click", () => {
    signupsign.classList.add("active");
    loginlog.classList.remove("active");
    signupForm.classList.add("active");
    loginForm.classList.remove("active");
    clearErrors(); 
});

function clearErrors() {
    document.querySelectorAll(".error").forEach((error) => {
        error.style.display = "none";
    });
}

loginForm.addEventListener("submit", (e) => {
    e.preventDefault();
    let isValid = true;

    const username = document.getElementById("login-username").value.trim();
    const password = document.getElementById("login-password").value;

    const usernameError = document.getElementById("login-username-error");
    const passwordError = document.getElementById("login-password-error");

    usernameError.style.display = "none";
    passwordError.style.display = "none";

    if (username === "") {
        usernameError.textContent = "Please enter your username or email ID.";
        usernameError.style.display = "block";
        isValid = false;
    }

    if (password === "") {
        passwordError.textContent = "Please enter your password.";
        passwordError.style.display = "block";
        isValid = false;
    }

    if (isValid) {
        console.log("Login Details:");
        console.log("Username or Email ID:", username);
        console.log("Password:", password);
    }
});

signupForm.addEventListener("submit", (e) => {
    e.preventDefault();
    let isValid = true;

    const username = document.getElementById("signup-username").value.trim();
    const email = document.getElementById("signup-email").value.trim();
    const password = document.getElementById("signup-password").value;
    const cpassword = document.getElementById("signup-confirm-password").value;

    const usernameError = document.getElementById("signup-username-error");
    const emailError = document.getElementById("signup-email-error");
    const passwordError = document.getElementById("signup-password-error");
    const cpasswordError = document.getElementById("signup-confirm-password-error");

    usernameError.style.display = "none";
    emailError.style.display = "none";
    passwordError.style.display = "none";
    cpasswordError.style.display = "none";

    if (username === "") {
        usernameError.textContent = "Please enter a username.";
        usernameError.style.display = "block";
        isValid = false;
    }

    if (email === "") {
        emailError.textContent = "Please enter an email ID.";
        emailError.style.display = "block";
        isValid = false;
    } else if (!/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(email)) {
        emailError.textContent = "Please enter a valid email ID.";
        emailError.style.display = "block";
        isValid = false;
    }

    if (password === "") {
        passwordError.textContent = "Please enter a password.";
        passwordError.style.display = "block";
        isValid = false;
    } else if (password.length < 6) {
        passwordError.textContent = "Password must be at least 6 characters long.";
        passwordError.style.display = "block";
        isValid = false;
    }

    if (cpassword === "") {
        cpasswordError.textContent = "Please confirm your password.";
        cpasswordError.style.display = "block";
        isValid = false;
    } else if (password !== cpassword) {
        cpasswordError.textContent = "Passwords do not match.";
        cpasswordError.style.display = "block";
        isValid = false;
    }

    if (isValid) {
        console.log("Sign-Up Details:");
        console.log("Username:", username);
        console.log("Email ID:", email);
        console.log("Password:", password);
        console.log("Confirm Password:", cpassword);
    }
});
