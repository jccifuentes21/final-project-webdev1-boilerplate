import {getCountries} from './countries.js'

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
