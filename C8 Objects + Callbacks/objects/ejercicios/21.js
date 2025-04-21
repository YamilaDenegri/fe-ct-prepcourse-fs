  // Agrega una propiedad al "objetoProducto" con el nombre "calcularPrecioDescuento".
  // Esta propiedad debe ser una función que multiplique el precio del producto por el porcentajeDeDescuento.
  // El "objetoProducto" posee una propiedad "precio" y una propiedad "porcentajeDeDescuento".
  // Luego debes restar del precio total del producto ese valor de descuento.
  // Retornar el precio final.
  // Ejemplo:
  // Precio ---> 10
  // PorcentajeDeDescuento ---> 0.2
  // Precio final ---> 8
  // Tu código:

function agregarMetodoCalculoDescuento(objetoProducto) {
  // Agregamos la propiedad "calcularPrecioDescuento" al objeto
  objetoProducto.calcularPrecioDescuento = function() {
    // Calculamos el descuento
    const descuento = this.precio * this.porcentajeDeDescuento;
    // Retornamos el precio final con el descuento aplicado
    return this.precio - descuento;
  };

  // Retornamos el objeto con la nueva propiedad
  return objetoProducto;
}

module.exports = agregarMetodoCalculoDescuento;

