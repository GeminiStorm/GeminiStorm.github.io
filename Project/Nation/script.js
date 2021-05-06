"use strict";
let countries;
let selectedCountry;
const btn = document.getElementById("btn");
const countriesContainer = document.querySelector(".countries");
// const inputCountry = document.getElementById("input");
const listCountry = document.querySelector(".list-country");
let loading = `<div class="loading"></div>`;
// display ìnformation
const displayCountry = function (country, className = "") {
  const html = `<article class="country ${className}">
    <img class="country__img" src="${country.flag}" />
    <div class="country__data">
      <h3 class="country__name">${country.name}</h3>
      <h4 class="country__region">${country.region}</h4>
      <p class="country__row"><span>👫</span>${(
        +country.population / 1000000
      ).toFixed(1)}tr</p>
      <p class="country__row"><span>👂</span>${country.languages[0].name}</p>
      <p class="country__row"><span>💰</span>${country.currencies[0].code}</p>
    </div>
  </article>`;
  countriesContainer.insertAdjacentHTML("beforeend", html);
};
const displayError = function (text) {
  countriesContainer.insertAdjacentHTML("beforeend", text);
};
//fetch data from rest Country
const getNationData = function (nation) {
  countriesContainer.innerHTML = loading;
  btn.disabled = true;
  fetch(`https://restcountries.eu/rest/v2/name/${nation}`)
    .then(function (response) {
      if (!response.ok) {
        throw new Error("Country not found");
      }
      return response.json();
    })
    .then(function (data) {
      const nationData = data[0];
      const neighborsCode = nationData.borders;
      countriesContainer.innerHTML = "";
      displayCountry(nationData);
      if (!neighborsCode) throw new Error("Neighbor not found");
      return neighborsCode;
    })
    .then(function (fromNeighborCode) {
      fromNeighborCode.forEach((code) => {
        fetch(`https://restcountries.eu/rest/v2/alpha/${code}`)
          .then((response2) => response2.json())
          .then(function (data2) {
            const neighborData = data2;
            displayCountry(neighborData, "neighbour");
            btn.disabled = false;
          });
      });
    })
    .catch(function (err) {
      countriesContainer.innerHTML = "";
      btn.disabled = false;
      return displayError(err);
    })
    .finally(() => {
      countriesContainer.style.opacity = 1;
    });
};
//starting country

//fetch all data country to select
fetch("https://restcountries.eu/rest/v2/all?fields=name")
  .then((res) => res.json())

  .then((data) => initialize(data))
  .catch((err) => console.log("Error:", err));
function initialize(countriesData) {
  countries = countriesData;
  let options = "";
  countries.forEach(
    (country) =>
      (options += `<option value="${country.name}">${country.name}</option>`)
  );
  listCountry.innerHTML = options;

  listCountry.selectedIndex = -1;
}
// const selectCountry = function () {
//   listCountry.innerHTML = options;
//   displayCountryInfo(countriesList[countriesList.selectedIndex].value);;
// };
// console.log(listCountry.selectedIndex);
listCountry.addEventListener("change", function (e) {
  selectedCountry = this[e.target.selectedIndex].value;
});

// function newCountrySelection(event) {
//   console.log(event.target.value);
// }
// const enableBtn = function () {
//   btn.disabled = false;
// };
btn.addEventListener("click", function () {
  getNationData(selectedCountry);
  // ;
  // setTimeout(enableBtn, 3000);
});
