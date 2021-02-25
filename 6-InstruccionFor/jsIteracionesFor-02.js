/*Autor: Osella Leandro
Ejercicio 9bis de for(CORRECCION)
pedir 10 numeros , informar el mayor de los negativos y el menor de los pares).. solo si los hay
*/
function mostrar()
{

	var contador;
	var numeroIngresado;
	var banderaDelPrimero;
	var banderaDelPrimerPar;
	var negativoMayor;
	var numeroParMasChico;

	banderaDelPrimero=0;
	banderaDelPrimerPar=0;
	contadorDePares=0;

	

	for(contador=0;contador<10;contador=contador+1)
	{
		numeroIngresado=prompt("Ingrese 10 numeros ");
		numeroIngresado=parseInt(numeroIngresado);
		while(isNaN(numeroIngresado)==true)
		{
			numeroIngresado=prompt("Error, por favor ingrese 10 NUMEROS ");
		}
	
		if(numeroIngresado<0)
		{
			if(banderaDelPrimero==0)
			{
				negativoMayor=numeroIngresado;
				banderaDelPrimero=1;
			}
			else
			{
				if(numeroIngresado<negativoMayor)
				{
					negativoMayor=numeroIngresado;
				}
			}
		}
		if((numeroIngresado%2)==0)
		{
			if(banderaDelPrimerPar==0)
			{
				numeroParMasChico=numeroIngresado;
				banderaDelPrimerPar=1;
			}
			else
			{
				if(numeroIngresado<numeroParMasChico)
				{
					numeroParMasChico=numeroIngresado;
				}
			}
		}
	}

	if(banderaDelPrimero==0)
	{
		console.log("La cantidad de numeros negativos es: 0 ");
	}else
	{
		console.log("El numero negativo mas grande es el: "+negativoMayor);
	}
	if(banderaDelPrimerPar==0)
	{
		console.log("La cantidad de numeros pares es: 0 ");
	}else
	{
		console.log("El numero par mas chico es el: "+numeroParMasChico);
	}
	
}