const current = document.querySelector("#selected");
const thumbs = document.querySelectorAll(".thumbs img");
const opacity = 0.5;

thumbs[0].style.opacity = opacity;

thumbs.forEach(img => img.addEventListener("click", imgActivate));

function imgActivate(e) {
  thumbs.forEach(img => (img.style.opacity = 1));
  current.src = e.target.src;
  current.classList.add("fade-in");
  setTimeout(() => current.classList.remove("fade-in"), 500);
  e.target.style.opacity = opacity;
}