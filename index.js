const checkbox = document.getElementById("checkbox");
const background = document.querySelector("body");
const circle = document.querySelector(".circle");
const label = document.querySelector(".label");
const word = document.getElementById("word");

function switchMode() {
  console.log("clicked");
  background.classList.toggle("dark-background");
  circle.classList.toggle("dark-circle");
  label.classList.toggle("light-label");
  word.innerHTML === "off."
    ? (word.innerHTML = "on.")
    : (word.innerHTML = "off.");
}

checkbox.addEventListener("click", switchMode);
