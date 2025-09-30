jugar=function(){
    let aleatorio;
    aleatorio=lanzarDado();
    cambiarTexto("lblNumero",aleatorio);
    if(aleatorio>3){
        cambiarTexto("lblMensaje","ES MAYOR A 3");
        cambiarTexto("lblRespuesta"," GANASTE");
    }else{
        cambiarTexto("lblMensaje","ES MENOR A 3");
        cambiarTexto("lblRespuesta"," ESTAS DE MALAS");
    }
}

lanzarDado=function(){
    let aleatorio;
    let numeroMultiplicado;
    let numeroEntero
    let valorDado
    aleatorio=Math.random();
    numeroMultiplicado=aleatorio*6
    numeroEntero=parseInt(numeroMultiplicado);
    valorDado=numeroEntero+1;
    return valorDado;
}