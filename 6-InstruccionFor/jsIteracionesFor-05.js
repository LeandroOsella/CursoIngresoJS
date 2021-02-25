/*Autor: Osella Leandro
Ejercicio 5 de for
*/
function mostrar()
{
	var contador;
	var numeroIngresado;

	for(contador=0;;contador=contador+1)
	{
		numeroIngresado=prompt("Ingrese un numero ");
		console.log(contador);
		if(numeroIngresado==9)
		{
			break;
		}
	}

}//FIN DE LA FUNCIÓN