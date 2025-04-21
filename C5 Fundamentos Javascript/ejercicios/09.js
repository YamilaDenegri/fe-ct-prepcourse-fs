  // La función recibe un argumento llamado valor.
  // Si este valor es null o undefined, retorna true.
  // De lo contrario, retorna false.
  // Por ejemplo: 
  // null ---> true 
  // undefined ---> true 
  // 22 ---> false
  // "texto" ---> false
  // Tu código:

function esNuloOIndefinido(valor) {
  return valor === null || valor === undefined;
}

module.exports = esNuloOIndefinido;
