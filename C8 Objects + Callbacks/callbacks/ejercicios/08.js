  // Busca un elemento en el array y retornalo.
  // Si el elemento no se encuentra, devuelve el mensje "No se encontró el elemento".
  // La función de callback es la encargada de evaluar si el elemento fue encontrado.
  // Tu código:

  const buscarElemento = (array, callback) => {
    // Iteramos sobre el arreglo
    for (let i = 0; i < array.length; i++) {
      // Si el callback evalúa que encontramos el elemento, lo retornamos
      if (callback(array[i])) {
        return array[i];
      }
    }
    // Si no encontramos el elemento, retornamos el mensaje correspondiente
    return "No se encontró el elemento";
  };
  
  module.exports = buscarElemento;
  
