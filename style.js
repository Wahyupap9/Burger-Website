const hamburger = document.getElementById("hamburger");
const nav = document.getElementById("nav");
function MenuF() {
  nav.classList.toggle("active");
  nav.classList.toggle("nav");
}

function navlink() {
  nav.classList.remove("active");
  nav.classList.add("nav");
}
