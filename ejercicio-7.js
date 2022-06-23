/*
Ejercicio 7

Hacer un programa con las tabla(s) de multiplicar
1.- Para el Numero Introducido ( Ventana Promt)
2.- PLUS: Para todas las tablas de Multiplicar del 1 hasta el Numero Introducido

*/

var num1 = parseInt(prompt("Introduce un numero"));
var multiplicar = 0;

for (var num1; num1 > 0;) {
    
    for(var i = 1; i < 11; i++){
        multiplicar = num1*i;
        document.write("<p> "+num1+ " x "+ i + " = " + multiplicar);
        if(i == 10){
            document.write("<Hr>")
            num1--;
        }
    }
    

    

}

// 7 -> 1