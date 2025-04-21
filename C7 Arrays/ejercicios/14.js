  // Cuenta y devuelve la cantidad de elementos mayores a 10 en el array de números.
  // Tu código:

function contarElementosMayoresA10(array) {
  // Filtramos los elementos mayores a 10 y contamos su cantidad
  return array.filter(elemento => elemento > 10).length;
}

module.exports = contarElementosMayoresA10;
