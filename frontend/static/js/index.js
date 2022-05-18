import {getCountries} from './countries.js'

const countries = getCountries();

// countries.map(element =>{
//   console.log(element.name.common)
//   console.log(element.population)
//   console.log(element.region)
//   if(element.capital != null){
//     element.capital.map(capitals => {
//       console.log(capitals)
//     })
//   } else {
//     console.log("the country does not have a capital")
//   }
// })

let countryObject = []


const countryArr = [];

countries.map(country => {
  countryObject = {
    cca3: null,
    name: null,
    nativeName: null,
    population: null,
    region: null,
    subRegion: null,
    capital: null,
    domain: null,
    currencies: [],
    languages: [],
    borderCountries: []
  }

  countryObject.cca3 = country.cca3;
  countryObject.name = country.name.common;
  // if(country.name.nativeName[0])
  countryObject.nativeName = country.name.nativeName
  countryObject.population = country.population;
  countryObject.region = country.region;
  countryObject.subRegion = country.subregion;
  if(country.capital != null) countryObject.capital = country.capital[0];
  else countryObject.capital = "This country does not have a capital"

  if(country.tld != null) countryObject.domain = country.tld[0];
  else countryObject.domain = "This country does not have a domain"
  // countryObject.currencies = country.currencies
  // countryObject.languages = country.languages
  // countryObject.borderCountries = country.borders

  countryArr.push(countryObject);
  console.log(countryObject)

})

console.log(countryArr)
 
console.log(countries);
