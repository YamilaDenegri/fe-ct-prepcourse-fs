   // Recibes un arreglo de números y un callback.
   // Suma todos los números del arreglo.
   // Este resultado debes pasárselo como argumento al callback recibido.
   // NOTA: no debes retornar nada.
   // Tu código:

function sumarArray(arrayOfNumbers, cb) {
   // Sumamos todos los números del arreglo utilizando reduce
   const suma = arrayOfNumbers.reduce((acc, num) => acc + num, 0);
   
   // Llamamos al callback con el resultado de la suma
   cb(suma);
 }
 
 module.exports = sumarArray;
 