  // Multiplica cada elemento del array por su índice.
  // Devuelve el nuevo arreglo con los resultados.
  // Tu código:

function multiplicarElementosPorIndice(array) {
  // Usamos map para recorrer el array y multiplicar cada elemento por su índice
  return array.map((elemento, indice) => elemento * indice);
}

module.exports = multiplicarElementosPorIndice;
