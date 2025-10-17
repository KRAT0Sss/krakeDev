let empleados = [
    { cedula: "1714616123", nombre: "John", apellido: "Cena", sueldo: 500.0 },
    { cedula: "0914632123", nombre: "Luisa", apellido: "Gonzalez", sueldo: 900.0 },
    { cedula: "1578985547", nombre: "Mateo", apellido: "Perez", sueldo: 1000.0 }

]
let esNuevo = false;

let roles = []



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
    esNuevo == false;
    mostrarTextoEnCaja("txtCedula", "");
    mostrarTextoEnCaja("txtNombre", "");
    mostrarTextoEnCaja("txtApellido", "");
    mostrarTextoEnCaja("txtSueldo", "");
    mostrarTextoEnCaja("txtBusquedaCedula", "");
    habilitarComponente("txtBusquedaCedula");
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

validarDescuento = function (sueldo, descuento, idComponente) {
    if (isNaN(descuento)) {
        mostrarTexto(idComponente, "Debe ingresar un numero");
        return false;
    }
    if (descuento < 0 || descuento > sueldo) {
        mostrarTexto(idComponente, "Debe ingresar un valor que este entre 400-5000");
        return false;
    }
    return true;
}

calcularAporteEmpleado = function (sueldo) {
    let porcentajeSueldo = sueldo * (9.45 / 100);
    return porcentajeSueldo;
}

calcularValorAPagar = function (sueldo, aporteIess, descuento) {
    let valorApagar = sueldo - aporteIess - descuento;
    return valorApagar;

}

calcularRol = function () {
    let sueldo = recuperarFloatDiv("infoSueldo");
    let descuento = recuperarFloat("txtDescuentos");
    let descuentoValido = validarDescuento(sueldo, descuento, "lblErrorDescuentos");
    let aporte = calcularAporteEmpleado(sueldo);
    mostrarTexto("infoIESS", aporte.toFixed(2))
    let valorApagar = calcularValorAPagar(sueldo, aporte, descuentoValido);
    mostrarTexto("infoPago", valorApagar.toFixed(2));
    habilitarComponente("botonGuardar");
}

buscarRol = function (cedula) {
    for (let i = 0; i < roles.length; i++) {
        if (roles[i].cedula === cedula) {
            return roles[i];
        }
    }
    return null;
}

agregarRol = function (rol) {
    let rolEncontrado = buscarRol(rol.cedula)
    if (rolEncontrado === null) {
        roles.push(rol);
    }
}

calcularAporteEmpleador = function (sueldo) {
    let valorApagar = sueldo * (11.15 / 100);
    return valorApagar;
}

guardarRol = function () {
    let nombre = recuperarTextoDiv("infoNombre");
    let cedula = recuperarTextoDiv("infoCedula");
    let sueldo = recuperarFloatDiv("infoSueldo");
    let pago = recuperarFloatDiv("infoPago");
    let iess = recuperarFloatDiv("infoIESS");
    let sueldoEmpleado = calcularAporteEmpleador(sueldo);
    let rol = {};
    rol.cedula = cedula;
    rol.nombre = nombre;
    rol.sueldo = sueldo;
    rol.valorApagar = pago;
    rol.aporteEmpledo = iess;
    rol.aporteEmpledor = sueldoEmpleado;
    agregarRol(rol);
    alert("ROL GUARDADO CON EXITO");
    deshabilitarComponente("botonGuardar");


}

mostrarRoles = function () {
    let rol;
    let cmpTabla = document.getElementById("tablaResumen");
    let tabalaRoles = `
     <table>
        <thead>
            <tr><th>CEDULA</th>
            <th>NOMBRE</th>
            <th>SUELDO</th>
            <th>VALOR A PAGAR</th>
            <th>A. EMPLEADO</th>
            <th>A. EMPLEADOR</th></tr>
        </thead>
        <tbody>
    `;
    for(let i =0;i<roles,length;i++){
        rol=roles[i];
         tabalaRoles += "<tr><td>" + rol.cedula + "</td>";
        tabalaRoles += "<td>" + rol.nombre + "</td>";
        tabalaRoles += "<td>" + rol.sueldo + "</td>";
        tabalaRoles += "<td>" + rol.valorApagar + "</td>";
        tabalaRoles += "<td>" + rol.aporteEmpledo + "</td>";
        tabalaRoles += "<td>" + rol.aporteEmpledor + "</td></tr>";
    }
    tabalaRoles += `
        </tbody>
    </table>
    `;
    cmpTabla.innerHTML =tabalaRoles;
}

mostrarTotales=function(){
    let totalEmpleado;
    let totalEmpleador;
    let totalAPagar;
    for(let i =0;i<roles.length;i++){
        totalEmpleado+=roles[i];
        totalEmpleador+=roles[i];
        totalAPagar+=roles[i];
    }
    mostrarTexto("infoAporteEmpleado",totalEmpleado);
    mostrarTexto("infoAporteEmpresa",totalEmpleador);
    mostrarTexto("infoTotalPago",totalAPagar);
    let totalNomina=totalAPagar+totalEmpleado+totalEmpleador;
    mostrarTexto("infoNomina",totalNomina);

}

buscarPorRol = function () {
    let cedula = recuperarTexto("txtBusquedaCedulaRol");
    let empleadoEnconrado = buscarEmpleado(cedula);
    if (empleadoEnconrado !== null) {
        mostrarTexto("infoCedula", empleadoEnconrado.cedula);
        mostrarTexto("infoSueldo", empleadoEnconrado.sueldo);
        mostrarTexto("infoNombre", empleadoEnconrado.nombre + " " + empleadoEnconrado.apellido);
    } else {
        alert("EL EMPLEADO NO EXISTE");
    }
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
    deshabilitarComponente("botonGuardar");
    mostrarRoles();
}

mostrarOpcionResumen = function () {
    ocultarComponente("divEmpleado");
    ocultarComponente("divRol");
}