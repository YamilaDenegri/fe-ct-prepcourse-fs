  // El array contiene algunos meses del año desordenados. Debes recorrerlo, buscar los meses "Enero",
  // "Marzo" y "Noviembre", guardarlos en un nuevo arreglo y retornarlo.
  // Si alguno de los meses no está, retornar el string: "No se encontraron los meses pedidos".
  // Tu código:

  function mesesDelAño(array) {
    const mesesBuscados = ['Enero', 'Marzo', 'Noviembre'];
    const encontrados = [];
  
    for (let i = 0; i < array.length; i++) {
      if (mesesBuscados.includes(array[i])) {
        encontrados.push(array[i]);
      }
    }
  
    if (encontrados.length === 3) {
      return encontrados;
    } else {
      return "No se encontraron los meses pedidos";
    }
  }
  
  module.exports = mesesDelAño;
  