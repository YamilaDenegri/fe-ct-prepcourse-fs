  // La función recibe un argumento "numeros" que es un array de números.
  // Retorna el primer elemento repetido que se encuentre en el array.
  // Tu código:

  function encontrarElementoRepetido(numeros) {
    // Creamos un conjunto para realizar un seguimiento de los elementos que ya hemos visto
    const elementosVistos = new Set();
  
    for (let i = 0; i < numeros.length; i++) {
      // Si el número ya está en el conjunto, lo retornamos como el primer repetido
      if (elementosVistos.has(numeros[i])) {
        return numeros[i];
      }
      // Si el número no está, lo agregamos al conjunto
      elementosVistos.add(numeros[i]);
    }
  
    // Si no se encuentra ningún número repetido, retornamos null
    return null;
  }
  
  module.exports = encontrarElementoRepetido;
  