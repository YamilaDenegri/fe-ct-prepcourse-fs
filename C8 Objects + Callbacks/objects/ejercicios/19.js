  // El parámetro "objetoMuchosUsuarios" es un arreglo de objetos (usuarios).
  // Cada usuario tiene una propiedad llamada "esPremium".
  // Define esta propiedad de todos los usuarios como true.
  // Retornar el arreglo.
  // Tu código:

function pasarUsuarioAPremium(objetoMuchosUsuarios) {
  // Iteramos sobre el arreglo de usuarios y asignamos true a la propiedad esPremium de cada uno
  for (let i = 0; i < objetoMuchosUsuarios.length; i++) {
    objetoMuchosUsuarios[i].esPremium = true;
  }
  // Retornamos el arreglo actualizado
  return objetoMuchosUsuarios;
}

module.exports = pasarUsuarioAPremium;

