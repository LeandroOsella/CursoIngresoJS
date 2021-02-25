/*Autor: Osella Leandro
TP: 12
RISING BTL. Empresa dedicada a la toma de datos para realizar estadísticas y censos nos pide realizar una carga de datos validada e ingresada por ventanas emergentes solamente (para evitar hacking y cargas maliciosas) y luego asignarla a cuadros de textos. 
12.   Los datos requeridos son los siguientes:
A.	Edad, entre 18 y 90 años inclusive.
B.	Sexo, “M” para masculino y “F” para femenino
C.	Estado civil, 1-para soltero, 2-para casados, 3-para divorciados y 4-para viudos
D.	Sueldo bruto, no menor a 8000.
E.	Número de legajo, numérico de 4 cifras, sin ceros a la izquierda.
F.	Nacionalidad, “A” para argentinos, “E” para extranjeros, “N” para nacionalizados.
 */
function ComenzarIngreso () 
{
 	//id edad: txtIdEdad
 	//id sexo: txtIdSexo
 	//id estado civil: txtIdEstadoCivil
 	//id sueldo bruto: txtIdSueldo
 	//id legajo: txtIdLegajo
 	//id nacionalidad: txtIdNacionalidad

 	//definicion de variables
 	var edadIngresada;
 	var sexoIngresado;
 	var estadoCivilIngresado;
 	var estadoCivil;
 	var sueldoBruto;
 	var legajoIngresado;
 	var nacionalidadIngresada;
 	var nacionalidad;
 
 	edadIngresada=prompt("Por favor ingrese su edad");
 	edadIngresada=parseInt(edadIngresada);	

 	while(isNaN(edadIngresada)==true || edadIngresada<18 || edadIngresada>90)
 	{
 		edadIngresada=prompt("Error, por favor ingrese su edad");
 	}

 	

 	sexoIngresado=prompt("Ingrese su sexo (M o F)");
 	while(sexoIngresado!="M" && sexoIngresado!="F")
 	{
 		sexoIngresado=prompt("Error, por favor ingrese su sexo utilizando M o F ");
 	}
 	
 	

 	estadoCivilIngresado=prompt("Ingrese su estado civil utilizando - 1 para solteros - 2 para casados- 3 para divorciados- 4 para viudos");
 	estadoCivil=parseInt(estadoCivil);

 	while(isNaN(estadoCivilIngresado)==true || estadoCivilIngresado<1 || estadoCivilIngresado>4)
 	{
 		estadoCivilIngresado=prompt("Error, Ingrese su estado civil utilizando - 1 para solteros - 2 para casados- 3 para divorciados- 4 para viudos");
 	}
 		switch(estadoCivilIngresado)
 		{
 			case "1":
 				estadoCivil="soltero";
 				break;
 			case "2":
 				estadoCivil="casado";
 				break;
 			case "3":
 				estadoCivil="divorciado";
 				break;
 			default:
 				estadoCivil="viudo";
 				break;
 		}
 	

 	sueldoBruto=prompt("Ingrese su sueldo bruto ");
 	sueldoBruto=parseInt(sueldoBruto);

 	while(isNaN(sueldoBruto)==true || sueldoBruto<8000)
 	{
 		sueldoBruto=prompt("Por favor, ingrese un sueldo bruto menor a 8000 ");
 	}
 	

 	legajoIngresado=prompt("Ingrese su numero de legajo ");
 	legajoIngresado=parseInt(legajoIngresado);

 	while(isNaN(legajoIngresado)==true || legajoIngresado<1000 || legajoIngresado>9999)
 	{
 		legajoIngresado=prompt("Error, por favor ingrese un numero de legajo de 4 cifras, sin ceros a la izquierda");
 	}
 	

 	

 	while(nacionalidadIngresada!= "A" && nacionalidadIngresada!= "E" && nacionalidadIngresada!= "N")
 	{
 		nacionalidadIngresada=prompt("Por favor ingrese su nacionalidad utilizando A, E o N ");
 		switch(nacionalidadIngresada)
 		{
 			case "A":
 				nacionalidad="argentino";
 				break;
 			case "E":
 				nacionalidad="extranjero";
 				break;
 			default:
 				nacionalidad="nacionalizado";
 				break;
 		}
 	}
 	document.getElementById('txtIdEdad').value=edadIngresada;
 	document.getElementById('txtIdSexo').value=sexoIngresado;
 	document.getElementById('txtIdEstadoCivil').value=estadoCivil
 	document.getElementById('txtIdSueldo').value=sueldoBruto;
 	document.getElementById('txtIdLegajo').value=legajoIngresado;
 	document.getElementById('txtIdNacionalidad').value=nacionalidad;
 
}
