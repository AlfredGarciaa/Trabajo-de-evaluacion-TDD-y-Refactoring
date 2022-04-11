import Excepciones_Vacas_Toros from "./excepciones_Vacas_Toros";

class Vacas_Toros
{
  constructor()
  {
    this.numero_Caracteres;
    this.numero_Intentos;
    this.Excepciones = new Excepciones_Vacas_Toros();
  }

  definir_Numero_Caracteres(numero_Car)
  {
    numero_Car = this.Excepciones.controlar_Cantidad_Caracteres(numero_Car);
    this.numero_Caracteres = numero_Car;
  }

  definir_Numero_Intentos(numero_Int)
  {
    numero_Int = this.Excepciones.controlar_Cantidad_Intentos(numero_Int);
    this.numero_Intentos = numero_Int;
  }

  getNumero_Caracteres()
  {
    return this.numero_Caracteres;
  }

  getNumero_Intentos()
  {
    return this.numero_Intentos;
  }
}

export default Vacas_Toros;
