  // Itera sobre los elementos del arreglo resultadosTest y devuelve el promedio de las notas.
  // Tu código:

  function promedioResultadosTest(resultadosTest) {
    // Sumamos todos los elementos y dividimos por la cantidad
    const suma = resultadosTest.reduce((acum, nota) => acum + nota, 0);
    return suma / resultadosTest.length;
  }
  
  module.exports = promedioResultadosTest;
  
