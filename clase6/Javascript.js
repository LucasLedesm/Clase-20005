class Vacunas {
    constructor(nombre, apellido, edad, cantidad, nombreVacuna) {
        this.nombre = nombre;
        this.apellido = apellido;
        this.edad = parseInt(edad);
        this.cantidad = cantidad;
        this.disponible = true;
        this.nombreVacuna = nombreVacuna;
    }
    vender() {
        this.disponible = false;
    }
}

var arrayVacunas = [];
do {
    var comprobacion = prompt("ingrese el nombre de la vacuna que necesita o fin");
    if (comprobacion === "fin" || comprobacion === "Fin" || comprobacion === "FIN") {
        break;
    } else {
        vacunaCliente = comprobacion;
        var nombreCliente = prompt("Ingrese su nombre");
        var apellidoCliente = prompt("Ingrese su apellido");
        var edadCliente = parseInt(prompt("ingrese su edad"));
        arrayVacunas.push(new Vacunas(vacunaCliente, nombreCliente, apellidoCliente, edadCliente));
    }

} while (comprobacion != "fin" || comprobacion != "Fin" || comprobacion != "FIN")

console.log(arrayVacunas);

for (var vacuna of arrayVacunas) {
    document.write("<ul><li><h3>nombre: " + vacuna.nombre + "</h3></li>");
    document.write("<li><h3>apellido: " + vacuna.apellido + "</h3></li>")
    document.write("<li><h3>edad: " + vacuna.edad + "</h3></li></ul><br>");
    console.log(vacuna.nombre);
    console.log(vacuna.apellido);
    console.log(vacuna.edad);
}

var sinStock = arrayVacunas.filter(vacuna => vacuna.cantidad == 0 || vacuna.cantidad == false);
console.log(sinStock);
document.write("<h3> no hay stock de vacunas </h3>");

for (var vacuna of sinStock) {
    document.write("<ul><li><h3> nombre: " + vacuna.nombre + "</h3></li>");
    document.write("<li><h3>apellido: " + vacuna.apellido + "</h3></li>");
    document.write("<li><h3>edad: " + vacuna.edad + "</h3></li></ul><br>");
}
var buscar = prompt("ingresa el nombre de la vacuna que deseas consultar");
var vacunaIngresada = arrayVacunas.filter(vacuna => vacuna.nombreVacuna.includes(buscar));
console.log(vacunaIngresada);
document.write("<h3> Su vacuna: </h3>");
for (var vacuna of vacunaIngresada) {
    document.write("<ul><li><h3>nombre: " + vacuna.nombreVacuna + "</h3></li>");
    document.write("<li><h3>cantidad: " + vacuna.cantidad + "</h3></li></ul><br>");
}