import Vacas_Toros from './Vacas_Toros.js'
import Excepciones_Vacas_Toros from './excepciones_Vacas_Toros.js';

const formConfiguracion = document.querySelector("#vista-1-form");
const div = document.querySelector("#visualizaciones");
const formCodigo_Secreto = document.querySelector("#codigo-secreto-form");

const inputNumero_Caracteres = document.querySelector("#numero-caracteres");
const inputNumero_Intentos = document.querySelector("#numero-intentos");
const inputTipo_Codigo = document.querySelector("#tipo-codigo");

let vacas_Toros = new Vacas_Toros();
let codigo_Secreto = [];

function mostrar_FormCodigo_Secreto(numero_Car)
{
  let formText = `<label for="codigo-1">Código secreto:</label>`;
  for(var i=0; i<numero_Car; i++)
  {
    formText += `<input type="text" id="caracter-${i}" size="1" maxlength="1">`;
  }
  formText += `<input type="submit" value="Jugar"/>   `;

  formCodigo_Secreto.innerHTML = formText;
}

function mostrar_FormCodigo_Secreto(numero_Car)
{
  let formText = `<label for="codigo-1">Código secreto: </label>`;
  for(var i=0; i<numero_Car; i++)
  {
    formText += `<input type="text" class="caracter" size="1" maxlength="1">`;
  }
  formText += `<input type="submit" value="Jugar"/>   `;
  formCodigo_Secreto.innerHTML = formText;
}

formConfiguracion.addEvent_Listener("submit", (event) => 
{
  event.prevent_Default();

  let numero_Caracteres = inputNumero_Caracteres.value;
  let numero_Intentos = inputNumero_Intentos.value;
  let tipo_Codigo = inputTipo_Codigo.value;

  vacas_Toros.definir_Configuracion_Total(numero_Caracteres, numero_Intentos, tipo_Codigo);
  mostrar_FormCodigo_Secreto(numero_Caracteres);
  div.innerHTML = ``;
});

formCodigo_Secreto.addEvent_Listener("submit", (event) => 
{
  event.prevent_Default();
  codigo_Secreto = [];
  let lista_Caracteres = document.querySelectorAll(".caracter");
  for(var i = 0; i < lista_Caracteres.length; i++)
  {
    codigo_Secreto.push(lista_Caracteres[i].value);
  }
  vacas_Toros.definir_Codigo_Secreto(codigo_Secreto);
  div.innerHTML = `<p> ${vacas_Toros.getCodigo_Secreto()}</p>`;
});
