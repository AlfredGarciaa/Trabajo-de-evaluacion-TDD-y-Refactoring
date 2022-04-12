class Funciones_Juego
{
    constructor()
    {
        this.codigo_Secreto_Automatico = [];
    }

    convertir_Codigo_Secreto_Mayusculas(codigo_Sec)
    {
      for(var i = 0; i < codigo_Sec.length; i++)
      {
        codigo_Sec[i] = codigo_Sec[i].toString().toUpperCase();
      }
      return codigo_Sec;
    }

    generar_Codigo_Vacio(numero_Caracteres)
    {
        this.codigo_Secreto_Automatico = [];
        for(var i = 0; i < numero_Caracteres; i++)
        {
            this.codigo_Secreto_Automatico.push("");
        }
        return this.codigo_Secreto_Automatico;
    }

    generar_Codigo_Numeros(numero_Caracteres)
    {
        this.codigo_Secreto_Automatico = [];
        for(var i = 0; i < numero_Caracteres; i++)
        {
            this.codigo_Secreto_Automatico.push(this.generar_Caracter_Numerico());
        }
        return this.codigo_Secreto_Automatico;
    }

    generar_Caracter_Numerico()
    {
        return Math.floor(Math.random() * 10);
    }
}

export default Funciones_Juego;