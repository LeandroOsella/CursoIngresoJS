/*Autor:Osella Leandro
Ejercicio 2 de parcial 2020
Realizar el algoritmo que permita ingresar los datos de una compra productos de la construccion, hasta que el cliente quiera:
Tipo validad("arena";"cal";"cemento")
Cantidad de bolsas,
Precio por bolsa (más de cero ),

Si compro más de 10 bolsas en total tenes 15% de descuento sobre el total a pagar.
Si compro más de 30 bolsas en total tenes 25% de descuento sobre el total a pagar.
a) El importe total a pagar , bruto sin descuento y...
b) el importe total a pagar con descuento(solo si corresponde)
d) Informar el tipo con mas cantidad de bolsas.
f) El tipo mas caro
*/

function mostrar()
{
	var respuesta;
	var tipoIngresado;
	var cantidadIngresada;
	var precioIngresado;
	var acumuladorCantidadDeBolsas;
	var sumaPrecioBruto;
	var precioBruto;
	var porcentaje;
	var acumuladorArena;
	var acumuladorCal;
	var acumuladorCemento;
	var tipoMasCantidad;
	var tipoDelMasCaro;
	var banderaDelPrimero;
	var sumaPrecioBrutoConDescuento;
	var precioMasCaro;



	acumuladorCantidadDeBolsas=0;
	sumaPrecioBrutoConDescuento=0;
	acumuladorCemento=0;
	acumuladorCal=0;
	acumuladorArena=0;
	banderaDelPrimero=0;
	sumaPrecioBruto=0;
	respuesta="si";



	while(respuesta=="si")
	{
		tipoIngresado=prompt("Ingrese el tipo de producto ");
		while(isNaN(tipoIngresado)==false || tipoIngresado!="arena" && tipoIngresado!="cal" && tipoIngresado!="cemento")
		{
			tipoIngresado=prompt("Error, por favor ingrese un tipo de producto valido ");
		}

		cantidadIngresada=prompt("Ingrese la cantidad de bolsas ");
		
		while(isNaN(cantidadIngresada)==true || cantidadIngresada<1)
		{
			cantidadIngresada=prompt("Error, por favor ingrese una cantidad de bolsas valida ");
		}
		cantidadIngresada=parseInt(cantidadIngresada);

		precioIngresado=prompt("Ingrese el precio por bolsa ");
		while(isNaN(precioIngresado)==true || precioIngresado<1)
		{
			precioIngresado=prompt("Error, por favor ingrese un precio valido (mayor a 0)");
			
		}
		precioIngresado=parseInt(precioIngresado);
		
		if(banderaDelPrimero==0)
		{
			tipoDelMasCaro=tipoIngresado;
			precioMasCaro=precioIngresado;
			banderaDelPrimero=1;
		}
		else
		{
			if(precioIngresado>precioMasCaro)
			{
				precioMasCaro=precioIngresado;
				tipoDelMasCaro=tipoIngresado;
			}
		}
		
		acumuladorCantidadDeBolsas=acumuladorCantidadDeBolsas+cantidadIngresada;
		precioBruto=cantidadIngresada * precioIngresado;
		sumaPrecioBruto=sumaPrecioBruto + precioBruto;

		switch(tipoIngresado)
		{
			case "arena":
				acumuladorArena=acumuladorArena+cantidadIngresada;
				break;
			case "cemento":
				acumuladorCemento=acumuladorCemento+cantidadIngresada;
				break;
			case "cal":
				acumuladorCal=acumuladorCal+cantidadIngresada;
				break;
		}

		respuesta=prompt("Desea continuar? ");
	}//FIN DEL WHILE(ingreso de datos);

	if(acumuladorCantidadDeBolsas>30)
	{
		porcentaje=25;
	}
	else
	{
		if(acumuladorCantidadDeBolsas<10)
		{
			porcentaje=0;
		}
		else
		{
			porcentaje=15;
		}
	}


	if(acumuladorCantidadDeBolsas>10)
	{
		descuento= sumaPrecioBruto * porcentaje / 100;
		sumaPrecioBrutoConDescuento= sumaPrecioBruto - descuento;
		
	}
	else
	{
		sumaPrecioBrutoConDescuento=sumaPrecioBruto;
	}

	if(acumuladorArena>acumuladorCal && acumuladorArena>acumuladorCemento)
	{
		tipoMasCantidad="arena";
	}
	else
	{
		if(acumuladorCal>acumuladorCemento)
		{
			tipoMasCantidad="cal";
		}
		else
		{
			tipoMasCantidad="cemento";
		}
	}

	console.log("El precio bruto es: "+sumaPrecioBruto);
	console.log("El precio con descuento es: "+sumaPrecioBrutoConDescuento);
	console.log("El tipo con mas cantidad de bolsas es: "+tipoMasCantidad);
	console.log("El tipo mas caro es: "+tipoDelMasCaro);//INCOMPLETO


}
