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
const block1 = [23, 4, 6, 2, 12];
const block2 = [52, 32, 7, 45, 2];
console.log(8, ...block1, ...block2, 9);
const [haiba, tu, ...otherBlock] = [...block1];
console.log(haiba, tu, otherBlock);
const sumCalc = function (...num) {
  let sum = 0;
  for (let i = 0; i < num.length; i++) sum = sum + num[i];
  console.log(sum);
};
sumCalc(...block1, ...block2);
