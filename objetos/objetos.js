
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

modificarAtributos = function(){
    let cuenta ={
        numero:"5789465879",
        saldo: 0.0
    }
    cuenta.saldo=100;
    cuenta.saldo+=10;
    console.log(cuenta.saldo);
}

crearCliente=function(){
    let cliente={
        nombre:"Juan",
        cedula:"123451"
    }
    cliente.nombr="xxxx"// crea una nueva propiedad en la variable 
    let cliente1={};
    cliente1.nombre="Romeo";
    cliente1.apellido="Santos";
    cliente1.cedula="175544780";
}

probarIncrementoSaldo=function(){
    let cta={ numero:"31215546",saldo:34.0}
    incrementarSaldo(cta,100);
    console.log(cta.saldo);
}

probarDeterminarMayor=function(){
    let per1={nombre:"Luis",edad:45}
    let per2={nombre:"Maria",edad:78}
    let mayor=determinarMayor(per1,per2);
    if(mayor!=null){
        console.log("El mayor es: "+mayor.nombre);
    }

}

incrementarSaldo=function(cuenta,monto){
    cuenta.saldo+=monto;
}

determinarMayor=function(persona1,persona2){
    if(persona1.edad>persona2.edad){
        return persona1;
    } else if(persona2.edad>persona1.edad){
        return persona2;
    }else{
        return null;
    }
}