  // Dados dos argumentos "a" y "b", devuelve el producto de todos
  // los números entre a y b (inclusive).
  // Tu código:

  function productoEntreNúmeros(a, b) {
    let min = Math.min(a, b);
    let max = Math.max(a, b);
  
    // Si alguno de los números es 0 y está dentro del rango, el producto será 0
    if (min <= 0 && max >= 0) return 0;
  
    let producto = 1;
    for (let i = min; i <= max; i++) {
      producto *= i;
    }
  
    return producto;
  }
  

module.exports = productoEntreNúmeros;
