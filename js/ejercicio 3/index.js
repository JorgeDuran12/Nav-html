i= 0;
cantidad= 0;
suma=0;
cantidad= (parseInt(prompt("Ingrese la cantidad de personas")));
console.log(cantidad);


while (i<parseInt(cantidad)) {
  altura = parseInt (prompt ("Digite la altura"));
  suma =parseInt(altura) +suma;
  i++;
    console.log(altura);
} 
let prom= parseInt(suma/cantidad);
document.write("La altura promedio es de: " , prom);
console.log("La altura promedio es de: " , prom);