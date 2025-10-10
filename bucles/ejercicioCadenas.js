ejecutarPrueba1 = function () {
    let mensaje;
    mensaje = recuperarTexto("txtCadena");
    recorrerCadena(mensaje);
}

ejecutarPrueba2 = function () {
    let mensaje;
    mensaje = recuperarTexto("txtCadena");
    let texto=invertirCadena(mensaje);
    mostrarTexto("lblTexto", texto);
}

recorrerCadena = function (cadena) {
    let caracter;
    for (let posicion = 0; posicion < cadena.length; posicion++) {
        caracter = cadena.charAt(posicion);
        console.log("Caracter " + caracter + " posicion " + posicion);
    }

    for (let posicion = 0; posicion <= cadena.length - 1; posicion++) {
        caracter = cadena.charAt(posicion);
        console.log("CARACTER " + caracter + " posicion " + posicion);
    }
}

invertirCadena = function (cadena) {
    let resultado = "";
    let caracter;
    for (let posicion = cadena.length-1;posicion >=0 ; posicion--) {
        caracter = cadena.charAt(posicion);
        resultado = resultado + caracter;
    }
    return resultado;

}

buscarLetra =function(cadena, letra){
    let letraIterada;
    let existeLetra = false;
    for(let i=0;i<cadena.length;i++){
        letraIterada=cadena.charAt(i);
        if(letraIterada==letra){
            existeLetra=true;
        }
    }
    if(existeLetra==true){
        return true;
    } else{
        return false;
    }
}

contarMayusculas=function(cadena){
    let letra;
    let contadorMayusculas;
    for(let i=0;i<cadena.length;i++){
        letra=cadena.charAt(i);
        if(esMayuscula(letra)){
            contadorMayusculas++
        }
    }
    console.log(contadorMayusculas);
}
