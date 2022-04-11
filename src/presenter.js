import Vacas_Toros from './Vacas_Toros.js'
import Excepciones_Vacas_Toros from './excepciones_Vacas_Toros.js';

const form = document.querySelector("#vista-1-form");
const div = document.querySelector("#visualizaciones");
const formCodigo_Secreto = document.querySelector("#codigo-secreto-form");

const inputNumero_Caracteres = document.querySelector("#numero-caracteres");
const inputNumero_Intentos = document.querySelector("#numero-intentos");
const inputTipo_Codigo = document.querySelector("#tipo-codigo");

let vacas_Toros = new Vacas_Toros();
let excepciones_Vacas_Toros = new Excepciones_Vacas_Toros();

form.addEventListener("submit", (event) => 
{
  event.preventDefault();

  let numero_Caracteres = inputNumero_Caracteres.value;
  let numero_Intentos = inputNumero_Intentos.value;
  let tipo_Codigo = inputTipo_Codigo.value;

  vacas_Toros.definir_Configuracion_Total(numero_Caracteres, numero_Intentos, tipo_Codigo);

  mostrar_FormCodigo_Secreto(numero_Caracteres);
});

function mostrar_FormCodigo_Secreto(numero_Car)
{
  let formText = `<label for="codigo-1">Código secreto:</label>`;
  for(var i=0; i<numero_Car; i++)
  {
    formText += '<input type="text" id="caracter-${i}" size="1" maxlength="1">';
  }
  formText += `<input type="submit" value="Jugar"/>`;
  formCodigo_Secreto.innerHTML = formText;
}
