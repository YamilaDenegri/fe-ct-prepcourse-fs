   // Aplica la función de callback al string y devuelve el resultado.
   // La función de callback se encargará de recibir el string y devolverlo con los cambios.
   // Si no se recibe una función callback entonces se debe retornar el string original.
   // Tu código:

function cambiarCadena(string, callback) {
   // Verificamos si el callback es una función antes de invocarla
   if (typeof callback === 'function') {
     return callback(string); // Aplicamos el callback al string
   }
   // Si no hay callback, retornamos el string original
   return string;
 }
 
 module.exports = cambiarCadena;
 
