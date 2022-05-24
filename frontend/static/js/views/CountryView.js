import AbstractView from "./AbstractView.js";
import { countryArr } from "../index.js";

export default class extends AbstractView {
  constructor(params) {
    super(params);
    this.setTitle("Country");
  }

  async getHTML() {
    const countryID = this.params.id;

    const currentCountry = countryArr.find(
      (country) => country.cca3 == countryID
    );

    console.log(currentCountry);
    const borderCountriesContainer = document.createElement("div");

    currentCountry.borderCountries.map((country) => {
      let borderCountry = countryArr.find((border) => border.cca3 == country);

      const borderButton = document.createElement("a");
      console.log(borderCountry.name);

      borderButton.innerHTML = borderCountry.name;
      borderButton.setAttribute("href", borderCountry.cca3);
      borderButton.className = "border-country-button";
      borderButton.classList.add("view-darkmode");
      borderButton.classList.add("countryViewButtonlight");

      borderCountriesContainer.appendChild(borderButton);
    });

    console.log(borderCountriesContainer);

    return `
    <header>
<<<<<<< HEAD
      <div class="header" id="header">
      <h1><a class="link-viewpages" href="/" >Where in the world?</a></h1>
      <div class="header-btn" id="dark-light-mode" data-toggle="light">
      <span class="iconify" data-icon="bi:moon-fill" style="color: #ccc; font-size: 17px;"></span>
      <span id="span">Dark Mode</sapn>
      </div>
      </div>
    </header>
=======
            <div class="header lightmode" id="header" data-theme = "light">
            <h1 class="header-title"><a class="link-home lightmode" href=http://localhost:8081/ data-theme = "light">Where in the world?</a></h1>
            <div class="header-btn" id="dark-light-mode" data-toggle = "light">
            <span class="iconify" data-icon="bi:moon-fill" style="color: #ccc; font-size: 17px;"></span>
            <span classs="header-darkmode" id="span">Dark Mode</sapn>
            </div>
            </div>
        </header>
>>>>>>> 5572b8a94ddaed5e14277231c18870d365f027af
    
        <div class="content">
            <a href="/countries" class="back-button countryViewButtonlight" data-theme = "viewLight"><span class="fa fa-arrow-left"></span>&nbsp;&nbsp;Back</a>
            <div class="country-data-container">
                <div class="country-flag">
                    <img src="${currentCountry.flagURL}" alt="">
                </div>
                <div class="country-container">
                    <div class="country-data">
                        <div class="main-data">
                            <h2 id="country-name">${currentCountry.name}</h2>
                            <p class="placeholder">Native name: <span class="placeholder-content">${currentCountry.nativeName}</span></p>
                            <p class="placeholder">Population: <span class="placeholder-content">${currentCountry.population}</span></p>
                            <p class="placeholder">Region: <span class="placeholder-content">${currentCountry.region}</span></p>
                            <p class="placeholder">Sub Region: <span class="placeholder-content">${currentCountry.subregion}</span></p>
                            <p class="placeholder">Capital: <span class="placeholder-content">${currentCountry.capital}</span></p>
                        </div>
                        <br>
                        <div class ="secondary-data">
                            <p class="placeholder">Top Level Domain: <span class="placeholder-content">${currentCountry.domain}</span></p>
                            <p class="placeholder">Currency: <span class="placeholder-content">${currentCountry.currencies}</span></p>
                            <p class="placeholder">Languages: <span class="placeholder-content">${currentCountry.languages}</span></p>
                            <br>
                        </div>
                    </div>
                    <h3>Border Countries:</h3>
                    <div class = "border-countries">
                        ${borderCountriesContainer.innerHTML}
                    </div>
                </div>
            </div>
        </div>
        `;
  }
}
