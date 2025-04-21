  // Ordena los elementos del areglo array de menor a mayor.
  // Devuelve el arreglo resultante.
  // Tu código:

  function ordenarArray(array) {
    // Asegura que el array contenga elementos comparables, ya sea numéricos o alfabéticos
    return array.sort((a, b) => {
      if (typeof a === 'string' && typeof b === 'string') {
        return a.localeCompare(b); // Ordena alfabéticamente si son cadenas
      }
      return a - b; // Ordena numéricamente si son números
    });
  }
  
  module.exports = ordenarArray;
  