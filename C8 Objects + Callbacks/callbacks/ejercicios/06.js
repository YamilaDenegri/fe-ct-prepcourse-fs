  // Itera sobre el arreglo y por cada elemento, pasárselo como argumento al callback.
  // Tiene que guardar el resultado devuelto por el callback en cada elemento dentro de un nuevo arreglo.
  // Retorna el nuevo arreglo.
  // Tu código:

function map(array, cb) {
  // Creamos un nuevo arreglo donde guardaremos los resultados
  const resultado = [];
  
  // Iteramos sobre el array
  for (let i = 0; i < array.length; i++) {
    // Ejecutamos el callback con el elemento actual y lo agregamos al resultado
    resultado.push(cb(array[i]));
  }

  // Retornamos el nuevo arreglo con los resultados
  return resultado;
}

module.exports = map;
