import { getCountries } from "../countries.js";
import AbstractView from "./AbstractView.js";

export default class extends AbstractView {
    constructor(params) {
        super(params);
        this.setTitle("Country");
    }

    async getHTML() {
        // const countries = getCountries();
        // const countriesInfo = [];
        // let countryId = this.params.id;

        // countries.map(element =>{
        //     countriesInfo = [
        //         {
        //             name: element.name.common
        //         }
        //     ]
        //     console.log(element.name.common)
        // })

        return `
        <header>
            <div class="header">
            <h1>Where in the world?</h1>
            <button id="dark-light-mode"></button>
            </div>
        </header>
    
        <div class="content">
            <a href="#" class="back-button"><span class="fa fa-arrow-left"></span>&nbsp;&nbsp;Back</a>
            <img src="https://flagcdn.com/w320/be.png" alt="" class="country-flag" id="country-view-flag">
            <h2 id="country-name">Belgium</h2>
            <p class="placeholder">Native name: <span id="native-name" class="placeholder-content">Belgie</span></p>
            <p class="placeholder">Population: <span id="population" class="placeholder-content">11,319,511</span></p>
            <p class="placeholder">Region: <span id="region" class="placeholder-content">Europe</span></p>
            <p class="placeholder">Sub Region: <span id="sub-region" class="placeholder-content">Western Europe</span></p>
            <p class="placeholder">Capital: <span id="capital" class="placeholder-content">Brussels</span></p>
            <br>
            <p class="placeholder">Top Level Domain: <span id="country-domain" class="placeholder-content">.be</span></p>
            <p class="placeholder">Currencies: <span id="currencies" class="placeholder-content">Euro</span></p>
            <p class="placeholder">Languages: <span id="languages" class="placeholder-content">Dutch, French, German</span></p>
            <br>
            <h3>Border Countries:</h3>
            <div class="border-countries">
                <a href="#" class="border-country-button">Country</a>   
            </div>
        </div>
        `;
    }
}