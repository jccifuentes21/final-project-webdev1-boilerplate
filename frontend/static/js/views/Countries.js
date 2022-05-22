import AbstractView from "./AbstractView.js";
import { countryArr } from "../index.js";

export default class extends AbstractView {
  constructor(params) {
    super(params);
    this.setTitle("Countries");
  }

  async getHTML() {
    const cards1 = document.createElement("div");
    console.log(countryArr.name);
    for (let i = 0; i <= countryArr.length - 1; i++) {
      const card = document.createElement("div");
      const country = countryArr[i];
      card.innerHTML = `
      <div class="countries-part-cards" >
      <a class="link-viewpages" href=/countries/${country.cca3}>
      <div class="countries-image-parts">
      <img class="country-images" src="${countryArr[i].flagURL}">
      </div>
      <div>
      <div class="countries-information-part lightmode"  data-theme = "light">
      <h2 class="information-part-h2">${country.name}</h2>
      <p class="information-part-p">Population: ${country.population}</p>
      <p class="filter-region information-part-p">Region: ${country.region}</p>
      <p class="information-part-p">Capital: ${country.capital}</p>
      </div>
      </div>
      </a>
      </div>
    `;
      cards1.appendChild(card);
    }

    return `
    <header>
            <div class="header lightmode" id="header" data-theme = "light">
            <h1 class="header-title"><a class="link-home lightmode" href=http://localhost:8081/ data-theme = "light">Where in the world?</a></h1>
            <div class="header-btn" id="dark-light-mode" data-toggle = "light">
            <span class="iconify" data-icon="bi:moon-fill" style="color: #ccc; font-size: 17px;"></span>
            <span classs="header-darkmode" id="span">Dark Mode</sapn>
            </div>
            </div>
        </header>
    <section class="countries-home">
    <div class="searching-part">
    <form class="searching-part-form" onsubmit="return false;">
    <span
            class="iconify searching-part-icon"
            data-icon="ant-design:search-outlined"
            style="color: #ccc; font-size: 14px"
          ></span>
    <input type="text" name="searching" oninput="inputChange()" placeholder="Search for a country..." class="searching-part-inpt lightmode" id="searching-input" data-theme = "light" style="border:none">
    </form>
    <select class="searching-part-slc lightmode" id="select" data-theme = "light">
    <option class="searching-part-slc-op" disabled selected hidden>Filter by Region</option>
    <option class="searching-part-slc-op" id="africa">Africa</option>
    <option class="searching-part-slc-op" id="america">Americas</option>
    <option class="searching-part-slc-op" id="asia">Asia</option>
    <option class="searching-part-slc-op" id="europe">Europe</option>
    <option class="searching-part-slc-op" id="oceania">Oceania</option>
    </select>
    </div>
    <div class="container" id="dark-mode">
    ${cards1.innerHTML}
    </div>
    </section>
    `;
  }
}
