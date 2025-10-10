obtenerAleatorio = function () {
    let aleatorio;
    let aleatorioMultiplicado;
    let aleatorioEntero;
    let valor;
    aleatorio = Math.random();
    aleatorioMultiplicado = aleatorio * 3;
    aleatorioEntero = parseInt(aleatorioMultiplicado);
    valor = aleatorioEntero + 1;
    return valor;
}

generarElemento = function () {
    let valorRandom = obtenerAleatorio();
    if (valorRandom == 1) {
        return "Piedra";
    } else if (valorRandom == 2) {
        return "Papel";
    } else if (valorRandom == 3) {
        return "Tijera";
    }
}

determinarGanador = function (jugador1, jugador2) {
    if (jugador1 === jugador2) {
        return 0;
    } else if ((jugador1 === "Piedra" && jugador2 === "Tijera") || (jugador1 === "Papel" && jugador2 === "Piedra") || (jugador1 === "Tijera" && jugador2 === "Papel")) {
        return 1; //gana el jugador 1
    } else {
        return 2;
    }
}

generarRuta = function (nombre) {
    if (nombre === "Tijera") {
        mostrarImagen("imgPC", "./imagenes/tijera.png");
    } else if (nombre === "Piedra") {
        mostrarImagen("imgPC", "./imagenes/piedra.png");
    } else if (nombre === "Papel") {
        mostrarImagen("imgPC", "./imagenes/papel.png");
    }
}
