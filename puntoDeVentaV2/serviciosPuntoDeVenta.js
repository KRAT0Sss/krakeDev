calcularValorDescuento = function (monto, porcentajeDescuento) {
    let valorDescuento = (monto * porcentajeDescuento) / 100;
    return valorDescuento;
}

calcularIVA = function (monto, descuento) {
    let porcentajeIVA = 12;
    let baseImponible = monto - descuento;
    let iva = baseImponible * (porcentajeIVA / 100);
    return iva;
}

calcularSubtotal = function (precio, cantidad) {
    let subtotal = precio * cantidad;
    return subtotal;
}

calcularTotal = function (subtotal, descuento, iva) {
    let Total = (subtotal - descuento) + iva;
    return Total;
}

mostrarResumen = function (cantidad, nombreProducto, porcentajeDescuento, total) {
    let resumen = document.getElementById("lblResumen");
    let texto = "El valor a pagar por " + cantidad + " " + nombreProducto + " con "
        + porcentajeDescuento + "% es " + total.toFixed(2);
    resumen.innerText = texto;
}
calcularDescuentoPorVolumen = function (subtotal, cantidad) {
    let descuento = 0;

    if (cantidad < 3) {
        descuento = 0;
    } else if (cantidad <= 5) {
        descuento = subtotal * 0.03;
    } else if (cantidad <= 11) {
        descuento = subtotal * 0.04;
    } else {
        descuento = subtotal * 0.05;
    }

    return descuento;
}

esProductoValido = function (nombre, idComponenteError) {
    if (nombre === "") {
        mostrarTexto(idComponenteError, "CAMPO OBLIGATORIO");
        return false;
    } else if (nombre.length > 10) {
        mostrarTexto(idComponenteError, "NO EXISTE");
        return false;
    } else{
        mostrarTexto(idComponenteError,"")
        return true 
    } 
}

esCantidadValida = function (cantidad, idComponenteError) {
    if (isNaN(cantidad)) {
        mostrarTexto(idComponenteError, "CAMPO OBLIGATORIO");
        return false;
    } else if (cantidad < 0 || cantidad > 100) {
        mostrarTexto(idComponenteError, "ERROR");
        return false;
    }else{
        mostrarTexto(idComponenteError,"")
        return true 
    } 
}

esPrecioValido = function (precio, idComponenteError) {
    if (isNaN(precio)) {
        mostrarTexto(idComponenteError, "CAMPO OBLIGATORIO");
        return false;
    } else if (precio < 0 || precio > 50) {
        mostrarTexto(idComponenteError, "ERROR");
        return false;
    }else{
        mostrarTexto(idComponenteError,"")
        return true 
    } 
}