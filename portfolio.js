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
