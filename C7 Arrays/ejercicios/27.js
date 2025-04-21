  // El argumento "palabras" es un arreglo de strings.
  // Retorna un string donde todas las palabras estén concatenadas,
  // con un espacio entre cada palabra.
  // Ejemplo: ['Hello', 'world!'] -> 'Hello world!'.
  // Tu código:

  function dePalabrasAFrase(palabras) {
    // Usamos join para concatenar las palabras con un espacio entre ellas
    return palabras.join(' ');
  }
  
  module.exports = dePalabrasAFrase;
  
