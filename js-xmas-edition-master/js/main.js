// Funciones que se encargan de validar que los datos sean correctos en todos los campos.

function validarNombre(nombre) {
    if (nombre.length === 0) {
      return "El campo nombre debe tener al menos 1 caracter";
    }
  
    if (nombre.length >= 50) {
      return "El campo debe tener menos de 50 caracteres";
    }
  
    if (!/^[a-zA-Z\sáéíóúÁÉÍÓÚñÑüÜ]+$/u.test(nombre)) {
      return "El campo nombre solo acepta letras";
    }
  
    return "";
  }
  
  function validarCiudad(ciudad) {
    if (ciudad.length === 0) {
      return "El campo ciudad no puede estar vacío";
    }
  
    return "";
  }
  
  function validarDescripcionRegalo(descripcionRegalo) {
    if (descripcionRegalo.length === 0) {
      return "El campo descripción no puede estar vacío";
    }
  
    if (descripcionRegalo.length >= 100) {
      return "El campo descripción es muy largo";
    }
  
    if (!/^[a-z0-9]+$/i.test(descripcionRegalo)) {
      return "El campo descripción solo puede contener números y letras";
    }
  
    return "";
  }
  
  // Función que envía la carta
  function enviarCarta() {
    const $nombre = document.getElementById("nombre").value;
    const $ciudad = document.getElementById("ciudad").value;
    const $descripcionRegalo = document.getElementById("descripcion-regalo").value;

// Funciones que se encargan de manejar los posibles errores.

  const errorNombre = validarNombre($nombre);
  if (errorNombre) {
    document.getElementById("nombre").classList.add("error");
    alert(errorNombre);
    return;
  }

  const errorCiudad = validarCiudad($ciudad);
  if (errorCiudad) {
    document.getElementById("ciudad").classList.add("error");
    alert(errorCiudad);
    return;
  }

  const errorDescripcion = validarDescripcionRegalo($descripcionRegalo);
  if (errorDescripcion) {
    document.getElementById("formulario-carta").style.display = "none";
    document.getElementById("exito").style.display = "block";
  }
  }
