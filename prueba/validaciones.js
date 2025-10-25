esEspacio = function (caracter) {
    let codigo = caracter.charCodeAt(0);
    if (codigo == 32 || codigo == "") {
        return true;
    }
    return false;
}

esArroba = function (caracter) {
    let codigo = caracter.charCodeAt(0);
    if (codigo == 64) {
        console.log(codigo)
        return true;

    }

    return false;


}
contarArroba = function (cadena) {
    let letra;
    for (let i = 0; i < cadena.length; i++) {
        letra = cadena.charAt(i);
        if (esArroba(letra)) {
            return true
        }
    }
    return false
}





esDigito = function (caracter) {
    let codigo = caracter.charCodeAt(0);

    // dígitos: 0-9
    if (codigo >= 48 && codigo <= 57) {
        return true;
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
esMayuscula = function (caracter) {
    let codigo = caracter.charCodeAt(0);
    if (codigo >= 65 && codigo <= 90) {
        return true;
    } else {
        return false;
    }
}


contarMayusculas = function (cadena) {
    let letra;
    for (let i = 0; i < cadena.length; i++) {
        letra = cadena.charAt(i);
        if (esMayuscula(letra)) {
            return true;
        }
    }
    return false;
}



///
probarBusqueda = function () {
    let frutaIngresada = recuperarTexto("lblFruta");
    let resultado = buscar(frutaIngresada);
    if (resultado == null) {
        alert("No existe la fruta");
    } else {
        alert(frutaIngresada + " si existe en el cesto!!")
    }
}

buscar = function (fruta) {
    let elemento;
    let frutaEncontrada = null;
    for (let i = 0; i < frutas.length; i++) {
        elemento = frutas[i]
        if (fruta == elemento) {
            frutaEncontrada = elemento;
            break;
        }
    }
    return frutaEncontrada;
}