import AbstractView from "./AbstractView.js";
import { countryArr } from "../index.js";

export default class extends AbstractView {
    constructor(params) {
        super(params);
        this.setTitle("Country");
    }

    async getHTML() {
        const countryID = this.params.id;

        const currentCountry = countryArr.find(country => country.cca3 == countryID);

        console.log(currentCountry)
        const borderCountriesContainer = document.createElement("div");
        
        currentCountry.borderCountries.map(country =>{
            let borderCountry = countryArr.find( border => border.cca3 == country)

            const borderButton = document.createElement("a");
            console.log(borderCountry.name)

            borderButton.innerHTML = borderCountry.name
            borderButton.setAttribute("href", borderCountry.cca3);
            borderButton.className = "border-country-button";

            borderCountriesContainer.appendChild(borderButton)
        })

        console.log(borderCountriesContainer)

        return `
        <header>
            <div class="header">
            <h1>Where in the world?</h1>
            <button id="dark-light-mode"></button>
            </div>
        </header>
    
        <div class="content">
            <a href="#" class="back-button"><span class="fa fa-arrow-left"></span>&nbsp;&nbsp;Back</a>
            <img src="${currentCountry.flagURL}" alt="" class="country-flag" id="country-view-flag">
            <h2 id="country-name">${currentCountry.name}</h2>
            <p class="placeholder">Native name: <span class="placeholder-content">${currentCountry.nativeName}</span></p>
            <p class="placeholder">Population: <span class="placeholder-content">${currentCountry.population}</span></p>
            <p class="placeholder">Region: <span class="placeholder-content">${currentCountry.region}</span></p>
            <p class="placeholder">Sub Region: <span class="placeholder-content">${currentCountry.subregion}</span></p>
            <p class="placeholder">Capital: <span class="placeholder-content">${currentCountry.capital}</span></p>
            <br>
            <p class="placeholder">Top Level Domain: <span class="placeholder-content">${currentCountry.domain}</span></p>
            <p class="placeholder">Currency: <span class="placeholder-content">${currentCountry.currencies}</span></p>
            <p class="placeholder">Languages: <span class="placeholder-content">${currentCountry.languages}</span></p>
            <br>
            <h3>Border Countries:</h3>
            <div class = "border-countries">
            ${borderCountriesContainer.innerHTML}
            </div>
        </div>
        `;
    }
}