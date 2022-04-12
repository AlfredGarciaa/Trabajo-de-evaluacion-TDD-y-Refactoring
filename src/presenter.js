import Vacas_Toros from './Vacas_Toros.js'
import Excepciones_Vacas_Toros from './excepciones_Vacas_Toros.js';

const formConfiguracion = document.querySelector("#vista-1-form");
const div = document.querySelector("#visualizaciones");
const formCodigo_Secreto = document.querySelector("#codigo-secreto-form");

const inputNumero_Caracteres = document.querySelector("#numero-caracteres");
const inputNumero_Intentos = document.querySelector("#numero-intentos");
const inputTipo_Codigo = document.querySelector("#tipo-codigo");
const inputCodigo_Automatico = document.querySelector("#automatico");

let vacas_Toros = new Vacas_Toros();
let codigo_Secreto = [];

function mostrar_FormCodigo_Secreto(numero_Car)
{
  let codigo_Secreto_Default = vacas_Toros.getCodigo_Secreto();

  let formText = `<label for="codigo-1">Código secreto: </label>`;
  for(var i=0; i<numero_Car; i++)
  {
    formText += `<input type="text" class="caracter" size="1" maxlength="1" value="${codigo_Secreto_Default[i]}">`;
  }
  formText += `<input type="submit" value="Jugar"/>   `;
  formCodigo_Secreto.innerHTML = formText;
}

function limpiar_Vista(vista)
{
  switch(vista)
  {
    case 1: {formCodigo_Secreto.innerHTML = ""; formConfiguracion.innerHTML = ""; div.innerHTML = ""; break;}
    case 2: {}
    case 3: {}
    case 4: {}
  }
}

formConfiguracion.addEvent_Listener("submit", (event) => 
{
  event.prevent_Default();

  let numero_Caracteres = inputNumero_Caracteres.value;
  let numero_Intentos = inputNumero_Intentos.value;
  let tipo_Codigo = inputTipo_Codigo.value;
  let codigo_Automatico = inputCodigo_Automatico.checked;

  vacas_Toros.definir_Configuracion_Total(numero_Caracteres, numero_Intentos, tipo_Codigo, codigo_Automatico);
  mostrar_FormCodigo_Secreto(numero_Caracteres);
  div.innerHTML = "";
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

  let codigo_Secreto_Final = vacas_Toros.getCodigo_Secreto();
  if(typeof(codigo_Secreto_Final) == "string")
  {
    div.innerHTML = `<p> CÓDIGO:  ${codigo_Secreto_Final}</p>`;
  }
  else
  {
    limpiarVista(1);
  }
  //div.innerHTML = `<p> CÓDIGO:  ${codigoSecretoFinal}</p>`;
});
