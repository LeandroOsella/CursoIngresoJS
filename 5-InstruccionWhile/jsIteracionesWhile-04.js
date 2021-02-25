/*Autor: Osella Leandro
Ejercicio: 4
al presionar el botón 
pedir un número entre 0 y 9 inclusive.*/
function mostrar()
{
	var numeroIngresado;
	numeroIngresado = prompt("ingrese un número entre 0 y 9.");

	while(isNaN(numeroIngresado) == true || numeroIngresado<0 || numeroIngresado>9)
	{
		numeroIngresado = prompt("Numero no valido, por favor ingrese un número entre 0 y 9.");
	}
	console.log(numeroIngresado);
	
}//FIN DE LA FUNCIÓN