let puntos = 0;
let lanzamientos = 5;


jugar = function(){
    let resultado = lanzarDado();
    console.log("Tirada:", resultado);
    mostrarCara(resultado);
    if (modifcarPuntos(resultado)) {
        console.log("Se detectó victoria, no se restan lanzamientos.");
        return;
    }
    modficarLanzamientos();
}

modifcarPuntos = function(numero){
    puntos = puntos + numero;
    cambiarTexto("lblPuntos", puntos);
    console.log("Puntos:", puntos);

    if (puntos > 20){
        cambiarTexto("lblRespuesta","¡GANASTE!");
        limpiar();
        return true;
    }
    return false; 
}

modficarLanzamientos = function(){
    lanzamientos = lanzamientos - 1;
    cambiarTexto("lblLanzamientos", lanzamientos);
    console.log("Lanzamientos:", lanzamientos);

    if (lanzamientos == 0){
        cambiarTexto("lblRespuesta","GAME OVER");
        limpiar();
    }
}

limpiar = function(){
    puntos = 0;
    lanzamientos = 5;
    cambiarTexto("lblPuntos", puntos);
    cambiarTexto("lblLanzamientos", lanzamientos);
    cambiarImagen("imgDado","");
}


//funcioon mostrarCara, recibe el número que quiere mostrar
//muestra la imagen correspondiente al número que recibe 
//no retorna nada 
mostrarCara=function(numero){
    if(numero==1){
        cambiarImagen("imgDado","dados1.png");
    }else if(numero==2){
        cambiarImagen("imgDado","dados2.png");
    }else if(numero==3){
        cambiarImagen("imgDado","dados3.png");
    }else if(numero==4){
        cambiarImagen("imgDado","dados4.png");
    }else if(numero==5){
        cambiarImagen("imgDado","dados5.png");
    }else if(numero==6){
        cambiarImagen("imgDado","dados6.png");
    }
}


lanzarDado=function(){
    let aleatorio;
    let aleatorioMultiplicado;
    let aleatorioEntero;
    let valorDado;
    aleatorio=Math.random();
    aleatorioMultiplicado=aleatorio*6;
    aleatorioEntero=parseInt(aleatorioMultiplicado);
    valorDado=aleatorioEntero+1;
    return valorDado;
}