  // El parámetro "objetoUsuario" tiene una propiedad llamada "amigos" igual a un arreglo.
  // Debes agregar el "nuevoAmigo" al final de este arreglo.
  // Retornar el objeto.
  // Tu código:

function agregarAmigo(objetoUsuario, nuevoAmigo) {
  objetoUsuario.amigos.push(nuevoAmigo);
  return objetoUsuario;
}

module.exports = agregarAmigo;
