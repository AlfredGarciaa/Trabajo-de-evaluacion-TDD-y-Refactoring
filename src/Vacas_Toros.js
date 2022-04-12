import Excepciones_Vacas_Toros from "./excepciones_Vacas_Toros.js";

class Vacas_Toros
{
  constructor()
  {
    this.numero_Caracteres;
    this.numero_Intentos;
    this.tipo_Codigo;
    this.codigo_Secreto = [];
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

  definir_Tipo_Codigo(tipo_Cod)
  {
    this.tipo_Codigo = tipo_Cod;
  } 

  definir_Codigo_Secreto(codigo_Sec)
  {
    codigo_Sec = this.convertir_Codigo_Secreto_Mayusculas(codigo_Sec);
    codigo_Sec = this.Excepciones.controlar_Codigo_Secreto_Numero(codigo_Sec, this.numero_Caracteres, this.tipo_Codigo);
    this.codigo_Secreto = codigo_Sec; 
  }

  definir_Configuracion_Total(nro_Caracteres, numero_Int, tip_Codigo)
  {
    this.definir_Numero_Caracteres(nro_Caracteres);
    this.definir_Numero_Intentos(numero_Int);
    this.definir_Tipo_Codigo(tip_Codigo);
  }

  convertir_Codigo_Secreto_Mayusculas(codigo_Sec)
  {
    for(var i = 0; i < codigo_Sec.length; i++)
    {
      codigo_Sec[i] = codigo_Sec[i].toString().toUpperCase();
    }
    return codigo_Sec;
  }

  getNumero_Caracteres()
  {
    return this.numero_Caracteres;
  }

  getNumero_Intentos()
  {
    return this.numero_Intentos;
  }

  getTipo_Codigo()
  {
    return this.tipo_Codigo;
  }

  getCodigo_Secreto()
  {
    return this.codigo_Secreto;
  }
}

export default Vacas_Toros;
