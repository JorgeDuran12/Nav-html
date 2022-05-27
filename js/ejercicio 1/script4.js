console.log ("conectado....");
let number1= prompt("Digite el valor ");
let number2= prompt("Digite el valor ");
let number3= prompt("Digite el valor ");
let number4= prompt("Digite el valor ");
let suma = ( parseInt (number1) + parseInt(number2) + parseInt (number3) + parseInt(number4));
let division = suma /4
console.log ("el resultado de la suma es: " ,suma);
console.log ("el resultado de la division es: " ,division);
const resultado1= document.querySelector("#resultado1");
const resultado2= document.querySelector("#resultado2");

console.log(resultado1);
console.log(resultado2);

resultado1.textContent = `el resultado de la suma es: ${suma} ` ;
resultado2.textContent = `el resultado de la division es: ${division} `;
