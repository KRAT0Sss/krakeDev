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
        mostrarAhorcado()
    }
    console.log("letras encontradas " + letrasEnconctradas);
}

ingresarLetra = function () {
    intentos++;
    let letra = recuperarTexto("txtLetra");
    if (esMayuscula(letra) == true) {
        validar(letra);
        if (coincidencias == 5) {
            mostrarImagen("ahorcadoImagen","ganador.gif");
        } else if (intentos == 10) {
            mostrarImagen("ahorcadoImagen","gameOver.gif");
        }
    } else {
        alert("solo se aceptan mayusculas");
    }

}

mostrarAhorcado = function () {
   if (errores == 1) {
    mostrarImagen("ahorcadoImagen", "Ahorcado_01.png");
} else if (errores == 2) {
    mostrarImagen("ahorcadoImagen", "Ahorcado_02.png");
} else if (errores == 3) {
    mostrarImagen("ahorcadoImagen", "Ahorcado_03.png");
} else if (errores == 4) {
    mostrarImagen("ahorcadoImagen", "Ahorcado_04.png");
} else if (errores == 5) {
    mostrarImagen("ahorcadoImagen", "Ahorcado_05.png");
} else if (errores == 6) {
    mostrarImagen("ahorcadoImagen", "Ahorcado_06.png");
} else if (errores == 7) {
    mostrarImagen("ahorcadoImagen", "Ahorcado_07.png");
} else if (errores == 8) {
    mostrarImagen("ahorcadoImagen", "Ahorcado_08.png");
} else if (errores == 9) {
    mostrarImagen("ahorcadoImagen", "Ahorcado_09.png");
}
}