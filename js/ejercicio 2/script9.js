let number1, number2, number3;
number1 = parseInt(prompt('Ingrese primer valor'));
number2 = parseInt(prompt('Ingrese segundo valor'));
number3 = parseInt(prompt('Ingrese tercer valor'));

const resultado1 = document.querySelector("#resultado1");
const resultado2 = document.querySelector("#resultado2");

console.log(resultado1, resultado2);

if (number1 > number2 && number1 > number3){

    resultado1.textContent = ` el numero mayor es: ${number1} `
    //document.writeln("el numero mayor es: " , number1);
    console.log("el numero mayor es: " , number1);
}
if (number2 > number1 && number2 > number3){
    resultado1.textContent = ` el numero mayor es: ${number2} `
    //document.writeln("el numero mayor es: " , number2);
    console.log("el numero mayor es: " , number2);
} 
if (number3 > number1 && number3 > number2){
    resultado1.textContent = ` el numero mayor es: ${number3} `
    //document.writeln("el numero mayor es: " , number3);
    console.log("el numero mayor es: " , number3);
 }  
   if (number1 < number2 && number1 < number3){
        resultado2.textContent = ` el numero menor es: ${number1} `
        //document.writeln("el numero menor es: " , number1);
        console.log("el numero menor es: " , number1);
    } else{
    if (number2 < number1 && number2 < number3){
        resultado2.textContent = ` el numero menor es: ${number2} `
        //document.writeln("el numero menor es: " , number2);
        console.log("el numero menor es: " , number2);
  
    }else {
    if (number3 < number1 && number3 < number2){
        resultado2.textContent = ` el numero menor es: ${number3} `
        //document.writeln("el numero menor es: " , number3);
        console.log("el numero menor es: " , number3);
    }
}
    }
    


