import VacasToros from './VacasToros.js'
import FuncionesDeJuego from "./funcionesJuegoVacasToros.js"

describe("VACAS Y TOROS", () => 
{

    let vacasToros = new VacasToros();
    let funcionesVacasToros = new FuncionesDeJuego();
    let respuesta;

    it("1) Si se ingresa el número 4 como número de caracteres, mostrar el número 4.", () => {
        vacasToros.definirNumeroDeCaracteres(4);
        respuesta = vacasToros.getNumeroDeCaracteres();
        expect(respuesta).toEqual(4);
    });

    it("2) Si se ingresa el número -1 como número de caracteres, mostrar el mensaje de <Número incorrecto de caracteres. Intente otra vez por favor>.", () => {
        vacasToros.definirNumeroDeCaracteres(-1);
        respuesta = vacasToros.getNumeroDeCaracteres();
        expect(respuesta).toEqual("Número incorrecto de caracteres. Intente otra vez por favor");
    });

    it("3) Si se ingresa el número 4 como número máximo de intentos, mostrar el número 4.", () => {
        vacasToros.definirNumeroDeIntentos(5);
        respuesta = vacasToros.getNumeroDeIntentos();
        expect(respuesta).toEqual(5);
    });

    it("4) Si se ingresa el número -1 como número máximo de intentos, mostrar el mensaje de <Número incorrecto de intentos. Intente otra vez por favor>", () => {
        vacasToros.definirNumeroDeIntentos(-1);
        respuesta = vacasToros.getNumeroDeIntentos();
        expect(respuesta).toEqual("Número incorrecto de intentos. Intente otra vez por favor");
    });

    it("5) Si se ingresa el código <4 5 7 8>, mostrar <4 5 7 8>", () => {
        vacasToros.definirConfiguracionTotal(4, 6, "Numeros", false);
        vacasToros.definirCodigoSecreto(['4','5','7','8']);
        respuesta = vacasToros.getCodigoSecreto();
        expect(respuesta).toEqual(['4','5','7','8']);
    });

    it("6) Si se ingresa el código <1 2>, mostrar el mensaje <Código secreto incompleto>", () => {
        vacasToros.definirConfiguracionTotal(4, 6, "Numeros", false);
        vacasToros.definirCodigoSecreto(['1', '2']);
        respuesta = vacasToros.getCodigoSecreto();
        expect(respuesta).toEqual("Código secreto incompleto");
    });

    it("7) Si se ingresa el código <a b c d>, mostrar <A B C D>", () => {
        vacasToros.definirConfiguracionTotal(4, 6, "Letras", false);
        vacasToros.definirCodigoSecreto(['a','b','c','d']);
        respuesta = vacasToros.getCodigoSecreto();
        expect(respuesta).toEqual(['A','B','C','D']);
    });

    it("8) Si se ingresa el código <A B>, mostrar el mensaje <Código secreto incompleto>", () => {
        vacasToros.definirConfiguracionTotal(4, 6, "Letras", false);
        vacasToros.definirCodigoSecreto(['A', 'B']);
        respuesta = vacasToros.getCodigoSecreto();
        expect(respuesta).toEqual("Código secreto incompleto");
    });

    it("9) Si se ingresa el código <a b 1 2>, mostrar <A B C D>", () => {
        vacasToros.definirConfiguracionTotal(4, 6, "Combinado", false);
        vacasToros.definirCodigoSecreto(['a','b','1','2']);
        respuesta = vacasToros.getCodigoSecreto();
        expect(respuesta).toEqual(['A','B','1','2']);
    });

    it("10) Si se selecciona la opción de <Código automático>, mostrar un código de 4 caracteres con 4 números del <0> al <9> generados aleatoriamente como <4 8 0 6>", () => {
        vacasToros.definirConfiguracionTotal(4, 6, "Numeros", true);
        respuesta = vacasToros.getCodigoSecreto();
        expect(respuesta).toEqual(vacasToros.getCodigoSecreto());
    });

    it("11) Si se selecciona la opción de <Código automático>, mostrar un código de 4 caracteres con letras de la letra <a> a la <z> o números del <0> al <9> generados aleatoriamente como <4 S 8 Y>", () => {
        vacasToros.definirConfiguracionTotal(4, 6, "Combinado", true);
        respuesta = vacasToros.getCodigoSecreto();
        expect(respuesta).toEqual(vacasToros.getCodigoSecreto());
    });

    it("12) Si el código secreto es <p t w c>, el tipo de código es “Letras” y se ingresa como intento el código <1 8 9 0>, mostrar el mensaje <Código secreto inválido. La configuración del juego es de Tipo: Letras>", () => {
        vacasToros.definirConfiguracionTotal(4, 6, "Letras", true);
        vacasToros.definirCodigoSecreto(['P', 'T', 'W', 'C']);
        vacasToros.definirIntento(['1', '8', '9', '0']);
        respuesta = vacasToros.getResultadoDeIntento();
        expect(respuesta).toEqual("Código secreto inválido. La configuración del juego es de Tipo: Letras");
    });

    it("13) Si el código secreto es <7 8 0 1>, el tipo de código es “Combinado” y se ingresa como intento el código <p t 0 c>, mostrar la respuesta como <o o o o>", () => {
        vacasToros.definirConfiguracionTotal(4, 6, "Combinado", true);
        vacasToros.definirCodigoSecreto(['7', '8', '0', '1']);
        vacasToros.definirIntento(['P', 'T', '5', 'C']);
        respuesta = vacasToros.getResultadoDeIntento();
        expect(respuesta).toEqual(['O', 'O', 'O', 'O']);
    });

    it("14) Si el código secreto es <p t w c>, el tipo de código es “Letras” y se ingresa como intento el código <f y o c>, debería mostrar la respuesta como <o o o o>", () => {
        vacasToros.definirConfiguracionTotal(4, 6, "Letras", false);
        vacasToros.definirCodigoSecreto(['P', 'T', 'W', 'C']);
        vacasToros.definirIntento(['W', 'Y', 'O', 'C']);
        respuesta = funcionesVacasToros.generarCodigoVacioYLleno(4,"O");
        expect(respuesta).toEqual(['O', 'O', 'O', 'O']);
    });

    it("15) Si el código secreto es <p t w c>, el tipo de código es “Letras” y se ingresa como intento el código <w y o c>, debería mostrar la respuesta como <o o o o>", () => {
        vacasToros.definirConfiguracionTotal(4, 6, "Letras", false);
        vacasToros.definirCodigoSecreto(['P', 'T', 'W', 'C']);
        vacasToros.definirIntento(['W', 'Y', 'O', 'C']);
        respuesta = funcionesVacasToros.generarCodigoVacioYLleno(4,"O");
        expect(respuesta).toEqual(['O', 'O', 'O', 'O']);
    });

    it("16) Si el código secreto es <p t w c>, el tipo de código es “Letras” y se ingresa como intento el código <p y t t>, debería mostrar la respuesta como <v o v o>", () => {
        vacasToros.definirConfiguracionTotal(4, 6, "Letras", false);
        vacasToros.definirCodigoSecreto(['P', 'T', 'W', 'C']);
        vacasToros.definirIntento(['C', 'Y', 'T', 'T'],);
        respuesta = vacasToros.getResultadoDeIntento();
        expect(respuesta).toEqual(['V', 'O', 'V', 'O']);
    });

    it("17) Si el código secreto es <p t w c>, el tipo de código es “Letras” y se ingresa como intento el código <t c p w>, debería mostrar la respuesta como <v v v v>.", () => {
        vacasToros.definirConfiguracionTotal(4, 6, "Letras", false);
        vacasToros.definirCodigoSecreto(['P', 'T', 'W', 'C']);
        vacasToros.definirIntento(['C', 'P', 'T', 'W'],);
        respuesta = vacasToros.getResultadoDeIntento();
        expect(respuesta).toEqual(['V', 'V', 'V', 'V']);
    });

    it("18) Si el código secreto es <p t w c>, el tipo de código es “Letras” y se ingresa como intento el código <w y o n>, debería mostrar la respuesta como <o o o o>.", () => {
        vacasToros.definirConfiguracionTotal(4, 6, "Letras", false);
        respuesta = funcionesVacasToros.generarCodigoVacioYLleno(4,"O");
        respuesta = funcionesVacasToros.generarToros(['P', 'T', 'W', 'C'],['T', 'Y', 'P', 'P'], respuesta);
        expect(respuesta).toEqual(['O', 'O', 'O', 'O']);
    });

    it("19) Si el código secreto es <p t w c>, el tipo de código es “Letras” y se ingresa como intento el código <p y t w>, debería mostrar la respuesta como <t o t v>.", () => {
        vacasToros.definirConfiguracionTotal(4, 6, "Letras", false);
        vacasToros.definirCodigoSecreto(['P', 'W', 'T', 'C']);
        vacasToros.definirIntento(['P', 'Y', 'T', 'W']);
        respuesta = vacasToros.getResultadoDeIntento();
        expect(respuesta).toEqual(['T', 'O', 'T', 'V']);
    });

    it("20) Si el código secreto es <p t w c>, el tipo de código es “Letras” y se ingresa como intento el código <p t w c>, debería mostrar la respuesta como <t t t t>.", () => {
        vacasToros.definirConfiguracionTotal(4, 6, "Letras", false);
        vacasToros.definirCodigoSecreto(['P', 'W', 'T', 'C']);
        vacasToros.definirIntento(['P', 'W', 'T', 'C']);
        respuesta = vacasToros.getResultadoDeIntento();
        expect(respuesta).toEqual(['T', 'T', 'T', 'T']);
    });

    it("21) Si el adivinador ingresó un intento, debería mostrar <1/10 intentos>", () => {
        vacasToros.definirConfiguracionTotal(4, 6, "Letras", false);
        vacasToros.definirCodigoSecreto(['P', 'W', 'T', 'C']);
        vacasToros.definirIntento(['P', 'W', 'T', 'C']);
        respuesta = vacasToros.getIntentosRealizados();
        expect(respuesta).toEqual("1 / 6 Intentos");
    });

    it("22) Si el código secreto es <p t w c>, el tipo de código es “Letras”, el número de intentos es 10 y se cumple el intento límite, debería mostrar el mensaje <Perdedor>", () => {
        vacasToros.definirConfiguracionTotal(4, 2, "Letras", false);
        vacasToros.definirCodigoSecreto(['P', 'W', 'T', 'C']);
        vacasToros.definirIntento(['P', 'W', 'T', 'L']);
        vacasToros.definirIntento(['P', 'W', 'T', 'L']);
        respuesta = vacasToros.comprobarJuego();
        expect(respuesta).toEqual("Perdedor");
    });

     //         EXAMEN

     it("ej.1. Si el código secreto es <1 2 3 4>, el tipo de código es “numeros” y se ingresa como intento el código <2 5 7 8>, debería mostrar la respuesta como <# o o o>, sólo aplicable en la primera posición", () => {
        vacasToros.definirConfiguracionTotal(4, 6, "Numeros", false);
        respuesta = funcionesVacasToros.generarCodigoVacioYLleno(4,"O");
        respuesta = funcionesVacasToros.generarTerneros(['1', '2', '3', '4'], ['2', '5', '6', '7'], respuesta);
        expect(respuesta).toEqual(['#', 'O', 'O', 'O']);
    });
});
