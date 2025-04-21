  // La función recibe un argumento "numeros" correspondiente a un array de números.
  // Encuentra el número faltante en una secuencia de números enteros consecutivos
  // y retórnalo.
  // Devuelve null si el array es vacío o si no hay números faltantes.
  // Tu código:

  function encontrarNumeroFaltante(numeros) {
    // Si el array está vacío o tiene un solo elemento, no podemos encontrar el número faltante
    if (numeros.length === 0) return null;
  
    // Encontramos el valor mínimo y máximo del array
    const min = Math.min(...numeros);
    const max = Math.max(...numeros);
  
    // Creamos un set de todos los números entre min y max
    const setNumeros = new Set(numeros);
  
    // Recorremos la secuencia desde min hasta max
    for (let i = min; i <= max; i++) {
      if (!setNumeros.has(i)) {
        return i; // Retornamos el primer número faltante
      }
    }
  
    // Si no falta ningún número, retornamos null
    return null;
  }
  
  module.exports = encontrarNumeroFaltante;
  