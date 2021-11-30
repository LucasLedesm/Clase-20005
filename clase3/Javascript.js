let entrada = parseInt( prompt("Ingresa un numero"));
while( entrada > 0) {
    alert("el numero que le sigue es: " + (entrada+1));
    entrada = parseInt (prompt("ingresa otro numero o 0 para cancelar"))
}