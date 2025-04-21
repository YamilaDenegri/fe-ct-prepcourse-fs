  // Recibes un arreglo y un callback.
  // Itera sobre el arreglo y por cada elemento iterado, ejecuta el callback con este valor.
  // Tu código:

function forEach(array, cb) {
  // Iteramos sobre el array utilizando un bucle for
  for (let i = 0; i < array.length; i++) {
    // Ejecutamos el callback pasando el elemento actual (array[i])
    cb(array[i]);
  }
}

module.exports = forEach;

