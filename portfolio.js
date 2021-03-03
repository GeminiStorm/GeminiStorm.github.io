"use strict";
const activePics = document.querySelectorAll(".pic");
activePics.forEach((pic) => {
  pic.addEventListener("click", () => {
    removeActive();
    pic.classList.add("active");
  });
});
const removeActive = function (pic) {
  activePics.forEach((pic) => {
    pic.classList.remove("active");
  });
};
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
