const images = ["IMG_0.jpeg", "IMG_1.jpg", "IMG_2.jpg"];

const chosenImage = images[Math.floor(Math.random() * images.length)];

const bgImage = document.createElement("img");

const body = document.querySelector("body");

bgImage.src = `img/${chosenImage}`;

document.body.appendChild(bgImage);

//floor = 숫자내림//