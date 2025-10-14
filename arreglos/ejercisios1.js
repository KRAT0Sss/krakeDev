let notas = [];

agregarElementos = function () {

    notas.push(5);
    notas.push(10);
    console.log(notas.length);

}

recorrerArreglo = function () {
    let notaR;
    for (let indice = 0; indice < notas.length; indice++) {
        notaR = notas[indice];
        console.log(notaR);
    }
}
probarAgregar = function () {
    let notaRecuperada;
    notaRecuperada = recuperarInt("txtNota");
    agregarNotas(notaRecuperada);
}

agregarNotas = function (nota) {
    notas.push(nota);
}

calcularPromedio = function () {
    let sumaNotas = 0;
    let promedio;
    for (let i = 0; i < notas.length; i++) {
        sumaNotas += notas[i];
    }
    promedio = sumaNotas / notas.length
    return promedio;
}

ejecutarPromedio = function () {
    let promedio = calcularPromedio();
    mostrarTexto("lblPromedio", promedio);
}