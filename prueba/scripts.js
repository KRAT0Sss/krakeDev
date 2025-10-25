let estudiantes = [{
    nombre: "Juan",
    correo: "juan@gmail.com",
    id: "1234567890"
}];

let esNuevo = false;

function esEstudiantes() {
    let nombre = recuperarTexto("txtNombre")
    let correo = recuperarTexto("txtCorreo")
    let id = recuperarTexto("txtId")
    if (validarNombre(nombre) & validarCorreo(correo) & validarID(id)) {
        let estudiante = {}
        estudiante.nombre = nombre;
        estudiante.correo = correo;
        estudiante.id = id;
        let estudianteAgregado = agregarEstudiante(estudiante);
        if (estudianteAgregado == true) {
            alert("ESTUDIANTE GUARDADO CORRECTAMENTE");
            mostrarEstudiantes();
        } else {
            alert("YA EXISTE UN ESTUDIANTE CON CEDULA " + estudiante.id)



        }
    }else{

    }
}
limpiar=function(){
    mostrarTextoEnCaja("txtNombre","")
    mostrarTextoEnCaja("txtCorreo","")
    mostrarTextoEnCaja("txtId","")
    mostrarTexto("error1","")
    mostrarTexto("error2","")
    mostrarTexto("error3","")

}
elminarEstudiante = function () {
    let id = recuperarTexto("txtIDeliminar")
    let eliminar = validarID(id)
    let estudianteEncontrado = buscarEstudiante(id)
    if (estudianteEncontrado == null) {
        alert("NOSE ENCONTRO UN ESTUDIANTE CON ESE ID ")
    }
    if (eliminar == true) {
        for (let i = 0; i < estudiantes.length; i++) {
            estudiantes.splice(i, 1);
            mostrarEstudiantes();
        }

    }


}
mostrarEstudiantes = function () {
    let estudiante;
    let cmpTabla = document.getElementById("tablaProductos");
    let tabalaEmpleado = `
    <table>
        <thead>
            <tr><th>NOMBRE</th><th>CORREO</th><th>ID</th></tr>
        </thead>
        <tbody>
    `;
    for (let i = 0; i < estudiantes.length; i++) {
        estudiante = estudiantes[i];
        tabalaEmpleado += "<tr><td>" + estudiante.nombre + "</td>";
        tabalaEmpleado += "<td>" + estudiante.correo + "</td>";
        tabalaEmpleado += "<td>" + estudiante.id + "</td></tr>";
    }
    tabalaEmpleado += `
        </tbody>
    </table>
    `;
    cmpTabla.innerHTML = tabalaEmpleado;

}

agregarEstudiante = function (empleado) {
    let empleadoEnconrado = buscarEstudiante(estudiantes.id);
    if (empleadoEnconrado == null) {
        estudiantes.push(empleado);
        return true;
    }
    return false;
}
buscarEstudiante = function (cedula) {
    let cedulaEncotrada;
    for (let i = 0; i < estudiantes.length; i++) {
        cedulaEncotrada = estudiantes[i];
        if (cedulaEncotrada.id == cedula) {
            return cedulaEncotrada;
        }
    }
    return null;

}

function validarNombre(nombre) {
    let idComponente = "error1"
    let error1 = esEspacio(nombre);
    let error2 = esMayuscula(nombre);
    let error3 = contarDigito(nombre);
    if (error1 == true) {
        mostrarTexto(idComponente, "El nombre es obligatorio")
        return false
    }
    if (error2 == false) {
        mostrarTexto(idComponente, "La primera letra debse ser mayuscula")
        return false
    }
    if (error3 == true) {
        mostrarTexto(idComponente, "El nombre solo debe contener letras y espacios ")
        return false
    }
    return true

}
function validarCorreo(correo) {
    let idComponente = "error2"
    let error1 = esEspacio(correo);
    let error2 = contarArroba(correo)
    if (error1 == true) {
        mostrarTexto(idComponente, "El correo es obligatorio")
        return false
    }
    if (error2 == false) {
        mostrarTexto(idComponente, "Ingrese un correo valido")
        return false
    }
    return true

}
function validarID(id) {
    let idComponente = "error3"
    let error1 = esEspacio(id);
    let error2 = contarDigito(id);
    if (error1 == true) {
        mostrarTexto(idComponente, "El ID es obligatorio")
        return false
    }
    if (id.length > 0 && id.length < 10) {
        mostrarTexto(idComponente, "Debe ingresar 10 dijitos ")
        return false
    }
    if (error2 == false) {
        mostrarTexto(idComponente, "Debe tener solo numeros")
        return false
    }
    return true

}