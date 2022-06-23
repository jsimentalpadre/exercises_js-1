/*
Ejercicio 2

- Utilizando un bucle, mostrar la suma y la media de los numeros introducidos
- hasta introducir un numero negativo y ahi mostrar el resultado
*/
var numbers = parseInt(prompt("Introduzca un numero:"));
var suma = 0;
var media = 0;
var contador = 0;
while( numbers >= 0){

    var numbers = parseInt(prompt("Introduzca un numero:"));
    console.log(numbers);
    suma += numbers;
    contador++;

    
}

media = suma/contador;

document.write("<p>La suma es: " + suma);
console.log("La suma es: " + suma);

document.write("<p>La media es: " + media);
console.log("La media es: " + media);