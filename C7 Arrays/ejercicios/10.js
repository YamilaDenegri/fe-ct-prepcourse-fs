  // Devuelve el primer string con más de 5 caracteres en el array.
  // Tu código:

  function obtenerPrimerStringLargo(array) {
    return array.find(item => typeof item === 'string' && item.length > 5);
  }
  
  module.exports = obtenerPrimerStringLargo;
  