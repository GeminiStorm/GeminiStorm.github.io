"use strict";
const btnSelect = document.querySelector(".btn--blue");
btnSelect.addEventListener("mouseover", () => {
  btnSelect.textContent = "To my page!";
});
btnSelect.addEventListener("mouseleave", () => {
  btnSelect.textContent = "Welcome";
});
// let changeColor = true;
// btnSelect.addEventListener("click", () => {
//   btnSelect.textContent = (changeColor = !changeColor) ? "isTrue" : "isFalse";
// });

const page = document.querySelector(".container");
const spinner = document.querySelector(".second-wrapper");
page.style.visibility = "hidden";
window.onload = function () {
  spinner.style.display = "none";
  page.style.visibility = "visible";
};
