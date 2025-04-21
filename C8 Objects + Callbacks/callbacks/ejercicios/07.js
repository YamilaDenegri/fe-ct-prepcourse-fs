   // Debes identificar todos los elementos el arreglo que comiencen con la letra "a".
   // Luego retorna un nuevo arreglo con estos elementos.
   // Tu código:

function filter(arrayOfStrings) {
   // Usamos el método filter para seleccionar los elementos que comienzan con "a"
   return arrayOfStrings.filter(str => str[0].toLowerCase() === 'a');
 }
 
 module.exports = filter;
 