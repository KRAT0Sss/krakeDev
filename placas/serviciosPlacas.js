validarEstructura = function(placa) {
    let errores = ""; // Aquí vamos a ir acumulando los errores

    // 1. Validar longitud
    if (placa.length < 7 || placa.length > 8) {
        errores = errores + "La placa debe tener 7 u 8 caracteres\n";
    }

    // 2. Validar cada carácter
    if (!esMayuscula(placa.charAt(0))) {
        errores = errores + "El primer caracter debe ser mayuscula\n";
    }
    if (!esMayuscula(placa.charAt(1))) {
        errores = errores + "El segundo caracter debe ser mayuscula\n";
    }
    if (!esMayuscula(placa.charAt(2))) {
        errores = errores + "El tercer caracter debe ser mayuscula\n";
    }
    if (!esGuion(placa.charAt(3))) {
        errores = errores + "El cuarto caracter debe ser guion\n";
    }
    if (!esDigito(placa.charAt(4))) {
        errores = errores + "El quinto caracter debe ser digito\n";
    }
    if (!esDigito(placa.charAt(5))) {
        errores = errores + "El sexto caracter debe ser digito\n";
    }
    if (!esDigito(placa.charAt(6))) {
        errores = errores + "El septimo caracter debe ser digito\n";
    }
    // Validar octavo caracter solo si existe
    if (placa.length === 8 && !esDigito(placa.charAt(7))) {
        errores = errores + "El octavo caracter debe ser digito\n";
    }

    // 3. Retornar resultado
    if (errores === "") {
        return null;
    } else {
        return errores; // Retorna todos los errores concatenados
    }
}
