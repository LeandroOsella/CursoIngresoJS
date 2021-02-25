/*Autor: Osella Leandro
Ejercicio: 9 BIS
Al presionar el botón pedir  números  hasta que el usuario quiera,
mostrar el número máximo y el número mínimo ingresado.*/
function mostrar()
{	// declarar variables
	var banderaDelPrimero;
	var edadIngresada;
	var edadMaxima;
	var edadMinima;
	var respuesta;
	var nombreIngresado;
	var personaMasJoven;
	var personaMasVieja;


	//iniciar variables
	banderaDelPrimero="es el primero";
	respuesta='si';
	while(respuesta=="si")
	{
		edadIngresada=prompt("Ingrese su edad ");
		edadIngresada=parseInt(edadIngresada);

		nombreIngresado=prompt("Ingrese su nombre ");

		if(banderaDelPrimero=="es el primero")
		{
			edadMaxima=edadIngresada;
			edadMinima=edadIngresada;
			personaMasJoven=nombreIngresado;
			personaMasVieja=nombreIngresado;
			banderaDelPrimero="NO es el primero...";
		}
		else
		{
			if(edadIngresada>edadMaxima)
			{
				edadMaxima=edadIngresada;
				personaMasVieja=nombreIngresado;
			}
			if(edadIngresada<edadMinima)
			{
				edadMinima=edadIngresada;
				personaMasJoven=nombreIngresado;
			}
		}

		respuesta=prompt("desea continuar?");
	}
	document.getElementById('txtIdMaximo').value=personaMasVieja;
	document.getElementById('txtIdMinimo').value=personaMasJoven;
}//FIN DE LA FUNCIÓN