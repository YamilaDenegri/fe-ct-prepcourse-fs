  // Cuenta y retorna el total de propiedades que tiene el objeto.
  // PISTA: Puedes iterarlo usando el bucle for-in.
  // Tu código:

const contarPropiedades = (objeto) => {
  let contador = 0;
  
  // Itera sobre las propiedades del objeto
  for (let propiedad in objeto) {
    // Incrementa el contador por cada propiedad encontrada
    contador++;
  }

  // Retorna el total de propiedades
  return contador;
};

module.exports = contarPropiedades;

