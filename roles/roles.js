let empleados = [
    { cedula: "1714616123", nombre: "John", apellido: "Cena", sueldo: 500.0 },
    { cedula: "0914632123", nombre: "Luisa", apellido: "Gonzalez", sueldo: 900.0 },
    { cedula: "1578985547", nombre: "Mateo", apellido: "Perez", sueldo: 1000.0 }

]
let esNuevo = false;

esDigito = function (caracter) {
    let codigo = caracter.charCodeAt(0);

    // dígitos: 0-9
    if (codigo >= 48 && codigo <= 57) {
        return true;
    }

    return false;
}

esMayuscula = function (caracter) {
    let codigo = caracter.charCodeAt(0)
    if (codigo >= 65 && codigo <= 90) {
        return true;
    } else {
        return false;
    }
}
contarMayusculas = function (cadena) {
    for (let i = 0; i < cadena.length; i++) {
        if (!esMayuscula(cadena.charAt(i))) {
            return false;
        }
    }
    return true;
}
validarCedula = function (cedula, idComponente) {
    if (cedula.length !== 10) {
        mostrarTexto(idComponente, "Debe contener 10 caracteres");
        return false;
    }
    for (let i = 0; i < cedula.length; i++) {
        if (!esDigito(cedula[i])) {
            mostrarTexto(idComponente, "Debe ingresar solo numeros");
            return false;
        }
    }
    return true;
}

validarNombre = function (nombre, idComponente) {
    if (nombre.length < 3) {
        mostrarTexto(idComponente, "Debe contener minimo 3 caracteres");
        return false;
    }
    for (let i = 0; i < nombre.length; i++) {
        if (!contarMayusculas(nombre[i])) {
            mostrarTexto(idComponente, "Debe ingresar solo mayusculas");
            return false;
        }
    }
    return true;
}
validarApellido = function (apellido, idComponente) {
    if (apellido.length < 3) {
        mostrarTexto(idComponente, "Debe contener minimo 3 caracteres");
        return false;
    }
    for (let i = 0; i < apellido.length; i++) {
        if (!contarMayusculas(apellido[i])) {
            mostrarTexto(idComponente, "Debe ingresar solo mayusculas");
            return false;
        }
    }
    return true;
}

validarSueldo = function (sueldo, idComponente) {
    if (isNaN(sueldo)) {
        mostrarTexto(idComponente, "Debe ingresar un numero valido");
        return false;
    }
    if (sueldo < 400 || sueldo > 5000) {
        mostrarTexto(idComponente, "Debe ingresar un valor que este entre 400-5000");
        return false;
    }
    return true;
}

limpiar = function () {
    esNuevo==false;
    mostrarTextoEnCaja("txtCedula","");
    mostrarTextoEnCaja("txtNombre","");
    mostrarTextoEnCaja("txtApellido","");
    mostrarTextoEnCaja("txtSueldo","");
    desabilitarElementos();

}

guardar = function () {
    let cedula = recuperarTexto("txtCedula");
    let nombre = recuperarTexto("txtNombre");
    let apellido = recuperarTexto("txtApellido");
    let sueldo = recuperarFloat("txtSueldo");


    // Validaciones
    if (validarCedula(cedula, "lblErrorCedula") & validarNombre(nombre, "lblErrorNombre") & validarApellido(apellido, "lblErrorApellido") & validarSueldo(sueldo, "lblErrorSueldo")) {
        if (esNuevo !== false) {
            //NUEVO EMPLEADO
            let empleado = {};
            empleado.cedula = cedula;
            empleado.nombre = nombre;
            empleado.apellido = apellido;
            empleado.sueldo = sueldo;
            let empleadoAgregado = agregarEmpleado(empleado);
            if (empleadoAgregado == true) {
                alert("EMPLEADO GUARDADO CORRECTAMENTE");
                mostrarEmpleados();
                desabilitarElementos();
                esNuevo = false;
            } else {
                alert("YA EXISTE UN EMPLEADO CON CEDULA " + empleado.cedula)

            }
        } else {
            //MODIFICAR EMPLEADO
            let empleadoEnconrado = buscarEmpleado(cedula);
            if (empleadoEnconrado !== null) {
                empleadoEnconrado.nombre = nombre;
                empleadoEnconrado.apellido = apellido;
                empleadoEnconrado.sueldo = sueldo;
                alert("EMPLEADO MODIFICADO EXITOSAMENTE")
                mostrarEmpleados();
                desabilitarElementos();
                esNuevo = false;
            } else {
                alert("NO SE ENCONTRO EMPLEADO CON CEDULA: " + cedula);
            }
        }

    }
}

ejecutarBusqueda = function () {
    let cedula = recuperarTexto("txtBusquedaCedula");
    let cedulaEncotrada = buscarEmpleado(cedula);
    if (cedulaEncotrada !== null) {
        mostrarEmpleados();
        //Llenar los campos con los datos del empleado
        mostrarTextoEnCaja("txtCedula", cedulaEncotrada.cedula);
        mostrarTextoEnCaja("txtNombre", cedulaEncotrada.nombre);
        mostrarTextoEnCaja("txtApellido", cedulaEncotrada.apellido);
        mostrarTextoEnCaja("txtSueldo", cedulaEncotrada.sueldo);

        // Preparar la edición
        deshabilitarComponente("txtCedula");// la cédula no se puede cambiar
        habilitarComponente("txtNombre");
        habilitarComponente("txtApellido");
        habilitarComponente("txtSueldo");
        habilitarComponente("btnGuardar");
        //Deshabilitar la búsqueda para no perder datos
        deshabilitarComponente("txtBusquedaCedula");
        // Indicar que NO es un nuevo empleado
        esNuevo = false;

    } else {
        alert("EMPLEADO NO EXISTE");
    }
}

agregarEmpleado = function (empleado) {
    let empleadoEnconrado = buscarEmpleado(empleado.cedula);
    if (empleadoEnconrado == null) {
        empleados.push(empleado);
        return true;
    }
    return false;
}

buscarEmpleado = function (cedula) {
    let cedulaEncotrada;
    for (let i = 0; i < empleados.length; i++) {
        cedulaEncotrada = empleados[i];
        if (cedulaEncotrada.cedula == cedula) {
            return cedulaEncotrada;
        }
    }
    return null;

}

ejecutarNuevo = function () {
    esNuevo = true; // Modo creación
    habilitarComponente("btnGuardar");
    habilitarComponente("txtCedula");
    habilitarComponente("txtNombre");
    habilitarComponente("txtApellido");
    habilitarComponente("txtSueldo");

}

desabilitarElementos = function () {
    deshabilitarComponente("btnGuardar");
    deshabilitarComponente("txtCedula");
    deshabilitarComponente("txtNombre");
    deshabilitarComponente("txtApellido");
    deshabilitarComponente("txtSueldo");


}
mostrarEmpleados = function () {
    let empleado;
    let cmpTabla = document.getElementById("tablaEmpleados");
    let tabalaEmpleado = `
    <table>
        <thead>
            <tr><th>CEDULA</th><th>NOMBRE</th><th>APELLIDO</th><th>SUELDO</th></tr>
        </thead>
        <tbody>
    `;
    for (let i = 0; i < empleados.length; i++) {
        empleado = empleados[i];
        tabalaEmpleado += "<tr><td>" + empleado.cedula + "</td>";
        tabalaEmpleado += "<td>" + empleado.nombre + "</td>";
        tabalaEmpleado += "<td>" + empleado.apellido + "</td>";
        tabalaEmpleado += "<td>" + empleado.sueldo + "</td></tr>";
    }
    tabalaEmpleado += `
        </tbody>
    </table>
    `;
    cmpTabla.innerHTML = tabalaEmpleado;

}

mostrarOpcionEmpleado = function () {
    ocultarComponente("divRol");
    ocultarComponente("divResumen");
    mostrarEmpleados();
    desabilitarElementos();
}

mostrarOpcionRol = function () {
    ocultarComponente("divEmpleado");
    ocultarComponente("divResumen");
}

mostrarOpcionResumen = function () {
    ocultarComponente("divEmpleado");
    ocultarComponente("divRol");
}