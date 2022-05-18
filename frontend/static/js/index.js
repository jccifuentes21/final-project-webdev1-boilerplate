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
 
// console.log(countries);

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