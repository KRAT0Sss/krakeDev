calcularPromedioNotas=function(){

    n1=recuperarFloat("txtN1");
    n2=recuperarFloat("txtN2");
    n3=recuperarFloat("txtN3");
    promedio=promedioNotas(n1,n2,n3);
    mostrarTexto("lblPromedio", promedio.toFixed(2));
}