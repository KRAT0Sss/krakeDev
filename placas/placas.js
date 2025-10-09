validarPlacas = function () {
    let placa;
    let erroresEstructura;
    placa = recuperarTexto("txtPlaca");
    erroresEstructura = validarEstructura(placa);
    if (erroresEstructura == null) {
        mostrarTexto("lblValidacion", "ESTRUCTURA VALIDA");
    } else{
        mostrarTexto("lblValidacion","ESTRUCTURA INCORRECTA:");
        mostrarTexto("lblError",erroresEstructura);
    }
}