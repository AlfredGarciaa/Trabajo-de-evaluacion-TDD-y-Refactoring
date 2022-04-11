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
}

export default Excepciones_Vacas_Toros;
