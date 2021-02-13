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
