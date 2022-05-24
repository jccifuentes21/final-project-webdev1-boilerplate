import { getCountries } from "./countries.js";

window.addEventListener("DOMContentLoaded", (event) => {
  console.log("DOM fully loaded and parsed");
  

  const body =  document.querySelector('body')
  body.style.setProperty('--body-background-color', '#202c37' )
  body.style.setProperty('--element-background-color', '#2b3945' )
  body.style.setProperty('--text-color', '#fff' )



  const brazil = {
    backgroundImage: "static/css/homepage/brazil.jpg",
    countryName: "Brazil",
    flag: "static/css/flag/brazil.png",
    population: "Population: 212,559,409",
    region: "Region: Americas",
    capital: "Capital: Brasília",
  };
  const canada = {
    backgroundImage: "static/css/homepage/canada.jpg",
    countryName: "Canada",
    flag: "static/css/flag/canada.png",
    population: "Population: 38,005,238",
    region: "Region: Americas",
    capital: "Capital: Ottawa",
  };
  const czech = {
    backgroundImage: "static/css/homepage/czech.jpg",
    countryName: "Czech Republic",
    flag: "static/css/flag/czech.png",
    population: "Population: 10,698,896",
    region: "Region: Europe",
    capital: "Capital: Prague",
  };
  const france = {
    backgroundImage: "static/css/homepage/france.jpg",
    countryName: "France",
    flag: "static/css/flag/france.png",
    population: "Population: 67,391,582",
    region: "Region: Europe",
    capital: "Capital: Paris",
  };
  const germany = {
    backgroundImage: "static/css/homepage/germany.jpg",
    countryName: "Germany",
    flag: "static/css/flag/germany.png",
    population: "Population: 83,240,525",
    region: "Region: Europe",
    capital: "Capital: Berlin",
  };
  const italy = {
    backgroundImage: "static/css/homepage/italy.jpg",
    countryName: "Italy",
    flag: "static/css/flag/italy.png",
    population: "Population: 59,554,023",
    region: "Region: Europe",
    capital: "Capital: Rome",
  };
  const japan = {
    backgroundImage: "static/css/homepage/japan.jpg",
    countryName: "Japan",
    flag: "static/css/flag/japan.png",
    population: "Population: 125,836,021",
    region: "Region: Asia",
    capital: "Capital: Tokyo",
  };

  const countriesHomepage = [
    brazil,
    canada,
    italy,
    czech,
    france,
    germany,
    japan,
  ];

  let index = 0;

  console.log();
  if (window.location.pathname === "/") {
    //homepage ↓↓↓
    const imgElement = document.querySelector("#backgroundImage");
    const countryName = document.querySelector("#countryNameHP");
    const flag = document.querySelector("#flagHP");
    const population = document.querySelector("#populationHP");
    const region = document.querySelector("#regionHP");
    const capital = document.querySelector("#capitalHP");
    function change() {
      imgElement.style.backgroundImage = `url("${countriesHomepage[index].backgroundImage}")`;
      countryName.innerHTML = countriesHomepage[index].countryName;
      flag.src = countriesHomepage[index].flag;
      population.innerHTML = countriesHomepage[index].population;
      region.innerHTML = countriesHomepage[index].region;
      capital.innerHTML = countriesHomepage[index].capital;
      index > 5 ? (index = 0) : index++;
    }
    window.onload = function () {
      setInterval(change, 5000);
    };

    //Darkmode settings
    const btn = document.getElementById("dark-light-mode");
    btn.addEventListener("click", function () {
      if (btn.getAttribute("data-toggle") == "light") {
        const elements = document.querySelectorAll("[data-theme ='light']");
        const bodyelements = document.querySelector(
          "[data-theme ='bodylight']"
        );
        bodyelements.classList.remove("bodylightmode");
        bodyelements.classList.add("bodydarkmode");
        for (let element of elements) {
          element.classList.remove("lightmode");
          element.classList.add("darkmode");
        }
        btn.setAttribute("data-toggle", "dark");
      } else if (btn.getAttribute("data-toggle") == "dark") {
        const elements = document.querySelectorAll("[data-theme ='light']");
        const bodyelements = document.querySelector(
          "[data-theme ='bodylight']"
        );
        bodyelements.classList.remove("bodydarkmode");
        bodyelements.classList.add("bodylightmode");
        for (let element of elements) {
          element.classList.remove("darkmode");
          element.classList.add("lightmode");
        }
        btn.setAttribute("data-toggle", "light");
      }
    });
  } else if (window.location.pathname === "/countries") {
    //Countries page↓↓↓

    //Filter function with select
    const select = document.getElementById("select");
    select.addEventListener(`change`, function (e) {
      let filteredCountries = [];
      for (let i = 0; i <= countryArr.length - 1; i++) {
        if (e.target.value === countryArr[i].region) {
          filteredCountries.push(countryArr[i]);
        }
      }
      const containerhtml = document.querySelector(".container");
      containerhtml.innerHTML = "";
      for (let i = 0; i <= filteredCountries.length - 1; i++) {
        const card = document.createElement("div");
        const filteredcountry = filteredCountries[i];
        console.log(filteredcountry);
        card.innerHTML = `
    <div class="countries-part-cards">
    <a class="link-viewpages" href=/countries/${filteredcountry.cca3}>
    <div class="countries-image-parts">
    <img class="country-images" src="${filteredcountry.flagURL}">
    </div>
    <div>
    <div class="countries-information-part lightmode" data-theme = "light">
    <h2 class="information-part-h2">${filteredcountry.name}</h2>
    <p class="information-part-p">Population: ${filteredcountry.population}</p>
    <p class="filter-region class="information-part-p"">Region: ${filteredcountry.region}</p>
    <p class="information-part-p">Capital: ${filteredcountry.capital}</p>
    </div>
    </div>
    </a>
    </div>
    `;
        containerhtml.appendChild(card);
      }
    });

    //Searching function with input

    let text = document.getElementById("searching-input");
    text.addEventListener("input", inputChange);

    function inputChange() {
      let searchinghtml = [];
      for (let i = 0; i <= countryArr.length - 1; i++) {
        let countryName = countryArr[i].name;
        let data = [...countryName];
        if (text.value == data[0]) {
          searchinghtml.push(countryArr[i]);
        }
        if (text.value == data[0] + data[1]) {
          searchinghtml.push(countryArr[i]);
        }
        if (text.value == data[0] + data[1] + data[2]) {
          searchinghtml.push(countryArr[i]);
        }
        if (text.value == data[0] + data[1] + data[2] + data[3]) {
          searchinghtml.push(countryArr[i]);
        }
        if (text.value == data[0] + data[1] + data[2] + data[3] + data[4]) {
          searchinghtml.push(countryArr[i]);
        }
      }

      const containerhtml = document.querySelector(".container");
      containerhtml.innerHTML = "";

      for (let i = 0; i <= searchinghtml.length - 1; i++) {
        const card = document.createElement("div");
        const searchingnames = searchinghtml[i];
        card.innerHTML = `
        <div class="countries-part-cards">
        <a class="link-viewpages" href=/countries/${searchingnames.cca3}>
        <div class="countries-image-parts">
        <img class="country-images" src="${searchingnames.flagURL}">
        </div>
        <div>
        <div class="countries-information-part lightmode"  data-theme = "light">
        <h2 class="information-part-h2">${searchingnames.name}</h2>
        <p class="information-part-p">Population: ${searchingnames.population}</p>
        <p class="filter-region information-part-p">Region: ${searchingnames.region}</p>
        <p class="information-part-p">Capital: ${searchingnames.capital}</p>
        </div>
        </div>
        </a>
        </div>
    `;
        containerhtml.appendChild(card);
      }
    }

    //Darkmode settings
    const btn = document.getElementById("dark-light-mode");
    btn.addEventListener("click", function () {
      if (btn.getAttribute("data-toggle") == "light") {
        const elements = document.querySelectorAll("[data-theme ='light']");
        const bodyelements = document.querySelector(
          "[data-theme ='bodylight']"
        );
        bodyelements.classList.remove("bodylightmode");
        bodyelements.classList.add("bodydarkmode");
        for (let element of elements) {
          element.classList.remove("lightmode");
          element.classList.add("darkmode");
        }
        btn.setAttribute("data-toggle", "dark");
      } else if (btn.getAttribute("data-toggle") == "dark") {
        const elements = document.querySelectorAll("[data-theme ='light']");
        const bodyelements = document.querySelector(
          "[data-theme ='bodylight']"
        );
        bodyelements.classList.remove("bodydarkmode");
        bodyelements.classList.add("bodylightmode");
        for (let element of elements) {
          element.classList.remove("darkmode");
          element.classList.add("lightmode");
        }
        btn.setAttribute("data-toggle", "light");
      }
    });
  } else {
    //country view page ↓↓↓

    //Darkmode settings
    const btn = document.getElementById("dark-light-mode");
    btn.addEventListener("click", function () {
      if (btn.getAttribute("data-toggle") == "light") {
        const elements = document.querySelectorAll("[data-theme ='light']");
        const bodyelements = document.querySelector(
          "[data-theme ='bodylight']"
        );
        bodyelements.classList.remove("bodylightmode");
        bodyelements.classList.add("bodydarkmode");
        for (let element of elements) {
          element.classList.remove("lightmode");
          element.classList.add("darkmode");
        }
        const viewBackButton = document.querySelector(
          "[data-theme = 'viewLight']"
        );
        const borderButton = document.querySelectorAll(".view-darkmode");
        viewBackButton.classList.remove("countryViewButtonlight");
        viewBackButton.classList.add("countryViewButtondark");
        for (let border of borderButton) {
          border.classList.remove("countryViewButtonlight");
          border.classList.add("countryViewButtondark");
        }
        btn.setAttribute("data-toggle", "dark");
      } else if (btn.getAttribute("data-toggle") == "dark") {
        const elements = document.querySelectorAll("[data-theme ='light']");
        const bodyelements = document.querySelector(
          "[data-theme ='bodylight']"
        );
        bodyelements.classList.remove("bodydarkmode");
        bodyelements.classList.add("bodylightmode");
        for (let element of elements) {
          element.classList.remove("darkmode");
          element.classList.add("lightmode");
        }
        const viewBackButton = document.querySelector(
          "[data-theme = 'viewLight']"
        );
        const borderButton = document.querySelectorAll(".view-darkmode");
        viewBackButton.classList.remove("countryViewButtondark");
        viewBackButton.classList.add("countryViewButtonlight");
        for (let border of borderButton) {
          border.classList.remove("countryViewButtondark");
          border.classList.add("countryViewButtonlight");
        }
        btn.setAttribute("data-toggle", "light");
      }
    });
  }
});

//Country's array part

const countries = getCountries();
let countryObject = [];

export const countryArr = [];

countries.map((country) => {
  countryObject = {
    cca3: null,
    name: null,
    nativeName: null,
    population: null,
    region: null,
    subregion: null,
    capital: null,
    domain: null,
    currencies: null,
    languages: "",
    borderCountries: [],
    flagURL: null,
  };

  let languages = "";

  countryObject.cca3 = country.cca3;
  countryObject.name = country.name.common;

  if (country.name.nativeName != null)
    countryObject.nativeName = Object.values(country.name.nativeName)[0].common;
  else countryObject.nativeName = "This country does not have a native name";

  countryObject.population = country.population.toLocaleString();
  countryObject.region = country.region;

  if (country.subregion != null) countryObject.subregion = country.subregion;
  else countryObject.subregion = "This country does not have a sub region";

  if (country.capital != null) countryObject.capital = country.capital[0];
  else countryObject.capital = "This country does not have a capital";

  if (country.tld != null) countryObject.domain = country.tld[0];
  else countryObject.domain = "This country does not have a domain";

  if (country.currencies != null)
    countryObject.currencies = Object.values(country.currencies)[0].name;
  else countryObject.currencies = "This country does not have a currency";

  if (country.languages != null) languages = Object.values(country.languages);
  else countryObject.languages = "This country does not have a language";
  for (let i = 0; i < languages.length; i++) {
    countryObject.languages += languages[i];
    if (i != languages.length - 1) {
      countryObject.languages += ", ";
    }
  }

  countryObject.borderCountries = country.borders;
  countryObject.flagURL = country.flags.png;

  countryArr.push(countryObject);
});
