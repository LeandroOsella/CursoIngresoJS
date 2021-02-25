/*Autor: Osella Leandro
Ejercicio: 7
*/

function mostrar()
{
	var destinoIngresado;

	destinoIngresado=document.getElementById('txtIdDestino').value;

	switch(destinoIngresado)
	{
		case "Bariloche":
			alert("Oeste");
			break;

		case "Cataratas":
			alert("Norte");
			break;

		case "Mar del plata":
			alert("Este");
			break;

		default:
			alert("Sur");
			break;

	}
	


}//FIN DE LA FUNCIÓN