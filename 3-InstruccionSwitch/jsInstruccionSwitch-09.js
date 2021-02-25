/*Autor: Osella Leandro
Ejercicio: 9
*/

function mostrar()
{
	var estacionIngresada;
	var precioBase;
	var precioFinal;
	var descuento=0;
	var destinoIngresado;
	var aumento=0;


	estacionIngresada=document.getElementById('txtIdEstacion').value;
	destinoIngresado=document.getElementById('txtIdDestino').value;


	precioBase=parseInt(precioBase);
	precioBase=15000;

	precioFinal=parseInt(precioFinal);
	descuento=parseInt(descuento);
	aumento=parseInt(aumento);

	switch(estacionIngresada)
	{
		case "Invierno":
			if(destinoIngresado=="Bariloche")
			{
				aumento = 20;

			}
			else
			{
				if(destinoIngresado=="Mar del plata")
				{
					descuento=20;
				}
				else
				{
					descuento=10
				}
			}
			break;

		case "Verano":

			if(destinoIngresado=="Bariloche")
			{
				descuento=20;
			}
			else
			{
				if(destinoIngresado=="Mar del plata")
				{
					aumento=20;
				}
				else
				{
					aumento=10;
				}
			}
			break;

		case "Otoño":
		case "Primavera":
			if(destinoIngresado!="Cordoba")
			{
				aumento=10;		
			}
			break;

	}

	if(aumento!=0)
	{
		precioFinal=precioBase + precioBase * aumento / 100;
	}
	else
	{
		if(descuento!=0)
		{
			precioFinal=precioBase - precioBase * descuento / 100;
		}
		else
		{
			precioFinal=precioBase;
		}
	}

	alert("Precio final:"+" "+ precioFinal +"$");





}//FIN DE LA FUNCIÓN