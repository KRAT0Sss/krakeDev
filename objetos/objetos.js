
probarAtributos = function () {
    let persona = {
        nombre: "Juan",
        apellido: "Valdes",
        edad: 40,
        estaVivo: true
    }
    console.log(persona.nombre);
    console.log(persona.edad);
    if(persona.estaVivo==false){
        console.log("no está vivo");
    }else{
        console.log("si está vivo");
    }
}

crearProducto = function(){
    let producto1= {
        nombre: "arroz",
        precio: 1.5,
        stock:5
    }
    let producto2={
        nombre:"azucar",
        precio:1.85,
        stock:8
    }
    console.log(producto1.nombre);
    console.log(producto2.precio);
    if(producto1.stock<producto2.stock){
        console.log("producto 2 tiene mas stock ");
    }
}