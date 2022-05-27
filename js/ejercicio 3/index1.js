console.log("conectado...");

let cantidad = 0;
let may = 0;
i= 0;
let total= 0;
let suma=0;
cantidad = parseInt(prompt("Ingrese la cantidad de empleados"));

const resultado1 = document.querySelector("#resultado1");
const resultado2 = document.querySelector("#resultado2");

while (i<cantidad) {
  i++;
  let  sueldo=parseInt(prompt("Ingrese el sueldo de cada empleado"));
if (Number(sueldo >=100)&& Number(sueldo<=300)) {
suma+=1

}else 
if (Number(sueldo>300)) {
    may+=1
}
total = total + Number(sueldo);

}  

document.writeln("Las cantidad de personas que cobran entre 100 y 300 es: " , suma);
document.write("<br/>");
document.writeln("La cantidad de personas que cobran mas de 300 es: ", may);
document.write("<br/>");
document.writeln("El total a pagar de la empresa es de: ", total);