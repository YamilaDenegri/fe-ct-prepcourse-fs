  // El parámetro "metodo" es un string que coincide con el nombre de una propiedad del objeto recibido.
  // Esta propiedad contiene una función en su interior. Debes invocarla/ejecutarla.
  // NOTA: no necesitas retornar nada.
  // Tu código:

function invocarMetodo(objeto, metodo) {
  objeto[metodo]();
}

module.exports = invocarMetodo;
