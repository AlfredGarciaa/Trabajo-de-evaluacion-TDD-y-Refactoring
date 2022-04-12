class Funciones_Juego
{
    constructor()
    {
        this.codigo_Secreto_Automatico = [];
        this.resultado_Intento = [];
    }

    convertir_Codigo_Secreto_Mayusculas(codigo_Sec)
    {
      for(var i = 0; i < codigo_Sec.length; i++)
      {
        codigo_Sec[i] = codigo_Sec[i].toString().toUpperCase();
      }
      return codigo_Sec;
    }

    generar_Caracter_Numerico()
    {
        return (Math.floor(Math.random() * 10)).toString();
    }

    generar_Caracter_Letra_Numero()
    {
        let letra_Numero = Math.floor(Math.random() * 2);
        if(letra_Numero == 0)
        {
            return this.generar_Caracter_Letra();
        }
        return this.generar_Caracter_Numerico();
    }

    generar_Resultado_Intento(numero_Caracteres)
    {
        this.resultado_Intento = this.generar_Codigo_Vacio_Y_Lleno(numero_Caracteres, "O");
        return this.resultado_Intento;
    }

    generar_Caracter_Letra()
    {
        const alphabet = "abcdefghijklmnopqrstuvwxyz";
        return alphabet[Math.floor(Math.random() * alphabet.length)];
    }

    generar_Codigo_Secreto_Aut(numero_Caracteres, tipo_Codigo)
    {
        this.codigo_Secreto_Automatico = [];
        let caracter;
        for(var i = 0; i < numero_Caracteres; i++)
        {
            switch(tipo_Codigo)
            {
                case "Numeros": {caracter = this.generar_Caracter_Numerico();break;}
                case "Letras": {caracter = this.generar_Caracter_Letra();break;}
                case "Combinado": {caracter = this.generar_Caracter_Letra_Numero();break;}
            }
            this.codigo_Secreto_Automatico.push(caracter);
        }
        return this.codigo_Secreto_Automatico;
    }

    generar_Codigo_Vacio_Y_Lleno(numero_Caracteres, caracter)
    {
        let codigo_Auxiliar = [];
        for(var i = 0; i < numero_Caracteres; i++)
        {
            codigo_Auxiliar.push(caracter);
        }
        return codigo_Auxiliar;
    }

    generar_Codigo_Secreto_Default(numero_Caracteres, tipo_Codigo, generar_Cod_Aut)
    {
        if(generar_Cod_Aut)
        {
            return this.generar_Codigo_Secreto_Aut(numero_Caracteres, tipo_Codigo);
        }
        else
        {
            this.codigo_Secreto_Automatico = this.generar_Codigo_Vacio_Y_Lleno(numero_Caracteres, "")
            return this.codigo_Secreto_Automatico;
        }
    }
}

export default Funciones_Juego;