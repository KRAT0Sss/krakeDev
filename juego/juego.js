let puntosUsuario=0;
let puntosComputador=0;

jugar = function(seleccionado){
    if (puntosUsuario === 5 || puntosComputador === 5) {
        mostrarTexto("lblRespuesta", "El juego ha terminado. Reinicia para jugar de nuevo.");
        return;
    }
    let numero=generarElemento();
    generarRuta(numero);
    let ganador=determinarGanador(seleccionado,numero);
    if(ganador==0){
        mostrarTexto("lblResultado","EMPATES!");
    } else if (ganador==1){
        mostrarTexto("lblResultado","GANASTE LA PARTIDA!");
        puntosUsuario=puntosUsuario+1;
        mostrarTexto("puntajeUsuario",puntosUsuario);
        if(puntosUsuario===5){
            mostrarTexto("lblRespuesta","HAS GANADO EL JUEGO");
        }
    } else{
        mostrarTexto("lblResultado","PERDISTE LA PARTIDA!");
        puntosComputador=puntosComputador+1;
        mostrarTexto("puntajeComputador",puntosComputador);
         if(puntosComputador===5){
            mostrarTexto("lblRespuesta","EL COMPUTADOR TE A VENCIDO");
        }
    }
}

limpiar=function(){
    mostrarTexto("lblRespuesta","");
    mostrarTexto("lblResultado","");
    mostrarImagen("imgPC","");
    puntosUsuario=0;
    puntosComputador=0;
    mostrarTexto("puntajeUsuario",puntosUsuario);
    mostrarTexto("puntajeComputador",puntosComputador);
}