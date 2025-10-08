calcularValorTotal = function () {
    //variables para recuperar los valores de las cajas de texto
    let nombreProducto;
    let precioProducto;
    let cantidad;
    let porcentajeDescuento;
    //variables para almacenar los retornos de las funciones
    let valorSubtotal;
    let valorDescuento;
    let valorIVA;
    let valorTotal;

    //1. Recuperar el nombre del producto como String
    nombreProducto = recuperarTexto("txtProducto");
    //2. Recuperar el precio como float
    precioProducto = recuperarFloat("txtPrecio");
    //3. Recuperar cantidad como int
    cantidad = recuperarInt("txtCantidad");
    if (esProductoValido(nombreProducto, "lblError1") & esCantidadValida(cantidad, "lblError2") & esPrecioValido(precioProducto, "lblError3")) {
        valorSubtotal = calcularSubtotal(precioProducto, cantidad);
        mostrarTexto("lblSubtotal", valorSubtotal);
        valorDescuento = calcularDescuentoPorVolumen(valorSubtotal, cantidad);
        mostrarTexto("lblDescuento", valorDescuento);
        valorIVA = calcularIVA(valorSubtotal, valorDescuento);
        mostrarTexto("lblValorIVA", valorIVA)
        valorTotal = calcularTotal(valorSubtotal, valorDescuento, valorIVA);
        mostrarTexto("lblTotal", valorTotal);
    } else {
        mostrarTexto("lblTotal", "0.0");
    }
}
limpiar = function () {
    // Limpiar inputs
    document.getElementById("txtProducto").value = "";
    document.getElementById("txtCantidad").value = "";
    document.getElementById("txtPrecio").value = "";

    // Limpiar resultados
    document.getElementById("lblSubtotal").innerText = "0.0";
    document.getElementById("lblDescuento").innerText = "0.0";
    document.getElementById("lblValorIVA").innerText = "0.0";
    document.getElementById("lblTotal").innerText = "0.0";
    document.getElementById("lblResumen").innerText = "";

    // Limpiar errores
    document.getElementById("lblError1").innerText = "";
    document.getElementById("lblError2").innerText = "";
    document.getElementById("lblError3").innerText = "";
}
/* SI TODO FUNCIONA, HACER UN PUSH */