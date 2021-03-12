"use strict";
const btnSelect = document.querySelector(".btn--blue");
btnSelect.addEventListener("mouseover", () => {
  btnSelect.textContent = "Discover me!";
});
btnSelect.addEventListener("mouseleave", () => {
  btnSelect.textContent = "What is this?";
});
// let changeColor = true;
// btnSelect.addEventListener("click", () => {
//   btnSelect.textContent = (changeColor = !changeColor) ? "isTrue" : "isFalse";
// });

const page = document.querySelector(".container");
const spinner = document.querySelector(".second-wrapper");
page.style.visibility = "hidden";
setTimeout(() => {
  spinner.style.display = "none";
  page.style.visibility = "visible";
}, 3000);
