"use strict";
let selectedCountry;
const btn = document.getElementById("btn");
const countriesContainer = document.querySelector(".countries");
const listCountry = document.querySelector(".list-country");
let loading = `<div class="loading"></div>`;
const enableBtn = function () {
  btn.disabled = false;
};
const disableBtn = function () {
  btn.disabled = true;
};
// get and  choose country list
const displayCountryList = function (countriesData) {
  let options = "";
  countriesData.forEach(
    (country) =>
      (options += `<option value="${country.name}">${country.name}</option>`)
  );
  listCountry.innerHTML = options;
  listCountry.selectedIndex = -1;
};
//IIFE to display country list
(async function () {
  try {
    const fetchCountryListName = await fetch(
      "https://restcountries.eu/rest/v2/all?fields=name"
    );
    if (!fetchCountryListName) {
      throw new Error("Problem getting country!");
    }
    const dataCountryListName = await fetchCountryListName.json();
    displayCountryList(dataCountryListName);
  } catch (err) {
    displayError(err);
  }
})();
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
const countryInfor = async function (country) {
  countriesContainer.innerHTML = loading;
  try {
    const fetchCountryInfor = await fetch(
      `https://restcountries.eu/rest/v2/name/${country}`
    );
    if (!fetchCountryInfor.ok) {
      throw new Error("Country not found");
    }
    const dataCountryArr = await fetchCountryInfor.json();
    countriesContainer.innerHTML = "";
    const dataCountryObj = dataCountryArr[0];
    displayCountry(dataCountryObj);
    const neighborsCode = dataCountryObj.borders;
    if (neighborsCode.length === 0) displayError(`${country} has no neighbor`);
    neighborsCode.forEach(async function (code) {
      const fetchCode = await fetch(
        `https://restcountries.eu/rest/v2/alpha/${code}`
      );
      const dataCode = await fetchCode.json();
      countriesContainer.addEventListener(
        "load",
        displayCountry(dataCode, "neighbour")
      );
    });
  } catch (err) {
    countriesContainer.innerHTML = "";
    displayError(err);
  }
};
//fetch all data country to select
listCountry.addEventListener("change", function (e) {
  selectedCountry = this[e.target.selectedIndex].value;
  enableBtn();
});
btn.addEventListener("click", function () {
  disableBtn();
  countryInfor(selectedCountry).finally(
    () => (countriesContainer.style.opacity = 1)
  );
});
