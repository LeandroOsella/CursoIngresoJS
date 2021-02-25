/*Autor: Osella Leandro
Ejercicio: 10
Al presionar el botón pedir  números  
hasta que el usuario quiera, mostrar:
1-Suma de los negativos.
2-Suma de los positivos.
3-Cantidad de positivos.
4-Cantidad de negativos.
5-Cantidad de ceros.
6-Cantidad de números pares.
7-Promedio de positivos.
8-Promedios de negativos.
9-Diferencia entre positivos y negativos, (positvos-negativos). */
function mostrar()
{
	//declarar contadores y variables 
	var respuesta;
	var numeroIngresado;
	var sumaNegativos;
	var sumaPositivos;
	var cantidadPositivos;
	var cantidadNegativos;
	var cantidadCeros;
	var cantidadPares;
	var promedioPositivos;
	var promedioNegativos;
	var diferenciaPositivosNegativos;
	var resto;


	sumaNegativos=0;
	sumaPositivos=0;
	cantidadPositivos=0;
	cantidadNegativos=0;
	cantidadCeros=0;
	cantidadPares=0;
	promedioPositivos=0;
	promedioNegativos=0;
	
	respuesta="si";

	while(respuesta=="si")
	{
		numeroIngresado=prompt("Ingrese un numero ");
		numeroIngresado=parseInt(numeroIngresado);
		resto=numeroIngresado % 2;

		if(numeroIngresado>0)
		{
			sumaPositivos=sumaPositivos+numeroIngresado;
			cantidadPositivos=cantidadPositivos+1;
		}
		else
		{
			if(numeroIngresado<0)
			{
				sumaNegativos=sumaNegativos+numeroIngresado;
				cantidadNegativos=cantidadNegativos+1;
			}
			else
			{
				cantidadCeros=cantidadCeros+1;		
			}
		}
		if(resto==0)
		{
			cantidadPares=cantidadPares+1;	
		}
		
		
		promedioPositivos=sumaPositivos/cantidadPositivos;
		promedioNegativos=sumaNegativos/cantidadNegativos;
		diferenciaPositivosNegativos=sumaPositivos-sumaNegativos;

		respuesta=prompt("desea continuar?");
	}//fin del while

	document.write("la suma de negativos es :"+sumaNegativos);
	document.write("<br> la suma de positivos es:"+sumaPositivos);
	document.write("<br> la cantidad de numeros positivos es:"+cantidadPositivos);
	document.write("<br> la cantidad de numeros negativos es:"+cantidadNegativos);
	document.write("<br> la cantidad de Ceros es:"+cantidadCeros);
	document.write("<br> la cantidad de numeros pares es:"+cantidadPares);
	document.write("<br> el promedio de los numeros positivos es:"+promedioPositivos);
	document.write("<br> el promedio de los numeros negativos es:"+promedioNegativos);
	document.write("<br> la diferencia entre los numeros positivos y negativos es:"+diferenciaPositivosNegativos);
}//FIN DE LA FUNCIÓN