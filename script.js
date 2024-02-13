let button;

function moveButton() {
  if (!button) {
    button = document.getElementById("moving-button");
  }
  const randomX = Math.floor(Math.random() * (window.innerWidth - button.offsetWidth));
  const randomY = Math.floor(Math.random() * (window.innerHeight - button.offsetHeight));
  button.style.position = "absolute";
  button.style.left = randomX + "px";
  button.style.top = randomY + "px";
}

const rightButton = document.getElementById("moving-button");
rightButton.addEventListener("click", moveButton);

const leftButton = document.getElementById("left-button");
const image = document.getElementById("image");

leftButton.addEventListener("click", () => {
  image.src = "https://i.postimg.cc/XvJCwCxw/photo-2023-12-31-22-44-51.jpg"; // Replace with the URL of your image
  image.style.display = "block";
});

function showImage1() {
  const imageElement = document.querySelector('.image-and-buttons img');
  imageElement.src = "https://i.postimg.cc/rwDYyQt4/2024-02-13-212912561.png"; // Replace with the desired image URL
}