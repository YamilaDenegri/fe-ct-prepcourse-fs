  // Debes crear un nuevo objeto.
  // Este debe tener las propiedades: "nombre", "email" y "password" con sus respectivos valores.
  // Retorna el objeto creado.
  // Tu código:

function nuevoUsuario(nombre, email, password) {
  const usuario = {
    nombre: nombre,
    email: email,
    password: password
  };
  return usuario;
}

module.exports = nuevoUsuario;

