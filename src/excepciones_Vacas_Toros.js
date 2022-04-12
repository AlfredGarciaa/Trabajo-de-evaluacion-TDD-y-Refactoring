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
        for (var i = 0; i < numero_Caracteres; i++)
        {
            if(this.Caracter_Vacio(codigo_Secreto[i]))
            {
                return false;
            }
        }
        return true;
    }

    Caracter_Vacio(caracter)
    {
        return (caracter == "" || caracter == undefined);
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

    Caracter_Combinado(caracter)
    {
        return (this.Caracter_Letra(caracter) || this.Caracter_Numerico(caracter));
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
            return this.Caracter_Combinado(caracter);
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

    controlar_Codigo_Secreto(codigo_Secreto, numero_Caracteres, tipo_Codigo)
    {  
        if(!this.Codigo_Secreto_Completo(codigo_Secreto, numero_Caracteres))
        {
            return "Código secreto incompleto";
        }
        return this.controlar_Tipo_Caracteres_Codigo_Secreto(codigo_Secreto, numero_Caracteres, tipo_Codigo);
    }

    controlar_Intento_Codigo_Secreto(intento_Codigo, numero_Caracteres, tipo_Codigo, resultado_Codigo)
    {
        let control_Error;
        if(!this.Codigo_Secreto_Completo(intento_Codigo, numero_Caracteres))
        {
            return "Código secreto incompleto";
        }
        control_Error = this.controlar_Tipo_Caracteres_Codigo_Secreto(intento_Codigo, numero_Caracteres, tipo_Codigo)
        if(typeof(control_Error) == "string")
        {
            return control_Error;
        }
        return resultado_Codigo;
    }
}

export default Excepciones_Vacas_Toros;
