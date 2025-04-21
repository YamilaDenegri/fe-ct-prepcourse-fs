  // Si el número recibido tiene tres dígitos, retorna true.
  // Caso contrario, retorna false.
  // Tu código:

  function tieneTresDigitos(num) {
    return Math.abs(num) >= 100 && Math.abs(num) <= 999;
  }
  
  
  module.exports = tieneTresDigitos;
  
