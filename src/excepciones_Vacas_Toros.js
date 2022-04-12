class Excepciones_Vacas_Toros
{
    constructor()
    {
        this.limite_Inferior = 1;
        this.limite_Superior = 10;
    }

    controlar_Cantidad_Caracteres(numero_Caracteres)
    {
        if ((numero_Caracteres < this.limite_Inferior) || (numero_Caracteres > this.limite_Superior))
        {
            numero_Caracteres = "Número incorrecto de caracteres. Intente otra vez por favor";
        }
        return numero_Caracteres;
    }

    controlar_Cantidad_Intentos(numero_Intentos)
    {
        if (numero_Intentos < this.limite_Inferior)
        {
            numero_Intentos = "Número incorrecto de intentos. Intente otra vez por favor";
        }
        return numero_Intentos;
    }

    Codigo_Secreto_Completo(codigo_Secreto, numero_Caracteres)
    {
        return codigo_Secreto.length == numero_Caracteres;
    }

    Caracter_Numerico(caracter)
    {
        let numero = parseInt(caracter);
        return !isNaN(numero);
    }
    
    Caracter_Letra(caracter)
    {
        let ascii = caracter.toUpperCase().charCodeAt(0);
        return ((ascii > 64) && (ascii < 91));
    }

    Numero_O_Letra(caracter, tipo_Cod)
    {
        if(tipo_Cod == "Numeros")
        {
            return this.Caracter_Numerico(caracter);
        }
        else
        {
            if(tipo_Cod == "Letras")
            {
                return this.Caracter_Letra(caracter);
            }
            return true;
        }
    }
    controlar_Tipo_Caracteres_Codigo_Secreto(codigo_Secreto, numero_Caracteres, tipo_Codigo)
    {
        let numero_Letra;
        for(var i = 0; i < numero_Caracteres; i++)
        {
            numero_Letra = this.Numero_O_Letra(codigo_Secreto[i], tipo_Codigo);
            if(!numero_Letra)
            {
                return `Código secreto inválido. La configuración del juego es de Tipo: ${tipo_Codigo}`;
            }
        }
        return codigo_Secreto;
    }

    controlar_Codigo_Secreto_Numero(codigo_Secreto, numero_Caracteres, tipo_Codigo)
    {  
        if(!this.Codigo_Secreto_Completo(codigo_Secreto, numero_Caracteres))
        {
            return "Código secreto incompleto";
        }
        return this.controlar_Tipo_Caracteres_Codigo_Secreto(codigo_Secreto, numero_Caracteres, tipo_Codigo);
    }
}

export default Excepciones_Vacas_Toros;
