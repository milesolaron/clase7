function probarValidarNombre() {
    console.assert(
      validarNombre('') === 'El campo nombre debe tener al menos 1 caracter',
      'Validar nombre no validó que el nombre no esté vacío'
    );
  
    console.assert(
      validarNombre(
        '111111111111111111111111111111111111111111111111111111111111111111111111111111111111111'
      ) === 'El campo debe tener menos de 50 caracteres',
      'Validar nombre no validó que el nombre sea menor a 50 caracteres'
    );
  
    console.assert(
      validarNombre('Milena') === '',
      'Validar nombre falló con un nombre válido'
    );
  
    console.assert(
      validarNombre('1231434') === 'El campo nombre solo acepta letras',
      'Validar nombre no validó que el nombre solo tenga letras'
    );
  }
  
  function probarValidarCiudad() {
    console.assert(
      validarCiudad('Buenos Aires') === '',
      'Validar ciudad no funcionó con un nombre de ciudad válido'
    );
  
    console.assert(
      validarCiudad('') === 'El campo ciudad no puede estar vacío',
      'Validar ciudad no mostró un error cuando la ciudad está vacía'
    );
  }
  
  function probarValidarDescripcionRegalo() {
    console.assert(
      validarDescripcionRegalo('') === 'El campo descripción no puede estar vacío',
      'La función validar descripción regalo no validó que el campo no esté vacío'
    );
  
    console.assert(
      validarDescripcionRegalo(
        'jdejiejejdejfirjfrijfiedejdeodjejdeodjejodedejoedjeodjededoedoedejdeodedoedejdjejdoejdejdjeojdoejdedededededededededededeedededededededede'
      ) === 'El campo descripción es muy largo',
      'La función validar descripción regalo no validó que el campo no sea muy largo'
    );
  
    console.assert(
      validarDescripcionRegalo('Regalo') === '',
      'La función validar descripción regalo no funcionó con una descripción correcta'
    );
  
    console.assert(
      validarDescripcionRegalo(',.,.,.') === 'El campo descripción solo puede contener números y letras',
      'La función validar descripción regalo no validó que solo tenga números y letras'
    );
  }
  
  probarValidarNombre();
  probarValidarCiudad();
  probarValidarDescripcionRegalo();
