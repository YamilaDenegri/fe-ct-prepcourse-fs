  // La función recibe un argumento "arr".
  // Comprueba si este argumento es un array y si tiene al menos un elemento.
  // Si es así, retorna true, de lo contrario, retorna false.
  // Tu código:

  function esArrayNoVacio(arr) {
    // Comprobamos si arr es un array y si tiene al menos un elemento
    return Array.isArray(arr) && arr.length > 0;
  }
  
  module.exports = esArrayNoVacio;
  