const loginInForm = document.querySelector(".login-form");
const loginInput = document.querySelector(".login-form input");

function loginSubmit () {
    const username = loginInput.value;
    console.log(username);
} 

loginInForm.addEventListener("submit", loginSubmit);