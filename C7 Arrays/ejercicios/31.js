  // La función recibe un argumento "texto" que es un string.
  // Tu objetivo es invertir el string y devolver el string invertido.
  // Tu código:

  function invertirTexto(texto) {
    // Usamos split para convertir el string en un array de caracteres, reverse para invertirlo y join para convertirlo nuevamente en un string
    return texto.split('').reverse().join('');
  }
  
  module.exports = invertirTexto;
  
