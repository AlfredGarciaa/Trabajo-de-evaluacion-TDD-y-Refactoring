import definir_Numero_Caracteres from './Vacas_Toros.js'

describe(" ******** JUEGO DE VACAS Y TOROS ******* ", () =>
 {
    it("1.- Si se ingresa el número 4 como número de caracteres, mostrar el número 4.", () =>
    {
        let respuesta = definir_Numero_Caracteres(4);
        expect(respuesta).toEqual(4);
    });
});