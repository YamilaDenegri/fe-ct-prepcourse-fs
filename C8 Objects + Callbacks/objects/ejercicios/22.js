   // La función recibe dos argumentos "str1" y "str2" que son strings.
   // Determina si los dos strings son anagramas.
   // Devuelve true de ser así, sino retorna false.
   // IMPORTANTE: Un anagrama es una palabra que se forma
   // con las mismas letras que otra, pero en orden diferente.
   // Tu código:

   function esAnagrama(str1, str2) {
      // Si los strings tienen diferente longitud, no pueden ser anagramas
      if (str1.length !== str2.length) {
        return false;
      }
    
      // Ordenamos las letras de ambos strings y comparamos si son iguales
      const ordenadoStr1 = str1.split('').sort().join('');
      const ordenadoStr2 = str2.split('').sort().join('');
    
      // Si los strings ordenados son iguales, son anagramas
      return ordenadoStr1 === ordenadoStr2;
    }
    
    module.exports = esAnagrama;
    