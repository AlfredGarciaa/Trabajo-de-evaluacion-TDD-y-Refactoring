import Vacas_Toros from './Vacas_Toros.js'
import Excepciones_Vacas_Toros from './excepciones_Vacas_Toros.js';

const form = document.querySelector("#vista-1-form");
const div = document.querySelector("#visualizaciones");
const inputNumero_Caracteres = document.querySelector("#numero-caracteres");
const inputNumero_Intentos = document.querySelector("#numero-intentos");

let vacas_Toros = new Vacas_Toros();
let excepciones_Vacas_Toros = new Excepciones_Vacas_Toros();

form.addEventListener("submit", (event) => {
  event.preventDefault();

  let numero_Caracteres = inputNumero_Caracteres.value;
  let numero_Intentos = inputNumero_Intentos.value;

  vacas_Toros.definir_Numero_Caracteres(numero_Caracteres);
  vacas_Toros.definir_Numero_Intentos(numero_Intentos);

  div.innerHTML =  `<p> ${vacas_Toros.getNumero_Caracteres()} </p>
                    <p> ${vacas_Toros.getNumero_Intentos()} </p>`;
});
