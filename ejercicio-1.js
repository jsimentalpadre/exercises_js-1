document.write("<h1>Ejercicio 1:</h1> <p>- Programa que pida dos numeros y que nos diga cual es mayor , cual menor y si son iguales- PLUS: Si los numeros no son numeros o son menores o iguales a cero, nos los vuelva a pedir</p>")

//Funcion para ver si el numero es mayor, menor o igual
function MayorMenor(){ 

    if(num1 > num2){
        document.write("El numero " + num1 + " es mayor que " + num2);
        console.log("El numero " + num1 + " es mayor que " + num2);
    }else if(num1 < num2){
        document.write("El numero " + num1 + " es menor que " + num2);
        console.log("El numero " + num1 + " es menor que " + num2);
    }else if(num1 == num2){
        console.log("Los numeros " + num1 + " y " + num2 + " son iguales.");
        document.write("Los numeros " + num1 + " y " + num2 + " son iguales.");
    }

} 

//Recibe un valor
var num1 = prompt("Dame el valor 1",0);

//Si el numero es igual al tipo number o es igual/mayor a 0
if(num1 == Number || num1 >= 0){
    
    //Recibe un segundo valor
    var num2 = prompt("Dame el valor 2",0);

    //Si el numero es igual al tipo number o es igual/mayo a 0
    if( num2 == Number  || num2 >= 0 ){
            //Hace la funcion
            MayorMenor();
        }else{
            //De lo contrario el programa se acaba
            console.log("El programa acabo.");
            document.write("El programa acabo.");
        }
}else{
    //De lo contrario el programa se acaba
    console.log("El programa acabo.");
    document.write("El programa acabo.");
}



    
