function probarValidarNombre() {
  console.assert(
      validarNombre('') === 'Este campo debe tener al menos 1 caracter',
      'Validar nombre no validó que el nombre no sea vacío',
  );

  console.assert(
      validarNombre(
          '111111111111111111111111111111111111111111111111111111111111111111111111111111111111111') ===
      'Este campo debe tener menos de 50 caracteres',
      'Validar nombre no validó que el nombre sea menor a 50 caracteres',
  );

  console.assert(
    validarNombre("Milena") === "",
    "validarNombre falló con un nombre válido"
);
}


function probarValidarCiudad() {
    console.assert(
        validarCiudad("Buenos Aires") === "",
        "Validar ciudad no funcionó con un nombre de ciudad válido"
    );

    console.assert(
        validarCiudad("") === "El campo ciudad no puede estar vacío",
        "Validar ciudad no mostró un error cuando la ciudad está vacía"
    );
}

function probarValidarDescripcionRegalo() {

console.assert(
    validarDescripcionRegalo("") ===
    "El campo descripción no puede estar vacío",
    "La función validar descripción regalo no validó que el campo no esté vacío"
);

console.assert(
    validarDescripcionRegalo("jdejiejejdejfirjfrijfiedejdeodjejdeodjejodedejoedjeodjededoedoedejdeodedoedejdjejdoejdejdjeojdoejdedededededededededededeedededededededede"
    ) === "El campo descripción es muy largo",
    "La función validar descripción regalo no validó que el campo no sea muy largo"
);

console.assert(
    validarDescripcionRegalo("Regalo") === "",
    "La función validar descripción regalo no funcionó con una descripción correcta"

);
}

probarValidarNombre();
probarValidarCiudad();
probarValidarDescripcionRegalo();