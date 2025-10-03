calcularTasaInteres = function(ingresoAnual){
    let tasa;

    if(ingresoAnual < 300000){
        tasa = 16;
    }else if(ingresoAnual >= 300000 && ingresoAnual < 500000){
        tasa = 15;
    }else if(ingresoAnual >= 500000 && ingresoAnual < 1000000){
        tasa = 14;
    }else if(ingresoAnual >= 1000000 && ingresoAnual < 2000000){
        tasa = 13;
    }else if(ingresoAnual >= 2000000){
        tasa = 12;
    }else{
        tasa = 0;
    }

    return tasa;
}

calcularCapacidadPago = function(edad, ingresos, egresos){
    let capacidad;
    let disponible = ingresos - egresos;

    if(disponible < 0){
        capacidad = 0;
    }else if(edad > 50){
        capacidad = disponible * 0.30;
    }else{
        capacidad = disponible * 0.40;
    }

    return capacidad;
}

calcularDescuento = function(precio, cantidad){
    let total = precio * cantidad;
    let descuento = 0;

    if(cantidad < 3){
        descuento = 0; // no hay descuento
    }else if(cantidad >= 3 && cantidad <= 5){
        descuento = total * 0.02; // 2%
    }else if(cantidad >= 6 && cantidad <= 11){
        descuento = total * 0.03; // 3%
    }else if(cantidad >= 12){
        descuento = total * 0.04; // 4%
    }

    let totalPagar = total - descuento;
    return totalPagar;
}

determinarColesterolLDL = function(nivelColesterol){
    let categoria = "";

    if(nivelColesterol < 100){
        categoria = "Óptimo";
    } else if(nivelColesterol >= 100 && nivelColesterol <= 129){
        categoria = "Casi óptimo";
    } else if(nivelColesterol >= 130 && nivelColesterol <= 159){
        categoria = "Límite alto";
    } else if(nivelColesterol >= 160 && nivelColesterol <= 189){
        categoria = "Alto";
    } else if(nivelColesterol >= 190){
        categoria = "Muy alto";
    } else {
        categoria = "Dato incorrecto";
    }

    return categoria;
}

validarClave = function(clave){
    let longitud = clave.length;
    if(longitud >= 8 && longitud <= 16){
        return true;   
    } else {
        return false;
    }
}

esMayuscula = function(caracter){
    let codigo = caracter.charCodeAt(0); 
    if(codigo >= 65 && codigo <= 90){
        return true;   
    } else {
        return false;  
    }
}

esMinuscula = function(caracter){
    let codigo = caracter.charCodeAt(0);

    // minúsculas sin tilde: a-z
    if(codigo >= 97 && codigo <= 122){
        return true;
    }
    // minúsculas con tilde y ñ
    if(caracter=='á' || caracter=='é' || caracter=='í' || caracter=='ó' || caracter=='ú' || caracter=='ñ'){
        return true;
    }
    return false;
}

esDigito = function(caracter){
    let codigo = caracter.charCodeAt(0);

    // dígitos: 0-9
    if(codigo >= 48 && codigo <= 57){
        return true;
    }

    return false;
}

darPermiso = function(notaMatematica, notaFisica, notaGeometria){
    if(notaMatematica > 90 || notaFisica > 90 || notaGeometria > 90){
        return true;
    }
    return false;
}

otorgarPermiso = function(notaMatematica, notaFisica, notaGeometria){
    if((notaMatematica > 90 || notaFisica > 90) && notaGeometria > 80){
        return true;
    }
    return false;
}

dejarSalir = function(notaMatematica, notaFisica, notaGeometria){
    if((notaMatematica > 90 || notaFisica > 90 || notaGeometria > 90) && notaFisica > notaMatematica){
        return true;
    }
    return false;
}