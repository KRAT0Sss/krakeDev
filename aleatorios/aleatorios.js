numAleatorio = function () {
    let aleatorio;
    let numeroMultiplicado;
    let numeroEntero
    let valor
    aleatorio = Math.random();
    numeroMultiplicado = aleatorio * 100
    numeroEntero = parseInt(numeroMultiplicado);
    valor = numeroEntero + 1;
    return valor;
}

generarAleatorioas = function () {
    let aleatorios = [];
    let numero = recuperarInt("txtNumero");
    let numeroAleatorio;
    if (numero >= 5 && numero <= 20) {
        for (let i = 0; i < numero; i++) {
            numeroAleatorio = numAleatorio();
            aleatorios.push(numeroAleatorio);
        }
        mostrarResultados(aleatorios);
    }
}

mostrarResultados = function (arregloNumeros) {
    let cmpTabla = document.getElementById("divTabla");
    let contenidoTabla = "<table><tr><th>NUMEROS ALEATORIOS</th></tr>";
    let aleatorio;
    for (let i = 0; i < arregloNumeros.length; i++) {
        aleatorio= arregloNumeros[i];//saca cada nota ingresada
        contenidoTabla += "<tr><td>";
        contenidoTabla += aleatorio;
        contenidoTabla += "</td></tr>";
    }
    contenidoTabla += "</table>";
    cmpTabla.innerHTML = contenidoTabla;
}

