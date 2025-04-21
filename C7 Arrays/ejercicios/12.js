  // Convierte a mayúsculas todos los strings del array.
  // Retorna el arreglo resultante.
  // Tu código:

  function convertirStringAMayusculas(array) {
    // Usamos map para recorrer el array y convertir a mayúsculas cada string
    return array.map(elemento => typeof elemento === 'string' ? elemento.toUpperCase() : elemento);
  }
  
  module.exports = convertirStringAMayusculas;
  
