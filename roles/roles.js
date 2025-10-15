let empleados = [
    { cedula: "1714616123", nombre: "John", apellido: "Cena", sueldo: 500.0 },
    { cedula: "0914632123", nombre: "Luisa", apellido: "Gonzalez", sueldo: 900.0 },
    { cedula: "1578985547", nombre: "Mateo", apellido: "Perez", sueldo: 1000.0 }

]

mostrarEmpleados=function(){
    let empleado;
    let cmpTabla=document.getElementById("tablaEmpleados");
    let tabalaEmpleado="<table><tr><th>CEDULA</th><th>NOMBRE</th><th>APELLIDO</th><th>SUELDO</th></tr>"
    for(let i=0;i<empleados.length;i++){
        empleado=empleados[i];
        tabalaEmpleado+="<tr><td>"+empleado.cedula+"</td>";
        tabalaEmpleado+="<td>"+empleado.nombre+"</td>";
        tabalaEmpleado+="<td>"+empleado.apellido+"</td>";
        tabalaEmpleado+="<td>"+empleado.sueldo+"</td></tr>";
    }
    tabalaEmpleado+="</table";
    cmpTabla.innerHTML=tabalaEmpleado;

}

mostrarOpcionEmpleado = function () {
    ocultarComponente("divRol");
    ocultarComponente("divResumen");
    mostrarEmpleados();
}

mostrarOpcionRol = function () {
    ocultarComponente("divEmpleado");
    ocultarComponente("divResumen");
}

mostrarOpcionResumen = function () {
    ocultarComponente("divEmpleado");
    ocultarComponente("divRol");
}