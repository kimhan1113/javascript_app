const images = [
    "0.jpg",
    "1.jpg",
    "2.jpg",
    "3.jpg",
]

images_len = images.length
random_number = Math.floor(Math.random() * images_len);
const chosenImg = images[random_number];

// console.log(chosenImg);

const bgImg = document.createElement("img");

bgImg.src = `img/${chosenImg}`;
bgImg.style.width = '100%';
// console.log(bgImg.width);

document.body.appendChild(bgImg);