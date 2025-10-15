let clientes = [
    { cedula: "17547565", nombre: "Juan", edad: 20 },
    { cedula: "17549865", nombre: "Leo", edad: 56 },
    { cedula: "1789465", nombre: "Pepe", edad: 30 }
];

guardarCambios = function () {
    let valorCedula = recuperarTexto("txtCedula");
    let valorNombre = recuperarTexto("txtNombre");
    let valorEdad = recuperarFloat("txtEdad");

    let datosCliente = {};
    datosCliente.cedula = valorCedula;
    datosCliente.nombre = valorNombre;
    datosCliente.edad = valorEdad;

    modificarCliente(datosCliente);
    mostrarClientes();
}

modificarCliente = function (cliente) {
    let clienteEncontrado = buscarCliente(cliente.cedula);
    if (clienteEncontrado != null) {
        clienteEncontrado.nombre = cliente.nombre;
        clienteEncontrado.edad = cliente.edad;
    }

}

ejecutarBusqueda = function () {
    let valorCedula = recuperarTexto("txtCedulaBusqueda");
    let cliente = buscarCliente(valorCedula);
    if (cliente == null) {
        alert("cliente no encontrado");
    } else {
        mostrarTextoEnCaja("txtCedula", cliente.cedula);
        mostrarTextoEnCaja("txtNombre", cliente.nombre);
        mostrarTextoEnCaja("txtEdad", cliente.edad);
    }
}

crearCliente = function () {
    let valorCedula = recuperarTexto("txtCedula");
    let valorNombre = recuperarTexto("txtNombre");
    let valorEdad = recuperarFloat("txtEdad");

    let nuevoCliente = {};
    nuevoCliente.cedula = valorCedula;
    nuevoCliente.nombre = valorNombre;
    nuevoCliente.edad = valorEdad;

    agregarClientes(nuevoCliente);

}

agregarClientes = function (cliente) {
    let resultado;
    resultado = buscarCliente(cliente.cedula);
    if (resultado == null) {
        clientes.push(cliente);
        alert("cliente agregado");
        mostrarClientes();
    } else {
        alert("ya existe un cliente con esa cedula: " + cliente.cedula);
    }

}

buscarCliente = function (cedula) {
    let elemtoCliente;
    let clienteEncontrado;
    for (let i = 0; i < clientes.length; i++) {
        elemtoCliente = clientes[i];
        if (elemtoCliente.cedula == cedula) {
            clienteEncontrado = elemtoCliente;
            break;
        }
    }
    return clienteEncontrado;
}

mostrarClientes = function () {
    let cmpTabla = document.getElementById("tablaClientes");
    let contenidoTabla = "<table><tr>" +
        "<th>CEDULA</th>" +
        "<th>NOMBRE</th>" +
        "<th>EDAD</th>" +
        "</tr>";
    let elemtoCliente
    for (let i = 0; i < clientes.length; i++) {
        elemtoCliente = clientes[i];
        contenidoTabla +=
            "<tr><td>" + elemtoCliente.cedula + "</td>"
            + "<td>" + elemtoCliente.nombre + "</td>"
            + "<td>" + elemtoCliente.edad + "</td>"
            + "</tr>";
    }
    contenidoTabla += "</table>";
    cmpTabla.innerHTML = contenidoTabla;
}