//니코쌤 도움받은 코드
const clockContainer = document.querySelector(".clock");
const clockTitle = clockContainer.querySelector("h1");
 

function getTime() {
  const date = new Date();
  const hours = String(date.getHours()).padStart(2, "0");
  const minutes = String(date.getMinutes()).padStart(2, "0");
  const seconds = String(date.getSeconds()).padStart(2, "0");
  clockTitle.innerText = `${hours}:${minutes}:${seconds}`
}

getTime();
setInterval(getTime, 1000);

//내 코드(오류)
//const clockContainer = document.querySelector(".clock");
//const clockTitle = clockContainer.querySelector("h1");
 
//getTime();

//function getTime() {
  //const date = new Date();
  //const hours = date.getHours();
  //const minutes = date.getMinutes();
  //const seconds = date.getSeconds();
  //clockTitle.innerText = `${hours < 10 ? `0${hours}` : hours}
  //${minutes < 10 ? `0${minutes}` : minutes}
  //${seconds < 10 ? `0${seconds}` : seconds}`;
//}
 
//setInterval(getTime, 1000);]