let personas = [
    { nombre: "Marcos", edad: 18 },
    { nombre: "Roberto", edad: 15 },
    { nombre: "Kate", edad: 25 },
    { nombre: "Diana", edad: 12 },
    { nombre: "Benja", edad: 5 }
];

validarEdad = function (edad, idComponente) {
    if (isNaN(edad)) {
        mostrarTexto(idComponente, "Debe ingresar numeros");
        return false;
    }
    if (edad < 0 || edad > 100) {
        mostrarTexto(idComponente, "La edad maxima es 100 años");
        return false;
    }
    return true;
}
validarNombre = function (nombre, idComponente) {
    if (nombre.length < 3) {
        mostrarTexto(idComponente, "Debe contener minimo 3 letras");
        return false;
    }
    return true;
}
agregarPersona = function () {
    let nombre = recuperarTexto("txtNombre");
    let edad = recuperarInt("txtEdad");
    let edadV = validarEdad(edad, "lblError1");
    let nombreV = validarNombre(nombre, "lblError2");
    if (edadV == true && nombreV == true) {
        nuevaPersona = {};
        nuevaPersona.nombre = nombre;
        nuevaPersona.edad = edad;
        personas.push(nuevaPersona);
        alert("PERSONA AGREGADA CORRECTAMENTE");
    }
}
mostrarPersonas = function () {
    let tabla;
    let cmpTabla = document.getElementById("tablaEmpleados");
    let tablaPersonas = `
     <table>
        <thead>
            <tr><th>EDAD</th>
            <th>NOMBRE</th></tr>
        </thead>
        <tbody>
    `;
    for (let i = 0; i < personas.length; i++) {
        tabla = personas[i];
        tablaPersonas += "<tr><td>" + tabla.edad + "</td>";
        tablaPersonas += "<td>" + tabla.nombre + "</td></tr>";
    }
    tablaPersonas += `
        </tbody>
    </table>`;
    cmpTabla.innerHTML = tablaPersonas;
}

determinarMayor = function () {
    let mayor = buscarMayor();
    mostrarTexto("lblMayor", mayor.nombre + " " + mayor.edad + " anios")
}
determinarMenor =function(){
    let menor =buscarMenor();
    mostrarTexto("lblMenor", menor.nombre + " " + menor.edad + " anios")

}

buscarMenor = function () {
    let personaMenor= personas[0];
    let elementoPersona;
    for (let i = 1; i < personas.length; i++) {
        elementoPersona = personas[i]
        console.log(elementoPersona);
        if (elementoPersona.edad < personaMenor.edad) {
            personaMenor = elementoPersona;
        }
    }
    return personaMenor;
}

buscarMayor = function () {
    let personaMayor = personas[0];
    let elementoPersona;
    for (let i = 1; i < personas.length; i++) {
        elementoPersona = personas[i]
        console.log(elementoPersona);
        if (elementoPersona.edad > personaMayor.edad) {
            personaMayor = elementoPersona;
        }
    }
    return personaMayor;
}