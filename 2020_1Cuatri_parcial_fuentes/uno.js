/*Autor: Osella Leandro
Ejercicio: 1 de parcial 2020
*/

function mostrar()
{
	var contadorDeProductos;
	var precioIngresado;
	var marcaIngresada;
	var tipoIngresado;
	var cantidadIngresada;
	var fabricanteIngresado;
	var banderaDelPrimerAlcohol;
	var precioAlcoholMasBarato;
	var cantidadAlcoholMasBarato;
	var fabricanteAlcoholMasBarato;
	var acumuladorDeAlcohol;
	var acumuladorDeBarbijo;
	var acumuladorDeJabon;
	var contadorDeAlcohol;
	var contadorDeJabon;
	var contadorDeBarbijo;
	var promedio;
	var tipoMasCantidad;

	contadorDeProductos=0;
	banderaDelPrimerAlcohol=0;
	acumuladorDeJabon=0;
	acumuladorDeBarbijo=0;
	acumuladorDeAlcohol=0;
	contadorDeAlcohol=0;
	contadorDeBarbijo=0;
	contadorDeJabon=0;

	while(contadorDeProductos<5)
	{
		contadorDeProductos=contadorDeProductos+1;
		//INGRESO TIPO
		tipoIngresado=prompt("Ingrese tipo de producto ");

		while(isNaN(tipoIngresado)==false || tipoIngresado!="barbijo" && tipoIngresado!="alcohol" && tipoIngresado!="jabon")
		{
			tipoIngresado=prompt("Error, ingrese el tipo de producto: barbijo, alcohol o jabon ");
		}//FIN DEL WHILE(tipo de producto);
		
		//INGRESO PRECIO
		precioIngresado=prompt("Ingrese el precio del producto (entre 100 y 300) ");
		precioIngresado=parseInt(precioIngresado);

		while(isNaN(precioIngresado)==true || precioIngresado<100 || precioIngresado>300)
		{
			precioIngresado=prompt("Error, por favor ingrese un precio entre 100 y 300 ");
			precioIngresado=parseInt(precioIngresado);
		}//FIN DEL WHILE(precio);
		
		//INGRESO CANTIDAD
		cantidadIngresada=prompt("Ingrese la cantidad de producto (entre 0 y 1000) ");
		cantidadIngresada=parseInt(cantidadIngresada);

		while(isNaN(cantidadIngresada)==true || cantidadIngresada<1 || cantidadIngresada>1000)
		{
			cantidadIngresada=prompt("Error, por favor ingrese una cantidad entre 0 y 1000 ");
			cantidadIngresada=parseInt(cantidadIngresada);
		}//FIN DEL WHILE(precio);
		
		//INGRESO MARCA
		marcaIngresada=prompt("Ingrese la marca");

		while(isNaN(marcaIngresada)==false)
		{
			marcaIngresada=prompt("Error, por favor ingrese la marca ");
		}//FIN DEL WHILE(marca);
		
		//INGRESO FABRICANTE
		fabricanteIngresado=prompt("Ingrese el nombre del fabricante ");

		while(isNaN(fabricanteIngresado)==false)
		{
			fabricanteIngresado=prompt("Error, por favor ingrese el nombre del fabricante ");
		}//FIN DEL WHILE(fabricante);

		//a) Del más barato de los alcohol, la cantidad de unidades y el fabricante

		/*if(tipoIngresado=="alcohol")
		{
			if(banderaDelPrimerAlcohol==0)
			{
				precioAlcoholMasBarato=precioIngresado;
				cantidadAlcoholMasBarato=cantidadIngresada;
				fabricanteAlcoholMasBarato=fabricanteIngresado;
				banderaDelPrimerAlcohol=1;
			}
			else
			{
				if(precioIngresado<precioAlcoholMasBarato)
				{
					precioAlcoholMasBarato=precioIngresado;
					cantidadAlcoholMasBarato=cantidadIngresada;
					fabricanteAlcoholMasBarato=fabricanteIngresado;
				}
			}	
		}//FIN DEL IF(producto = alcohol)*/

		//b) Del tipo con mas unidades, el promedio por compra

		switch(tipoIngresado)
		{
			case "alcohol":
				//if(banderaDelPrimerAlcohol==0)
				if(contadorDeAlcohol==0)
				{
					precioAlcoholMasBarato=precioIngresado;
					cantidadAlcoholMasBarato=cantidadIngresada;
					fabricanteAlcoholMasBarato=fabricanteIngresado;
					//banderaDelPrimerAlcohol=1;
				}
				else
				{
					if(precioIngresado<precioAlcoholMasBarato)
					{
						precioAlcoholMasBarato=precioIngresado;
						cantidadAlcoholMasBarato=cantidadIngresada;
						fabricanteAlcoholMasBarato=fabricanteIngresado;
					}
				}	
				contadorDeAlcohol=contadorDeAlcohol+1;
				acumuladorDeAlcohol=acumuladorDeAlcohol+cantidadIngresada;
				break;
			case "jabon":
				contadorDeJabon=contadorDeJabon+1;
				acumuladorDeJabon=acumuladorDeJabon+cantidadIngresada;
				break;
			case "barbijo":
				contadorDeBarbijo=contadorDeBarbijo+1;
				acumuladorDeBarbijo=acumuladorDeBarbijo+cantidadIngresada;
				break;
		}
	}//FIN DEL WHILE(contadorDeProductos<5);

	if(acumuladorDeAlcohol>acumuladorDeJabon && acumuladorDeAlcohol>acumuladorDeBarbijo)
	{
		tipoMasCantidad="alcohol";
		promedio=acumuladorDeAlcohol/contadorDeAlcohol;
	}
	else
	{
		if(acumuladorDeJabon>acumuladorDeBarbijo)
		{
			tipoMasCantidad="jabon";
			promedio=acumuladorDeJabon/contadorDeJabon;
		}
		else
		{
			tipoMasCantidad="barbijo";
			promedio=acumuladorDeBarbijo/contadorDeBarbijo;
		}
	}//FIN DEL IF(tipoMasCantidad)

	console.log("Del mas barato de los alcoholes la cantidad de unudades es: "+cantidadAlcoholMasBarato+" "+"y el fabricante es: "+fabricanteAlcoholMasBarato);
	console.log("el tipo con mas unidades es: "+tipoMasCantidad+" y el promedio de compra es "+promedio);
	console.log("En total hay "+acumuladorDeJabon+" "+"unidades de jabon");

}//FIN DEL PROGRAMA
