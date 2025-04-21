  // Encuentra el índice del número más grande en el array de números.
  // Devuelve el valor de este índice.
  // Tu código:

  function encontrarIndiceMayor(array) {
    // Encontramos el valor máximo del array usando Math.max y el operador spread
    const maxValor = Math.max(...array);
    
    // Encontramos y devolvemos el índice del valor máximo
    return array.indexOf(maxValor);
  }
  
  module.exports = encontrarIndiceMayor;
  