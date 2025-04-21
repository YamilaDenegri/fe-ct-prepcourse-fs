  // Añade una nueva propiedad al objeto con su respectivo valor pasado por la función.
  // Tu código:

const agregarNuevaPropiedad = (objeto, propiedad, valor) => {
  // Añade la nueva propiedad al objeto con el valor pasado
  objeto[propiedad] = valor;
  // Retorna el objeto actualizado
  return objeto;
};

module.exports = agregarNuevaPropiedad;
