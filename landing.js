"use strict";
const btnHover = document.querySelector(".btn--blue");
btnHover.addEventListener("mouseover", () => {
  btnHover.textContent = "Discover me!";
});
btnHover.addEventListener("mouseleave", () => {
  btnHover.textContent = "What is this?";
});
