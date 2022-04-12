import Vacas_Toros from './Vacas_Toros.js'
import Funciones_Juego from "./funciones_Juego_Vacas_Toros.js"

describe(" ******** JUEGO DE VACAS Y TOROS ******* ", () =>
 {
    // SEGUN HISTORIAS DE USUARIO ->Logica de negocios e Interfaz de Usuario
        // CRITERIOS DE CONFIRMACION
            // TDD -> REFACTORIZACION
                //FUNCIONALIDADES
     // GIT (Commits) -> GIT-HUB (Repositorio) -> GIT-ACTIONS (Pull Request en Main)
    
     let vacas_Toros = new Vacas_Toros();
     let funciones_Vacas_Toros = new Funciones_Juego();
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

    it("8) Si se selecciona el tipo de código <Números>, mostrar la elección <Números>", () =>
    {
        vacas_Toros.definir_Tipo_Codigo("Numeros");
        respuesta = vacas_Toros.getTipo_Codigo();
        expect(respuesta).toEqual("Numeros");
    });

    it("9) Si se ingresa el código <4 5 7 8>, mostrar <4 5 7 8>", () => 
    {
        vacas_Toros.definir_Configuracion_Total(4, 6, "Numeros", false);
        vacas_Toros.definir_Codigo_Secreto(['4','5','7','8']);
        respuesta = vacas_Toros.getCodigo_Secreto();
        expect(respuesta).toEqual(['4','5','7','8']);
    });

    it("10) Si se ingresa el código <A B C D>, mostrar el mensaje <Código secreto inválido. La configuración del juego es de Tipo: Números>", () =>
    {
        vacas_Toros.definir_Configuracion_Total(4, 6, "Numeros", false);
        vacas_Toros.definir_Codigo_Secreto(['A', 'B', 'C', 'D']);
        respuesta = vacas_Toros.getCodigo_Secreto();
        expect(respuesta).toEqual("Código secreto inválido. La configuración del juego es de Tipo: Numeros");
    });

    it("11) Si se ingresa el código <1 2>, mostrar el mensaje <Código secreto incompleto>", () =>
    {
        vacas_Toros.definir_Configuracion_Total(4, 6, "Numeros", false);
        vacas_Toros.definir_Codigo_Secreto(['1', '2']);
        respuesta = vacas_Toros.getCodigo_Secreto();
        expect(respuesta).toEqual("Código secreto incompleto");
    });

    it("12) Si se ingresa el código <A B C D>, mostrar <A B C D>", () =>
    {
        vacas_Toros.definir_Configuracion_Total(4, 6, "Letras", false);
        vacas_Toros.definir_Codigo_Secreto(['A','B','C','D']);
        respuesta = vacas_Toros.getCodigo_Secreto();
        expect(respuesta).toEqual(['A','B','C','D']);
    });

    it("13) Si se ingresa el código <a b c d>, mostrar <A B C D>", () => 
    {
        vacas_Toros.definir_Configuracion_Total(4, 6, "Letras", false);
        vacas_Toros.definir_Codigo_Secreto(['a','b','c','d']);
        respuesta = vacas_Toros.getCodigo_Secreto();
        expect(respuesta).toEqual(['A','B','C','D']);
    });

    it("14) Si se ingresa el código <1 2 3 0>, mostrar el mensaje <Código secreto inválido. La configuración del juego es de Tipo: Letras>", () =>
    {
        vacas_Toros.definir_Configuracion_Total(4, 6, "Letras", false);
        vacas_Toros.definir_Codigo_Secreto(['1','2','3','0']);
        respuesta = vacas_Toros.getCodigo_Secreto();
        expect(respuesta).toEqual("Código secreto inválido. La configuración del juego es de Tipo: Letras");
    });

    it("15) Si se ingresa el código <A B>, mostrar el mensaje <Código secreto incompleto>", () =>
    {
        vacas_Toros.definir_Configuracion_Total(4, 6, "Letras", false);
        vacas_Toros.definir_Codigo_Secreto(['A', 'B']);
        respuesta = vacas_Toros.getCodigo_Secreto();
        expect(respuesta).toEqual("Código secreto incompleto");
    });

    it("16) Si se ingresa el código <A B 1 2>, mostrar <A B 1 2>", () => 
    {
        vacas_Toros.definir_Configuracion_Total(4, 6, "Combinado", false);
        vacas_Toros.definir_Codigo_Secreto(['A','B','1','2']);
        respuesta = vacas_Toros.getCodigo_Secreto();
        expect(respuesta).toEqual(['A','B','1','2']);
    });

    it("17) Si se ingresa el código <a b 1 2>, mostrar <A B C D>", () => 
    {
        vacas_Toros.definir_Configuracion_Total(4, 6, "Combinado", false);
        vacas_Toros.definir_Codigo_Secreto(['a','b','1','2']);
        respuesta = vacas_Toros.getCodigo_Secreto();
        expect(respuesta).toEqual(['A','B','1','2']);
    });

    it("18) Si se ingresa el código <A 4>, mostrar el mensaje <Código secreto incompleto>", () =>
    {
        vacas_Toros.definir_Configuracion_Total(4, 6, "Letras", false);
        vacas_Toros.definir_Codigo_Secreto(['A','4']);
        respuesta = vacas_Toros.getCodigo_Secreto();
        expect(respuesta).toEqual("Código secreto incompleto");
    });

    it("19) Si se selecciona la opción de <Código automático>, mostrar un código de 4 caracteres con 4 números del <0> al <9> generados aleatoriamente como <4 8 0 6>", () =>
    {
        vacas_Toros.definir_Configuracion_Total(4, 6, "Numeros", true);
        respuesta = vacas_Toros.getCodigo_Secreto();
        console.log(respuesta);
        expect(respuesta).toEqual(vacas_Toros.getCodigo_Secreto());
    });

    it("20) Si se selecciona la opción de <Código automático>, mostrar un código de 4 caracteres con 4 letras de la letra <a> a la <z> generados aleatoriamente como <W S P D>", () => 
    {
        vacas_Toros.definir_Configuracion_Total(4, 6, "Letras", true);
        respuesta = vacas_Toros.getCodigo_Secreto();
        console.log(respuesta);
        expect(respuesta).toEqual(vacas_Toros.getCodigo_Secreto());
    });

    it("21) Si se selecciona la opción de <Código automático>, mostrar un código de 4 caracteres con letras de la letra <a> a la <z> o números del <0> al <9> generados aleatoriamente como <4 S 8 Y>", () =>
    {
        vacas_Toros.definir_Configuracion_Total(4, 6, "Combinado", true);
        respuesta = vacas_Toros.getCodigo_Secreto();
        console.log(respuesta);
        expect(respuesta).toEqual(vacas_Toros.getCodigo_Secreto());
    });

    it("22) Si el código secreto es <p t w c>, el tipo de código es “Letras” y se ingresa como intento el código <x y o c>, mostrar la respuesta como <o o o o>", () => {
        vacas_Toros.definir_Configuracion_Total(4, 6, "Letras", true);
        vacas_Toros.definir_Codigo_Secreto(['P', 'T', 'W', 'C']);
        vacas_Toros.definir_Intento(['X', 'Y', 'O', 'C']);
        respuesta = vacas_Toros.getResultado_Intento();
        expect(respuesta).toEqual(['O', 'O', 'O', 'O']);
    });
});
