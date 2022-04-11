let numero_Caracteres;

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
  if (numero_Caracteres == 0)
  {
    numero_Caracteres = "Número incorrecto de caracteres. Intente otra vez por favor";
  }
}

export {definir_Numero_Caracteres, getNumero_Caracteres};
