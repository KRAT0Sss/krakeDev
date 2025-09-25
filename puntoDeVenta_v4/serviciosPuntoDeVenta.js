calcularValorDescuento=function(monto,porcentajeDescuento){
    let valorDescuento=(monto*porcentajeDescuento)/100;
    return valorDescuento;
}

calcularIVA=function(monto,descuento){
    let porcentajeIVA = 12; 
    let baseImponible = monto - descuento;
    let iva = baseImponible * (porcentajeIVA / 100);
    return iva;
}

calcularSubtotal=function(precio,cantidad){
    let subtotal=precio*cantidad;
    return subtotal;
}

calcularTotal=function(subtotal, descuento, iva){
    let Total= (subtotal-descuento)+ iva;
    return Total;
}

mostrarResumen=function(cantidad, nombreProducto,porcentajeDescuento,total){
    let  resumen=document.getElementById("lblResumen");
    let texto= "El valor a pagar por "+cantidad+" "+nombreProducto+" con "
    +porcentajeDescuento+"% es "+total.toFixed(2);
    resumen.innerText= texto;
}