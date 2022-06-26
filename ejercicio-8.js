while(isNaN(num1)){
    var num1 = parseInt(prompt("Ingresar un numero: "));
}

while(isNaN(num2)){
    var num2 = parseInt(prompt("Ingresar un segundo numero: "));
}

    // Que pasa si capturan un numero = 0 , que pasaria con la division
    
var suma = num1 + num2;
var restar = num1 - num2;
var multiplicar = num1 * num2;
var dividir = num1 / num2;
    
alert("La suma es: " + suma);
alert("La resta es: " + restar);
alert("La multiplicación es: " + multiplicar);
alert("La dividición es: " + dividir);
    
document.write("<p>La suma es: " + suma);
document.write("<p>La resta es: " + restar);
document.write("<p>La multiplicación es: " + multiplicar);
document.write("<p>La dividición es: " + dividir);
    
console.log("La suma es: " + suma);
console.log("La resta es: " + restar);
console.log("La multiplicación es: " + multiplicar);
console.log("La dividición es: " + dividir);    





