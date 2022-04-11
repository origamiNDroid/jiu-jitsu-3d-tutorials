const sign_in_btn = document.querySelector("#sign-in-btn");
const sign_up_btn = document.querySelector("#sign-up-btn");
const forgot_password_btn = document.querySelector("#forgot-password-btn");
const container = document.querySelector(".container");

const loginUsername = document.getElementById("loginUsername");
const loginPassword = documnet.getElementById("loginPass");
const logButton = document.getElementById("logButton)");

const signUsername = document.getElementById("signUsername");
const signPassword = document.getElementById("signPassword");
const signEmail = document.getElementById("signEmail");
const regButton = document.getElementById("regButton");

sign_up_btn.addEventListener("click", () => {
  container.classList.add("sign-up-mode");
});

sign_in_btn.addEventListener("click", () => {
  container.classList.remove("sign-up-mode");
});

forgot_password_btn.addEventListener("click", () => {
  container.classList.remove("forgot-password-mode");
});

logButton.addEventListener("click", signIn(loginUsername, loginPassword));

regButton.addEventListener("click", signUp(signUsername, signPassword, signEmail));

function signIn(username, password)
{
    if ((username === "") || (pass === ""))
        return;
    
    window.location = "./profile.html";
}

function signUp()
{
    if ((username === "") || (pass === "") || (email === ""))
        return;
    
        window.location = "./profile.html";
}
