  // El parámetro "objetoUsuario" tiene una propiedad llamada "posts" que es un arreglo.
  // Este arreglo contiene objetos (post).
  // Cada post posee una propiedad llamada "likes". Esta propiedad es un número.
  // Debes sumar los likes de todos los post y retornar el resultado.
  // Tu código:

function sumarLikesDeUsuario(objetoUsuario) {
  // Inicializamos una variable para acumular los likes
  let totalLikes = 0;

  // Iteramos sobre el arreglo de posts
  for (let i = 0; i < objetoUsuario.posts.length; i++) {
    // Sumamos los likes de cada post
    totalLikes += objetoUsuario.posts[i].likes;
  }

  // Retornamos el total de likes
  return totalLikes;
}

module.exports = sumarLikesDeUsuario;