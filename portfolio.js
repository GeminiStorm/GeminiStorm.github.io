"use strict";
// const pic = document.querySelector(".pic");
// const activePics = document.querySelectorAll(".pic");
// activePics.forEach((pic) => {
//   pic.addEventListener("click", () => {
//     removeActive();
//     pic.classList.add("active");
//   });
// });
// const removeActive = function (pic) {
//   activePics.forEach((pic) => {
//     pic.classList.remove("active");
//   });
// };
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
//read more
const btnMore = document.querySelector(".btn__more");
const textMore = document.getElementById("more");
btnMore.addEventListener("click", () => {
  textMore.classList.toggle("hidden");
  if ((textMore.style.display = "none")) {
    btnMore.textContent = "Read more...";
  } else {
    btnMore.textContent = "Read less...";
  }
});
