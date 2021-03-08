"use strict";
//click event cho dropdown menu
const navIcon = document.querySelector(".nav__icon");
const navToggle = document.querySelector(".navigation");
function changeIcon() {
  navIcon.classList.toggle("fa-bars");
  navIcon.classList.toggle("fa-times");
}
navIcon.addEventListener("click", () => {
  navToggle.classList.toggle("hidden");
  changeIcon();
});
