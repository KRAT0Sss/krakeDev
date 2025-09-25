saludar=function(){
    // recuperar la caja de texto txtNombre
    let nombre=recuperarTexto("txtNombre");
    // recuperar la caja de texto txtApellido
    let apellido=recuperarTexto("txtApellido");
    let edad = recuperarInt("txtEdad");
    let estatura = recuperarFloat("txtEstatura");
    let mostrarBienvenida = "Bienvenido "+nombre+" "+apellido; 
    mostrarTexto("lblResultado", mostrarBienvenida);
    msotrarImagen("imgSaludo", "./imagenes/saludo.gif")
    mostrarTextoEnCaja("txtNombre","")
}

