import Funciones_Juego from "./funciones_Juego_Vacas_Toros.js";
import Excepciones_Vacas_Toros from "./excepciones_Vacas_Toros.js";

class Vacas_Toros
{
  constructor()
  {
    this.numero_Caracteres;
    this.numero_Intentos;
    this.tipo_Codigo;
    this.generar_Codigo_Automatico;
    this.codigo_Secreto = [];
    this.resultado_Intento = [];
    this.Excepciones = new Excepciones_Vacas_Toros();
    this.Funciones_Juego = new Funciones_Juego();
  }

  definir_Numero_Caracteres(numero_Car)
  {
    numero_Car = this.Excepciones.controlar_Cantidad_Caracteres(numero_Car);
    this.numero_Caracteres = numero_Car;
  }
  
  definir_Generacion_Codigo_Automatico(gen_Automatico)
  {
    this.generar_Codigo_Automatico = gen_Automatico;
  }

  definir_Codigo_Secreto_Default()
  {
    this.codigo_Secreto = this.Funciones_Juego.generar_Codigo_Secreto_Default(this.numero_Caracteres, this.tipo_Codigo, this.generar_Codigo_Automatico);
  }

  definir_Intento(intento_Codigo)
  {
    this.resultado_Intento = this.Funciones_Juego.generar_Resultado_Intento(this.numero_Caracteres);
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
    codigo_Sec = this.Funciones_Juego.convertir_Codigo_Secreto_Mayusculas(codigo_Sec);
    codigo_Sec = this.Excepciones.controlar_Codigo_Secreto_Numero(codigo_Sec, this.numero_Caracteres, this.tipo_Codigo); 
    this.codigo_Secreto = codigo_Sec;
  }

  definir_Configuracion_Total(nro_Caracteres, numero_Int, tip_Codigo, gen_Automatico)
  {
    this.definir_Numero_Caracteres(nro_Caracteres);
    this.definir_Numero_Intentos(numero_Int);
    this.definir_Tipo_Codigo(tip_Codigo);
    this.definir_Generacion_Codigo_Automatico(gen_Automatico);
    this.definir_Codigo_Secreto_Default();
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

  getResultado_Intento()
  {
    return this.resultado_Intento;
  }
}

export default Vacas_Toros;
