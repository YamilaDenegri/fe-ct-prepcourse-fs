  // Verifica si la propiedad "password" del "objetoUsuario" coincide con el parámetro "password".
  // En ese caso, retorna true. Caso contrario, false.
  // Tu código:

function verificarPassword(objetoUsuario, password) {
  return objetoUsuario.password === password;
}

module.exports = verificarPassword;
