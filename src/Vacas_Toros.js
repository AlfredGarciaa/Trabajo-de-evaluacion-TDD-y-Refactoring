let numero_Caracteres;
let numero_Intentos;
const limite_Inferior = 1;
const limite_Superior = 10;

function getNumero_Caracteres()
{
    return numero_Caracteres;
}

function definir_Numero_Caracteres(numero_Car)
{
    numero_Caracteres = numero_Car;
    controlar_Cantidad_Caracteres();
}
  
function controlar_Cantidad_Caracteres()
{
  if ((numero_Caracteres < limite_Inferior) || (numero_Caracteres > limite_Superior))
  {
    numero_Caracteres = "Número incorrecto de caracteres. Intente otra vez por favor";
  }
}

function definir_Numero_Intentos(numero_Int)
{
  numero_Intentos = numero_Int;
}

function getNumero_Intentos()
{
  return numero_Intentos;
}

export {definir_Numero_Caracteres, getNumero_Caracteres, definir_Numero_Intentos, getNumero_Intentos};
