//Funciones que realizan las validaciones
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

//Función que se encarga de gestionar posibles errores
function gestionarErrores(errores, $form) {
  const keys = Object.keys(errores);
  const $errores = document.querySelector("#errores");
  let cantidadErrores = 0;

  // Limpiar errores previos
  $errores.innerHTML = "";

  keys.forEach(function(key) {
    const error = errores[key];

    if (error) {
      cantidadErrores++;
      $form[key].className = "error";
      const $error = document.createElement("li");
      $error.innerText = error;

      $errores.appendChild($error);
    } else {
      $form[key].className = "";
    }
  });

  return cantidadErrores;
}
//Función que valida el formulario, muestra cualquier error que tenga el usuario y muestra si ha tenido éxito en la carga de su formulario
function validarFormulario(event) {
  event.preventDefault();

  const $form = document.querySelector("#carta-a-santa");
  const $nombre = $form.nombre.value;
  const $ciudad = $form.ciudad.value;
  const $descripcionRegalo = $form["descripcion-regalo"].value;

  const errorNombre = validarNombre($nombre);
  const errorCiudad = validarCiudad($ciudad);
  const errorDescripcionRegalo = validarDescripcionRegalo($descripcionRegalo);

  const errores = {
    nombre: errorNombre,
    ciudad: errorCiudad,
    "descripcion-regalo": errorDescripcionRegalo
  };

  const exito = gestionarErrores(errores, $form) === 0;

  if (exito) {
    $form.className = "oculto";
    document.querySelector("#exito").className = "";
    setTimeout(function() {
      window.open("./wishlist.html");
    }, 5000);
  }
}

const $formulario = document.querySelector("#carta-a-santa");
$formulario.addEventListener("submit", validarFormulario);

  }
