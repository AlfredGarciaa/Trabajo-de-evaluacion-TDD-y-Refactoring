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

    Caracter_Numerico(caracter)
    {
        let numero = parseInt(caracter);
        if(isNaN(numero))
        {
            return false;
        }
        return true;
    }

    controlar_Codigo_Secreto_Numero(codigo_Secreto, numero_Caracteres)
    {
        let caracter_Numerico;
        for(var i = 0; i < numero_Caracteres; i++)
        {
            caracter_Numerico = this.Caracter_Numerico(codigo_Secreto[i]);
            console.log(caracter_Numerico);
            if(!caracter_Numerico)
            {
                return "Código secreto inválido. La configuración del juego es de Tipo: Números";
            }
        }
        return codigo_Secreto;
    }
}

export default Excepciones_Vacas_Toros;
