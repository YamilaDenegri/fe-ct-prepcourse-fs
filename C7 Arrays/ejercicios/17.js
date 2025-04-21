  // Suma todos los elementos de arrayOfNums y retorna el resultado.
  // Tu código:

function agregarNumeros(arrayOfNums) {
  // Usamos reduce para sumar todos los elementos del array
  return arrayOfNums.reduce((acum, num) => acum + num, 0);
}

module.exports = agregarNumeros;

