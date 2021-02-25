/*Autor: Osella Leandro
Ejercicio 3 de parcial 2020
Bienvenidos.
En el ingreso a un viaje en avion nos solicitan nombre , edad, sexo("f" o "m") y estado civil("soltero", "casado" o "viudo")y temperatura corporal.
a) El nombre de la persona con mas temperatura.
b) Cuantos mayores de edad estan viudos
c) La cantidad de hombres que hay solteros o viudos.
d) cuantas personas de la tercera edad( mas de 60 años) , tienen mas de 38 de temperatura
e) El promedio de edad entre los hombres solteros.
*/

function mostrar()
{
	var nombreIngresado;
	var edadIngresada;
	var sexoIngresado;
	var estadoCivilIngresado;
	var temperaturaIngresada;
	var banderaDelPrimero;
	var mayorTemperatura;
	var personaConMayorTemperatura;
	var respuesta;
	var contadorDeMayoresDeEdad;
	var contadorDeViudos;
	var contadorDeHombresSolteros;
	var contadorDeHombresViudos;
	var contadorDePersonasConTemperaturaElevada;
	var promedio;
	var acumuladorDeEdad;

	banderaDelPrimero=0;
	contadorDePersonasConTemperaturaElevada=0;
	acumuladorDeEdad=0;
	contadorDeMayoresDeEdad=0;
	contadorDeHombresViudos=0;
	contadorDeHombresSolteros=0;
	contadorDeViudos=0;
	respuesta="si";

	while(respuesta=="si")
	{
		nombreIngresado=prompt("Ingrese su nombre ");
		while(isNaN(nombreIngresado)==false)
		{
			nombreIngresado=prompt("Error, por favor ingrese su nombre ");
		}

		edadIngresada=prompt("Ingrese su edad ");
		while(isNaN(edadIngresada)==true)
		{
			edadIngresada=prompt("Error, por favor ingrese su edad ");
		}
		edadIngresada=parseInt(edadIngresada);

		sexoIngresado=prompt("Ingrese su sexo utilizando f o m ");
		while(isNaN(sexoIngresado)==false || sexoIngresado!="f" && sexoIngresado!="m")
		{
			sexoIngresado=prompt("Error, por favor ingrese su sexo utilizando f o m");
		}

		estadoCivilIngresado=prompt("Ingrese su estado civil ");
		while(isNaN(estadoCivilIngresado)==false ||estadoCivilIngresado!="soltero" && estadoCivilIngresado!="casado" && estadoCivilIngresado!="viudo")
		{
			estadoCivilIngresado=prompt("Error, por favor ingrese su estado civil (soltero, casado o viudo)");
		}

		temperaturaIngresada=prompt("Ingrese su temperatura corporal ");
		while(isNaN(temperaturaIngresada)==true)
		{
			temperaturaIngresada=prompt("Error, por favor ingrese su temperatura corporal ");
		}
		
		if(banderaDelPrimero==0)
		{
			mayorTemperatura=temperaturaIngresada;
			personaConMayorTemperatura=nombreIngresado;
			banderaDelPrimero=1;
		}
		else
		{
			if(temperaturaIngresada>mayorTemperatura)
			{
				mayorTemperatura=temperaturaIngresada;
				personaConMayorTemperatura=nombreIngresado;
			}
		}

		if(edadIngresada>18)
		{
			switch(estadoCivilIngresado)
			{
				case "viudo":
					contadorDeViudos=contadorDeViudos+1;
					break;
			}
		}

		if(sexoIngresado=="m")
		{
			switch(estadoCivilIngresado)
			{
				case "soltero":
					contadorDeHombresSolteros=contadorDeHombresSolteros+1;
					acumuladorDeEdad=acumuladorDeEdad+edadIngresada;
					break;
				case "viudo":
					contadorDeHombresViudos=contadorDeHombresViudos+1;
					break;
			}
		}

		if(edadIngresada>59 && temperaturaIngresada>38)
		{
			contadorDePersonasConTemperaturaElevada=contadorDePersonasConTemperaturaElevada+1;
		}

		promedio=acumuladorDeEdad/contadorDeHombresSolteros;

		respuesta=prompt("Desea continuar? ");
	}
	console.log("La persona con la mayor temperatura corporal es: "+personaConMayorTemperatura);
	console.log("La cantidad de mayores de edad viudos es: "+contadorDeViudos);
	console.log("La cantidad de hombres solteros es "+contadorDeHombresSolteros+" "+"y la cantidad de hombres viudos es "+contadorDeHombresViudos);
	console.log("La cantidad de personas de tercera edad con mas de 38 de temperatura es: "+contadorDePersonasConTemperaturaElevada);
	console.log("El promedio de edad entre los hombres solteros es: "+promedio);

}
