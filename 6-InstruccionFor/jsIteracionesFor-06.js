/*Autor: Osella Leandro
Ejercicio 6 de for
al presionar el botón pedir un número. mostrar los numeros pares desde el 1 al número ingresado, y mostrar la cantidad de numeros pares encontrados.
*/
function mostrar()
{
	var contador;
	var numeroIngresado;
	var numerosPares;

	
	numeroIngresado=prompt("ingrese un numero.");
	numerosPares=0;


	for(contador=0;contador<numeroIngresado;contador=contador+1)
	{
		if ((contador+1)%2==0) 
		{
			console.log(contador+1);
			numerosPares=numerosPares+1;
		}

	}
	console.log("hay "+numerosPares+" numeros pares.");
}//FIN DE LA FUNCIÓN