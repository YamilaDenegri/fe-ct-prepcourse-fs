  // Devuelve un arreglo solo con los números pares presentes en el array.
  // Tu código:

function filtrarNumerosPares(array) {
  // Filtramos los elementos del array que son números pares
  return array.filter(elemento => typeof elemento === 'number' && elemento % 2 === 0);
}

module.exports = filtrarNumerosPares;

