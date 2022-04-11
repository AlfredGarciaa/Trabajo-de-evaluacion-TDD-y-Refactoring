let numero_Caracteres;
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

export {definir_Numero_Caracteres, getNumero_Caracteres};
