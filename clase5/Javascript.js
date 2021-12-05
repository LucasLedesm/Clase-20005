const IVA_GENERAL = 1.21;
const IVA_REDUCIDO = 1.10;
const precioCliente = parseInt(prompt("ingresa el precio"));
const cantidadCliente = parseInt(prompt("ingresa la cantidad"));

const item1 = {
    precio: 25,
    cantidad: 2,
    impuestos: IVA_GENERAL,
    calcularTotal: function () {
        return this.precio * this.cantidad * this.impuestos
    }
}

const item2 = {
    precio: precioCliente,
    cantidad: cantidadCliente,
    impuestos: IVA_REDUCIDO,
    calcularTotal: function () {
        return this.precio * this.cantidad * this.impuestos
    }
}
const factura = {
    item1,
    item2,
    calcularTotal: function () {
        return this.item1.calcularTotal() + this.item2.calcularTotal()

    }

}

alert("el total a abonar es de " + factura.calcularTotal() + "$")