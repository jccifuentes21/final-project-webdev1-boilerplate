import { getCountries } from "./countries.js";

window.addEventListener('DOMContentLoaded', (event) => {
    console.log('DOM fully loaded and parsed');

    const images=[
        "static/css/homepage/brazil.jpg",
        "static/css/homepage/canada.jpg",
        "static/css/homepage/italy.jpg",
        "static/css/homepage/czech.jpg",
        "static/css/homepage/france.jpg",
        "static/css/homepage/germany.jpg",
        "static/css/homepage/japan.jpg",
       ]

       let index = 0;
       const imgElement = document.querySelector('#backgroundImage');
       
       function change() {
          imgElement.style.backgroundImage = `url(${images[index]})`;
          index > 5 ? index = 0 : index++;
       }
       
       window.onload = function () {
           setInterval(change, 5000);
       };
});

const countries = getCountries();
let countryObject = []
const countryArr = [];

countries.map(country => {
  countryObject = {
    cca3: null,
    name: null,
    nativeName: null,
    population: null,
    region: null,
    subregion: null,
    capital: null,
    domain: null,
    currencies: [],
    languages: [],
    borderCountries: [],
    flagURL: null
  }

  countryObject.cca3 = country.cca3;
  countryObject.name = country.name.common;

  if(country.name.nativeName != null) countryObject.nativeName = (Object.values(country.name.nativeName)[0]).common
  else countryObject.nativeName = "This country does not have a native name"

  countryObject.population = country.population;
  countryObject.region = country.region;

  if (country.subregion != null) countryObject.subregion = country.subregion;
  else countryObject.subregion = "This country does not have a sub region"

  if(country.capital != null) countryObject.capital = country.capital[0];
  else countryObject.capital = "This country does not have a capital"

  if(country.tld != null) countryObject.domain = country.tld[0];
  else countryObject.domain = "This country does not have a domain"

  countryObject.currencies = country.currencies
  countryObject.languages = country.languages
  countryObject.borderCountries = country.borders
  countryObject.flagURL = country.flags.png

  countryArr.push(countryObject);

})

console.log(countryArr);