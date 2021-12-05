class persona {
    constructor(nombre, apellido) {
        this.nombre = nombre;
        this.apellido = apellido;
    }
    saludar() {
        console.log("hola: " + this.nombre + this.apellido)}
}
const persona1 = new persona (prompt("Nombre:"), ( prompt("apellido: ")));
const persona2 = new persona (prompt("Nombre:"), ( prompt("apellido: ")));
persona1.saludar();
persona2.saludar();