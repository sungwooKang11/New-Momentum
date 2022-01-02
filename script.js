const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");
const hello = document.querySelector("#hello");

const H = "hidden";

function loginSubmit (event) {
    event.preventDefault(); //유저가 이름 제출할 때, 기본동작 제어
    loginForm.classList.add(H); //처음 폼에 클래스 지정
    const username = loginInput.value; //유저 이름 저장
    hello.innerText = "Hello " + username; 
    hello.classList.remove(H);
} 

loginForm.addEventListener("submit", loginSubmit);

