let number1= prompt("Digite el precio del producto ");
let number2 = prompt("Digite la cantidad a llevar");

let producto = ( parseInt (number1)  * parseInt(number2));
console.log("El producto es: ",producto);
const resultado1= document.querySelector("#resultado1");

console.log(resultado1);

resultado1.textContent = `El producto es   : ${producto} ` ;
