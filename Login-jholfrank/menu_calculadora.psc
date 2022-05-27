Funcion operacion3 <- div ( num1, num2 )
	operacion3 = num1 / num2
	
Fin Funcion

Funcion operacion2 <- multi ( num1, num2 )
	operacion2 = num1 * num2
	
Fin Funcion

// Funciones con retorno 
Funcion operacion <- resta(num1, num2)
	operacion = num1 - num2
Fin Funcion

// Funcion con parametros
Funcion suma ( n1, n2 )
	sum = n1 + n2
	Escribir "La suma es: ", sum
Fin Funcion

// Funciones sin parametros
// sintaxis nombre_funcion(parametros)
Funcion menu_principal (  )
	Escribir "Calculadora ADSO 1 Malambo"
	Escribir "1) Suma"
	Escribir "2) Resta"
	Escribir "3) Multiplicacion"
	Escribir "4) Division"	
	Escribir "5) Salir"
Fin Funcion

Algoritmo menu_calculadora
	// Bloque Librerias
	
	// Bloque de Constantes y variables
	
	bandera = "SI" 
	
	// Bloque Program Principal
	
	// Llamar - invocar 
	
	Mientras bandera= "SI" Hacer
		menu_principal()
		Escribir "Selecciones una opcion: "
		Leer opc
		
		Escribir "Digite 2 numero"
		Leer num1, num2
		
		Si opc=1 Entonces
			Escribir "Suma"
			
			suma(num1, num2)
		Fin Si
		
		Si opc=2 Entonces
			operacion = resta(num1, num2)
			Escribir "La resta es: ", operacion
		Fin Si
		
		Si opc=3 Entonces
			operacion2 = multi(num1, num2)
			Escribir "La multipliacion es : ", operacion2
			
		Fin Si
		
		Si opc=4 Entonces
			operacion3 = div(num1, num2)
			Escribir "La division es  : ", operacion3
		FinSi
		
		Si opc=5 Entonces
			bandera = "NO"
		Fin Si
		
		
		
	Fin Mientras
	
	
	
	
FinAlgoritmo
