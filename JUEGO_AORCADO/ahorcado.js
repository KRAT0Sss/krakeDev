//No se olvide de respirar, mantenga la calma y demuestre lo que sabe
let palabraSecreta;
let intentos = 0;
let coincidencias = 0;
let errores = 0;
guardarPalabra = function () {
    let palabraRecuperada = recuperarTexto("txtSecreta");
    if (palabraRecuperada.length == 5) {
        if (contarMayusculas(palabraRecuperada) == true) {
            palabraSecreta = palabraRecuperada;
            alert("Palabra valida");
        } else {
            alert("todas las lestras deben ser mayusculas");
        }
    } else {
        alert("debe ingresar 5 letras mayusculas ");
    }
    console.log(palabraSecreta);
}
esMayuscula = function (caracter) {
    let codigo = caracter.charCodeAt(0)
    if (codigo >= 65 && codigo <= 90) {
        return true;
    } else {
        return false;
    }
}
contarMayusculas = function (cadena) {
    for (let i = 0; i < cadena.length; i++) {
        if (!esMayuscula(cadena.charAt(i))) {
            return false;
        }
    }
    return true;
}

mostrarLetra = function (letra, posicion) {
    if (posicion == 0) {
        mostrarTexto("div0", letra);
    } else if (posicion == 1) {
        mostrarTexto("div1", letra);
    } else if (posicion == 2) {
        mostrarTexto("div2", letra);
    } else if (posicion == 3) {
        mostrarTexto("div3", letra);
    } else if (posicion == 4) {
        mostrarTexto("div4", letra);
    }

}

validar = function (letra) {
    let letrasEnconctradas = 0;
    for (let i = 0; i < palabraSecreta.length; i++) {
        if (letra === palabraSecreta.charAt(i)) {
            mostrarLetra(letra, i);
            letrasEnconctradas++;
            coincidencias++;
        }
    }
    if (letrasEnconctradas == 0) {
        alert("la letra no es parte de la palabra");
        errores++
    }
    console.log("letras encontradas " + letrasEnconctradas);
}

ingresarLetra = function () {
    intentos++;
    let letra = recuperarTexto("txtLetra");
    if (esMayuscula(letra) == true) {
        validar(letra);
        if (coincidencias == 5) {
            alert("a ganado");
        } else if (intentos == 10) {
            alert("ha perdido")
        }
    } else {
        alert("solo se aceptan mayusculas");
    }

}