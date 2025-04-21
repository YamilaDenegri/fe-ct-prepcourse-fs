  // Duplica (multiplica x2) cada elemento del array de números.
  // Devuelve un array con los duplicados.
  // Tu código:}

function duplicarElementos(array) {
  // Usamos map para recorrer el array y duplicar cada elemento
  return array.map(elemento => elemento * 2);
}

module.exports = duplicarElementos;
