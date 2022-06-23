var numero = parseInt(prompt("Introduce un numero: "));

for (let index = 0; index <= 1000; index++) {
    
    if(numero%index == 0){
        console.log(index);
        document.write("<p> Numero divisible: " + index + "</p>")
    }
}

// 12 -> 12%3 == 0: es divisible