import {definir_Numero_Caracteres, getNumero_Caracteres} from './Vacas_Toros.js'

describe(" ******** JUEGO DE VACAS Y TOROS ******* ", () =>
 {
    it("1.- Si se ingresa el número 4 como número de caracteres, mostrar el número 4.", () =>
    {
        definir_Numero_Caracteres(4);
        let respuesta = getNumero_Caracteres();
        expect(respuesta).toEqual(4);
    });

    it("2) Si se ingresa el número 0 como número de caracteres, mostrar el mensaje de <Número incorrecto de caracteres. Intente otra vez por favor>.", () => 
    {
        definir_Numero_Caracteres(0);
        let respuesta = getNumero_Caracteres();
        expect(respuesta).toEqual("Número incorrecto de caracteres. Intente otra vez por favor");
    });

    it("3) Si se ingresa el número -1 como número de caracteres, mostrar el mensaje de <Número incorrecto de caracteres. Intente otra vez por favor>.", () => 
    {
        definir_Numero_Caracteres(-1);
        let respuesta = getNumero_Caracteres();
        expect(respuesta).toEqual("Número incorrecto de caracteres. Intente otra vez por favor");
    });
});