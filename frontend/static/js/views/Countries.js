import AbstractView from "./AbstractView.js";
import { countryArr } from "../index.js";

export default class extends AbstractView {
  constructor(params) {
    super(params);
    this.setTitle("Countries");
  }

  async getHTML() {
    const cards1 = document.createElement("div");
    for (let i = 0; i <= countryArr.length - 1; i++) {
      const card = document.createElement("div");
      const country = countryArr[i];
      console.log(country.flagURL);
      card.innerHTML = `
    <div class="countries-part-cards">
    <div class="countries-image-parts">
     <img src="${countryArr[i].flagURL}">
     </div>
     <div class="countries-information-part">
      <h2>${country.name}</h2>
      <p>Population: ${country.population}</p>
      <p>Region: ${country.region}</p>
      <p>Capital: ${country.capital}</p>
     </div>
    </div>
      `;
      cards1.appendChild(card);
    }

    return `
    <header>
            <div class="header">
            <h1>Where in the world?</h1>
            <div class="header-btn" id="dark-light-mode">
            <span class="iconify" data-icon="bi:moon-fill" style="color: #ccc; font-size: 17px;"></span>
            <span>Dark Mode</sapn>
            </div>
            </div>
        </header>
    <section class="countries-home">
    <div class="searching-part">
    <form class="searching-part-form">
    <span
            class="iconify searching-part-icon"
            data-icon="ant-design:search-outlined"
            style="color: #ccc; font-size: 17px"
          ></span>
    <input type="text" name="searching" placeholder="Search for a country..." class="searching-part-inpt" style="border:none">
    </form>
    <select class="searching-part-slc">
    <option class="searching-part-slc-op" disabled selected hidden>Filter by Region</option>
    <option class="searching-part-slc-op">Africa</option>
    <option class="searching-part-slc-op">America</option>
    <option class="searching-part-slc-op">Asia</option>
    <option class="searching-part-slc-op">Europe</option>
    <option class="searching-part-slc-op">Oceania</option>
    </select>
    </div>
    <div class="container">
    ${cards1.innerHTML}
    </div>
    </section>
    `;
  }
  
}

// const btn = document.getElementById("dark-light-mode");
// console.log(btn);

// btn.addEventListener("click", function () {
//   if (btn.checked == true) {
//     document.body.classList.remove("background-light-theme");
//     document.body.classList.add("background-dark-theme");
//   } else {
//     document.body.classList.remove("background-dark-theme");
//     document.body.classList.add("background-light-theme");
//   }
// });

