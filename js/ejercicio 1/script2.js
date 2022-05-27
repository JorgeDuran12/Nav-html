let number1= prompt("Digite el numero 1")
let number2 = prompt("Digite el numero 2")

let suma = ( parseInt (number1) + parseInt(number2));
let producto = ( parseInt (number1)  * parseInt(number2));

console.log("La suma es: ", suma);
console.log("El producto es: ",producto);

const resultado1= document.querySelector("#resultado1");
const resultado2= document.querySelector("#resultado2");

console.log(resultado1);
console.log(resultado2);

resultado1.textContent = `La suma es   : ${suma} ` ;
resultado2.textContent = `El producto es   : ${producto} ` ;
