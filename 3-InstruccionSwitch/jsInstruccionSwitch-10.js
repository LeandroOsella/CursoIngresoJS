/*Autor: Osella Leandro
Ejercicio: 10
*/

function mostrar()
{
	var estacionIngresada;
	var destinoIngresado;

	estacionIngresada=document.getElementById('txtIdEstacion').value;
	destinoIngresado=document.getElementById('txtIdDestino').value;

	switch(estacionIngresada)
	{
		case "Invierno":
			if(destinoIngresado=="Bariloche")
			{
				alert("Se viaja");
			}
			else
			{
				alert("No se viaja");
			}
			break;

		case "Verano":
			if(destinoIngresado=="Mar del plata")
			{
				alert("Se viaja");
			}
			else 
			{
				if(destinoIngresado=="Cataratas")
				{
					alert("Se viaja");
				}
				else
				{
					alert("No se viaja");
				}
				
			}
			break;

		case "Otoño":
			alert("Se viaja");
			break;

		case "Primavera":
			if(destinoIngresado=="Bariloche")
				{
					alert("No se viaja");
				}
				else
				{
					alert("Se viaja");
				}
				break;

	} //fin del switch

}//FIN DE LA FUNCIÓN