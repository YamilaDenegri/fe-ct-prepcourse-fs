   // Verifica si el objeto posee la propiedad recibida.
   // Retorna true si la tiene, sino retorna false.
   // PISTA: puedes usar el método hasOwnProperty().
   // Tu código:

const verificarPropiedad = (objeto, propiedad) => {
   // Verifica si el objeto tiene la propiedad usando hasOwnProperty
   return objeto.hasOwnProperty(propiedad);
};

module.exports = verificarPropiedad;

