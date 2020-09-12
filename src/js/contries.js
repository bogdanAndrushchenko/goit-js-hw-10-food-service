import templates from "../templates/countries.hbs";
import countries from "./countries.json";
console.log(templates);

const markup = templates(countries);

const galeryRef = document.querySelector(".js-gallery");
galeryRef.insertAdjacentHTML('beforeend', markup);
console.log(markup);
