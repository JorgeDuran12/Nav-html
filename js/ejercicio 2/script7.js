let number1, number2, number3;
number1 = parseInt(prompt('Ingrese primer valor'));
number2 = parseInt(prompt('Ingrese segundo valor'));
number3 = parseInt(prompt('Ingrese tercer valor'));
if (number1 == number2 && number1 == number3) {
    let suma= (number1 + number2);
    let producto= suma * number3;

console.log ("La suma de los dos primeros valores es: " ,suma);
console.log ("El producto es: " ,producto);
const resultado1= document.querySelector("#resultado1");
const resultado2= document.querySelector("#resultado2");

console.log(resultado1);
console.log(resultado2);

resultado1.textContent = `La suma de los dos primeros valores es:  ${suma} ` ;
resultado2.textContent = `El producto es:  ${producto} `;
}