import {definir_Numero_Caracteres, getNumero_Caracteres, definir_Numero_Intentos, getNumero_Intentos} from './Vacas_Toros.js'

describe(" ******** JUEGO DE VACAS Y TOROS ******* ", () =>
 {
    // SEGUN HISTORIAS DE USUARIO ->Logica de negocios e Interfaz de Usuario
        // CRITERIOS DE CONFIRMACION
            // TDD -> REFACTORIZACION
                //FUNCIONALIDADES
     // GIT (Commits) -> GIT-HUB (Repositorio) -> GIT-ACTIONS (Pull Request en Main)
    let respuesta;
    
    it("1.- Si se ingresa el número 4 como número de caracteres, mostrar el número 4.", () =>
    {
        definir_Numero_Caracteres(4);
        respuesta = getNumero_Caracteres();
        expect(respuesta).toEqual(4);
    });

    it("2) Si se ingresa el número 0 como número de caracteres, mostrar el mensaje de <Número incorrecto de caracteres. Intente otra vez por favor>.", () => 
    {
        definir_Numero_Caracteres(0);
        respuesta = getNumero_Caracteres();
        expect(respuesta).toEqual("Número incorrecto de caracteres. Intente otra vez por favor");
    });

    it("3) Si se ingresa el número -1 como número de caracteres, mostrar el mensaje de <Número incorrecto de caracteres. Intente otra vez por favor>.", () => 
    {
        definir_Numero_Caracteres(-1);
        respuesta = getNumero_Caracteres();
        expect(respuesta).toEqual("Número incorrecto de caracteres. Intente otra vez por favor");
    });

    it("4) Si se ingresa el número 11 como número de caracteres, mostrar el mensaje de <Número incorrecto de caracteres. Intente otra vez por favor>.", () => 
    {
        definir_Numero_Caracteres(11);
        respuesta = getNumero_Caracteres();
        expect(respuesta).toEqual("Número incorrecto de caracteres. Intente otra vez por favor");
    });

    it("5) Si se ingresa el número 4 como número máximo de intentos, mostrar el número 4.", () =>
     {
        definir_Numero_Intentos(5);
        respuesta = getNumero_Intentos();
        expect(respuesta).toEqual(5);
    });
});