let numero1 = parseInt (prompt("ingresa el monto a abonar!"));
let iva = 0.21;
function calcularIva (numero1,iva=1){
    let ivatotal = numero1 * iva;
    alert("su importe a abonar es de " + (numero1 + ivatotal) + "$ con iva incluido");
}

calcularIva(numero1,iva);