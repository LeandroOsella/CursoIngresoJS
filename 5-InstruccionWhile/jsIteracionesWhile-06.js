/*Autor: Osella Leandro
Ejercicio: 6
*/
function mostrar()
{
	var contador;
	var acumulador;
	var numeroIngresado;

	numeroIngresado=parseInt(numeroIngresado);


	contador=0;
	contador=parseInt(contador);

	acumulador=0;
	acumulador=parseInt(acumulador);

	while(contador<5)
	{
		contador=contador+1;
		numeroIngresado=prompt("Ingrese un numero por favor");
		if(isNaN(numeroIngresado)==true)
		{
			numeroIngresado=prompt("Por favor ingrese un NUMERO ");
		}
		numeroIngresado=parseInt(numeroIngresado);
		acumulador=acumulador+numeroIngresado;
		
	}
	
	txtIdSuma.value=acumulador;
	txtIdPromedio.value=acumulador/5;

}//FIN DE LA FUNCIÓN