/*Autor: Osella Leandro
Ejercicio 7 de for
al presionar el botón pedir un número. Informar si el numero es PRIMO o no.
*/
function mostrar()
{
	
	var numeroIngresado;
	var contador;

	numeroIngresado=prompt("Ingrese un numero: ");

	while(isNaN(numeroIngresado)==true || numeroIngresado <1 )
	{

		numeroIngresado=prompt("Error, ingrese un numero mayor a 0: ");

	}

	for(contador=0;contador<numeroIngresado;contador++)
	{

		if(numeroIngresado%(contador+1)==0)
		{
			document.write((contador+1) + "<br>");
		}
	}
}//FIN DE LA FUNCIÓN