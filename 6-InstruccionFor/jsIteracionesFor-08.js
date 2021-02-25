/*Autor: Osella Leandro
Ejercicio 8 de for
al presionar el botón pedir un número. Informar si el numero es PRIMO o no.
*/

function mostrar()
{
	

	var numeroIngresado;
	var contador;
	var verificadorDeNumeroPrimo;

	verificadorDeNumeroPrimo=0;

	numeroIngresado=prompt("Ingrese un numero ");
	while(isNaN(numeroIngresado)==true || numeroIngresado<1)
	{
		numeroIngresado=prompt("Error, por favor ingrese un numero mayor a 0 ");
	}

	for(contador=numeroIngresado-1;contador>1;contador=contador-1)
	{
		if((numeroIngresado%contador)==0)
		{
			verificadorDeNumeroPrimo=1;
		}
	}

	if(verificadorDeNumeroPrimo==0)
	{
		document.write("El numero ingresado es primo");
	}
	else
	{
		if(verificadorDeNumeroPrimo==1)
		{
			document.write("El numero ingresado no es primo");
		}
	}

}//FIN DE LA FUNCIÓN

/*
	var numeroIngresado;
	var contador;
	var contadorDeDivisores;

	contadorDeDivisores=0;

	numeroIngresado=prompt("Ingrese numero a verificar ");

	for(contador=numeroIngresado-1;contador>1;contador=contador-1)
	{
		if(numeroIngresado%contador==0)
		{
			contadorDeDivisores=contadorDeDivisores+1;
		}
	}

	if(contadorDeDivisores>0)
	{
		console.log("no es primo");
	}
	else
	{
		console.log("es primo");
	}
	*/
	/*
	var numeroIngresado;
	var contador;
	var contadorDivisores;
	contadorDivisores=0;

	numeroIngresado=prompt("ingrese numero a verificar");
	numeroIngresado=parseInt(numeroIngresado);



	//for(contador=numeroIngresado-1;contador>1;contador--)
	for(contador=2;contador<(numeroIngresado/2);contador++)
	{
		if(numeroIngresado%contador==0)
		{
			//contadorDivisores++;
			break;
		}

	}

	//if(contadorDivisores>0)
	//if(contador!=1)
	if(contador!=((numeroIngresado/2)-1))
	{
		console.log("no es primo");
	}else
	{
		console.log("ES primo");
	}
*/

