const hamburger = document.querySelector(".hamburger");
// Mobile menu
const menu = document.querySelector(".header__nav");
const body = document.body;

hamburger.addEventListener("click", () => {
  body.classList.toggle("disable-scroll");
  hamburger.classList.toggle("hamburger--open");
  menu.classList.toggle("header__nav--open");
});
