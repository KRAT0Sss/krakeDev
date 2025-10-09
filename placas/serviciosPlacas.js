validarEstructura = function (placa) {
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

obtenerProvincia = function (placa) {
    let letra = placa.charAt(0);
    let provincias = {
        'A': 'Azuay',
        'B': 'Bolívar',
        'U': 'Cañar',
        'C': 'Carchi',
        'X': 'Cotopaxi',
        'H': 'Chimborazo',
        'O': 'El Oro',
        'E': 'Esmeraldas',
        'W': 'Galápagos',
        'G': 'Guayas',
        'I': 'Imbabura',
        'L': 'Loja',
        'R': 'Los Ríos',
        'M': 'Manabí',
        'V': 'Morona Santiago',
        'N': 'Napo',
        'S': 'Pastaza',
        'P': 'Pichincha',
        'K': 'Sucumbíos',
        'Q': 'Orellana',
        'T': 'Tungurahua',
        'Z': 'Zamora Chinchipe',
        'Y': 'Santa Elena'
    }
    let provincia = provincias[letra];
    if (!provincia) {
        return null;
    }
    return provincia;
}

obtenerTipoVehiculo = function (placa) {
    let letra = placa.charAt(1)
    if (letra === 'A' || letra === 'Z') {
        return "Vehiculo comercial";
    }
    if (letra === 'E') {
        return "Vehículo gubernamental";
    }
    if (letra === 'X') {
        return "Vehículo de uso oficial";
    }
    if (letra === 'S') {
        return "Vehículo del gobierno provincial";
    }
    if (letra === 'M') {
        return "Vehículo municipal";
    }
    return "Vehículo particular";

}

obtenerDiaPicoYPlaca = function (placa) {
    let diaLibre = esDiaLibre()
    if (diaLibre) {
        return "Sábado y Domingo:libre circulación";
        // no retorna feriados
    }
    let ultimoCaracter = placa.charAt(placa.length - 1)

    if (ultimoCaracter === '1' || ultimoCaracter === '2') {
        return "Lunes";
    } else if (ultimoCaracter === '3' || ultimoCaracter === '4') {
        return "Martes";
    } else if (ultimoCaracter === '5' || ultimoCaracter === '6') {
        return "Miércoles";
    } else if (ultimoCaracter === '7' || ultimoCaracter === '8') {
        return "Jueves";
    } else if (ultimoCaracter === '9' || ultimoCaracter === '0') {
        return "Viernes";
    } else {
        return false;
    }
}
esDiaLibre = function() {
    const hoy = new Date(); 
    const dia = hoy.getDay();
    return dia === 0 || dia === 6;
}