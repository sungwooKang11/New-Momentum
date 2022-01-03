const images = ["0.jpg", "1.jpg", "2.jpg"];
const selectImg = images[Math.floor(Math.random() * images.length)];

const bgImg = document.createElement("img");

bgImg.src = `img/${selectImg}`;

document.body.appendChild(bgImg);