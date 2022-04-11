import Vacas_Toros from './Vacas_Toros'

const form = document.querySelector("#vista-1-form");
const div = document.querySelector("#visualizaciones");
const inputNumero_Caracteres = document.querySelector("#numero-caracteres");
let vacas_Toros = new Vacas_Toros();

form.addEventListener("submit", (event) => {
  event.preventDefault();

  let numero_Caracteres = inputNumero_Caracteres.value;
  vacas_Toros.definir_Numero_Caracteres(numero_Caracteres);

  div.innerHTML = "<p>" + vacas_Toros.getNumero_Caracteres() + "</p>";
});
