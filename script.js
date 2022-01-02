const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");
const hello = document.querySelector("#hello");

const H = "hidden";
const UN = "username";

//function fillHello(username) {
    //hello.classList.remove(H);
    //hello.innerText = "Hello " + username;}

function loginSubmit (event) {
    event.preventDefault(); //유저가 이름 제출할 때, 기본동작 제어
    loginForm.classList.add(H); //처음 폼에 클래스 지정
    const username = loginInput.value; //유저 이름 저장
    localStorage.setItem(UN, username); //로컬스토리지에 유저이름 저장
    hello.innerText = "Hello " + username; // `Hello ${username}`; 도 동일한 표기임
    hello.classList.remove(H);
} 

const lsUsername = localStorage.getItem(UN);

if(lsUsername === null){
    loginForm.classList.remove(H);
    loginForm.addEventListener("submit", loginSubmit);
}else {
    hello.classList.remove(H);
    hello.innerText = "Hello " + lsUsername;
}