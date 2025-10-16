let empleados = [
    { cedula: "1714616123", nombre: "John", apellido: "Cena", sueldo: 500.0 },
    { cedula: "0914632123", nombre: "Luisa", apellido: "Gonzalez", sueldo: 900.0 },
    { cedula: "1578985547", nombre: "Mateo", apellido: "Perez", sueldo: 1000.0 }

]
let esNuevo = false;

ejecutarNuevo = function () {
    esNuevo = true;
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