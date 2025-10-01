calcularPromedioNotas=function(){

    n1=recuperarFloat("txtN1");
    n2=recuperarFloat("txtN2");
    n3=recuperarFloat("txtN3");
    promedio=promedioNotas(n1,n2,n3);
    mostrarTexto("lblPromedio", promedio.toFixed(2));
    if (promedio > 0 && promedio < 5) {
        mostrarTexto("lblMensaje", "REPROBADO");
        mostrarImagen("img", "reprobado.gif");
    } else if (promedio >= 5 && promedio <= 8) {
        mostrarTexto("lblMensaje", "BUEN TRABAJO");
        mostrarImagen("img", "buenTrabajo.gif");
    } else if (promedio > 8 && promedio <= 10) {
        mostrarTexto("lblMensaje", "EXCELENTE");
        mostrarImagen("img", "excelente.gif");
    } else {
        mostrarTexto("lblMensaje", "DATOS INCORRECTOS");
        mostrarImagen("img", "error.gif");
    }
}