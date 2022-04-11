import Vacas_Toros from './Vacas_Toros.js'

describe(" ******** JUEGO DE VACAS Y TOROS ******* ", () =>
 {
    // SEGUN HISTORIAS DE USUARIO ->Logica de negocios e Interfaz de Usuario
        // CRITERIOS DE CONFIRMACION
            // TDD -> REFACTORIZACION
                //FUNCIONALIDADES
     // GIT (Commits) -> GIT-HUB (Repositorio) -> GIT-ACTIONS (Pull Request en Main)
    
     let vacas_Toros = new Vacas_Toros();
     let respuesta;
    
    it("1.- Si se ingresa el número 4 como número de caracteres, mostrar el número 4.", () =>
    {
        vacas_Toros.definir_Numero_Caracteres(4);
        respuesta = vacas_Toros.getNumero_Caracteres();
        expect(respuesta).toEqual(4);
    });

    it("2) Si se ingresa el número 0 como número de caracteres, mostrar el mensaje de <Número incorrecto de caracteres. Intente otra vez por favor>.", () => 
    {
        vacas_Toros.definir_Numero_Caracteres(0);
        respuesta = vacas_Toros.getNumero_Caracteres();
        expect(respuesta).toEqual("Número incorrecto de caracteres. Intente otra vez por favor");
    });

    it("3) Si se ingresa el número -1 como número de caracteres, mostrar el mensaje de <Número incorrecto de caracteres. Intente otra vez por favor>.", () => 
    {
        vacas_Toros.definir_Numero_Caracteres(-1);
        respuesta = vacas_Toros.getNumero_Caracteres();
        expect(respuesta).toEqual("Número incorrecto de caracteres. Intente otra vez por favor");
    });

    it("4) Si se ingresa el número 11 como número de caracteres, mostrar el mensaje de <Número incorrecto de caracteres. Intente otra vez por favor>.", () => 
    {
        vacas_Toros.definir_Numero_Caracteres(11);
        respuesta = vacas_Toros.getNumero_Caracteres();
        expect(respuesta).toEqual("Número incorrecto de caracteres. Intente otra vez por favor");
    });

    it("5) Si se ingresa el número 4 como número máximo de intentos, mostrar el número 4.", () =>
    {
        vacas_Toros.definir_Numero_Intentos(5);
        respuesta = vacas_Toros.getNumero_Intentos();
        expect(respuesta).toEqual(5);
    });

    it("6) Si se ingresa el número 0 como número máximo de intentos, mostrar el mensaje de <Número incorrecto de intentos. Intente otra vez por favor>", () => 
    {
        vacas_Toros.definir_Numero_Intentos(0);
        respuesta = vacas_Toros.getNumero_Intentos();
        expect(respuesta).toEqual("Número incorrecto de intentos. Intente otra vez por favor");
    });

    it("7) Si se ingresa el número -1 como número máximo de intentos, mostrar el mensaje de <Número incorrecto de intentos. Intente otra vez por favor>", () =>
    {
        vacas_Toros.definir_Numero_Intentos(-1);
        respuesta = vacas_Toros.getNumero_Intentos();
        expect(respuesta).toEqual("Número incorrecto de intentos. Intente otra vez por favor");
    });

    it("8) Si se selecciona el tipo de código <Números>, mostrar la elección <Números>", () => {
        vacas_Toros.definir_Tipo_Codigo("Numeros");
        respuesta = vacas_Toros.getTipo_Codigo();
        expect(respuesta).toEqual("Numeros");
    });

    it("9) Si se ingresa el código <4 5 7 8>, mostrar <4 5 7 8>", () => 
    {
        vacas_Toros.definir_Configuracion_Total(4, 6, "Numeros");
        vacas_Toros.definir_Codigo_Secreto(['4','5','7','8']);
        respuesta = vacas_Toros.getCodigo_Secreto();
        expect(respuesta).toEqual(['4','5','7','8']);
    });
});
