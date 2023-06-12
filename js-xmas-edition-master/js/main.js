function validarCiudad(ciudad) {
    if (ciudad.length === 0) {
        return "El campo ciudad no puede estar vacío";
    }
    return "";
}

function validarDescripcionRegalo(descripcionRegalo) {
    if (descripcionRegalo.length >= 100) {
        return "El campo descripción es muy largo";
    }

    if (descripcionRegalo.length === 0) {
        return "El campo descripción está vacío"
    } else {
        return "";
    }
} 

function validarNombre(nombre) {
    if (nombre.length === 0) {
        return "El campo nombre debe tener al menos 1 caracteres"
    }

    if (nombre.length >= 50) {
        return "El campo debe tener menos de 50 caracteres"
    }

    return "";
}
