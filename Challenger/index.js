const hamburgerBtn = document.getElementById("hamburger-btn");
const hamburgerNav = document.getElementById("mobile-menu")
function handleClick() {
  hamburgerNav.classList.toggle("visible")
}
hamburgerBtn.addEventListener("click", handleClick);