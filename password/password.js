
ejecutarValidacion = function () {
    let mensaje;
    mensaje = recuperarTexto("txtCadena");
    let errores = validarPassword(mensaje);
    if (errores == null) {
        return mostrarTexto("lblTexto", "Password correcta");
    } else {
        return mostrarTexto("lblTexto", errores);
    }

}

validarPassword = function (password) {
    let errores = "";
    if (password.length < 8) {
        errores = errores + "Minimo 8 caracteres \n";
    } else if (password.length > 16) {
        errores = errores + "Maximo 16 caracteres \n";
    }
    // tiene al menos una Mayuscual
    if (contarMayusculas(password) == false) {
        errores = errores + "Debe contener minimo una mayuscula \n";
    }
    //tiene almenos un dijito
    if (contarDigito(password) == false) {
        errores = errores + "Debe contener minimo un dijito \n"
    }
    //tiene al menos un carcater especia  * - _
    if (contarCaracter(password) == false) {
        errores = errores + "Debe contener uno de los carcateres *,-,_ \n"
    }
    if (errores === "") {
        return null;
    } else {
        return errores;
    }
}


contarMayusculas = function (cadena) {
    let letra;
    let contadorMayusculas;
    for (let i = 0; i < cadena.length; i++) {
        letra = cadena.charAt(i);
        if (esMayuscula(letra)) {
            return true;
        }
    }
    return false;
}
contarDigito = function (cadena) {
    let letra;
    for (let i = 0; i < cadena.length; i++) {
        letra = cadena.charAt(i);
        if (esDigito(letra)) {
            return true
        }
    }
    return false
}

contarCaracter = function (cadena) {
    let letra;
    for (let i = 0; i < cadena.length; i++) {
        letra = cadena.charAt(i);
        if (esCaracter(letra)) {
            return true
        }
    }
    return false
}

esMayuscula = function (caracter) {
    let codigo = caracter.charCodeAt(0);
    if (codigo >= 65 && codigo <= 90) {
        return true;
    } else {
        return false;
    }
}

esDigito = function (caracter) {
    let codigo = caracter.charCodeAt(0);

    // dígitos: 0-9
    if (codigo >= 48 && codigo <= 57) {
        return true;
    }

    return false;
}

esCaracter = function (caracter) {
    let codigo = caracter.charCodeAt(0);
    if (codigo == 45 || codigo == 42 || codigo == 95) {
        return true;
    }
    return false;
}
