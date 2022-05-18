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
     <img src="${countryArr[i].flagURL}">
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
