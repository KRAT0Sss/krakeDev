validarPlacas = function () {
    let placa;
    let erroresEstructura;
    placa = recuperarTexto("txtPlaca");
    erroresEstructura = validarEstructura(placa);
    if (erroresEstructura == null) {
        mostrarTexto("lblValidacion", "ESTRUCTURA VALIDA");
        let provincia = obtenerProvincia(placa);
        if (provincia != null) {
            mostrarTexto("lblProvincia", "Provincia: " + provincia);
        } else {
            mostrarTexto("lblProvincia", "PROVINCIA INCORRECTA");
        }
        let auto = obtenerTipoVehiculo(placa);
        if (auto != null) {
            mostrarTexto("lblAuto", "vehiculo: " + auto);
        } else {
            mostrarTexto("lblAuto", "VEHICULO INCORRECTO");
        }
        let diaDeCirculacion = obtenerDiaPicoYPlaca(placa);
        mostrarTexto("lblDiaC", "Pico y Placa: " + diaDeCirculacion);
    } else {
        mostrarTexto("lblValidacion", "ESTRUCTURA INCORRECTA:");
        mostrarTexto("lblError", erroresEstructura);
    }
}

limpiar = function () {
    mostrarTextoEnCaja("txtPlaca","")
    mostrarTexto("lblValidacion", "");
    mostrarTexto("lblProvincia", "");
    mostrarTexto("lblAuto", "");
    mostrarTexto("lblDiaC", "");
    mostrarTexto("lblError", "");

}