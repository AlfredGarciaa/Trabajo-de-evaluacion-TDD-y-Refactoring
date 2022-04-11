class Vacas_Toros
{
  constructor()
  {
      this.numero_Caracteres;
      this.numero_Intentos;
      this.limite_Inferior = 1;
      this.limite_Superior = 10;
  }

  definir_Numero_Caracteres(numero_Car)
  {
      this.numero_Caracteres = numero_Car;
      this.controlar_Cantidad_Caracteres();
  }

  controlar_Cantidad_Caracteres()
  {
      if ((this.numero_Caracteres < this.limite_Inferior) || (this.numero_Caracteres > this.limite_Superior))
      {
          this.numero_Caracteres = "Número incorrecto de caracteres. Intente otra vez por favor";
      }
  }

  definir_Numero_Intentos(numero_Int)
  {
      this.numero_Intentos = numero_Int;
  }

  getNumero_Caracteres()
  {
      return this.numero_Caracteres;
  }

  getNumero_Intentos(){
      return this.numero_Intentos;
  }
}

export default Vacas_Toros;
