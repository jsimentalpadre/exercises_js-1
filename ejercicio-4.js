var numero1 = parseInt(prompt("Introduce un numero base: "));
var numero2 = parseInt(prompt("Introduce un numero final: "));
document.write("<h1>Ejercicio 4:</h1> <p>Mostrar todos los numeros IMPARES Que esten entre dos numeros introducidos por el usuario</p>")
for (var numero1; numero1 <= numero2; numero1++) {  
      if(numero1%2 == 0){    
      }else{
            console.log(numero1)
            document.write("<p>Numero impar: " + numero1 + "</p>");
      }
}