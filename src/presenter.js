import {definir_Numero_Caracteres, getNumero_Caracteres} from './Vacas_Toros.js'

const form = document.querySelector("#vista-1-form");
const div = document.querySelector("#visualizaciones");
const inputNumero_Caracteres = document.querySelector("#numero-caracteres");

form.addEventListener("submit", (event) => {
  event.preventDefault();

  let numero_Caracteres = inputNumero_Caracteres.value;
  definir_Numero_Caracteres(numero_Caracteres);

  div.innerHTML = "<p>" + getNumero_Caracteres() + "</p>";
});