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
const navi = document.querySelector(".navigation");
navIcon.addEventListener("click", () => {
  navi.classList.toggle("hidden");
});
