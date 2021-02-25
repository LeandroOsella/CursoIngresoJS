/*Autor: Osella Leandro
Ejercicio: 9 del parcial 2018
*/
function mostrar()
{
	var marcaIngresada;
	var pesoIngresado;
	var temperaturaIngresada;
	var respuesta;
	var contadorTemperaturasPares;
	var contadorDeProductosBajoCero;
	var contadorDePeso;
	var pesoMaximo;
	var pesoMinimo;
	var promedioPeso;
	var acumuladorPeso;
	var banderaDelPrimero;
	var productoMasPesado;

	respuesta="si";
	banderaDelPrimero="es el primero";
	contadorTemperaturasPares=0;
	contadorDeProductosBajoCero=0;
	acumuladorPeso=0;
	acumuladorPeso=parseInt(acumuladorPeso);
	contadorDePeso=0;
	


	while(respuesta=="si")
	{
		//INGRESO LA MARCA
		marcaIngresada=prompt("Ingrese la marca del producto ");

		//INGRESO EL PESO
		pesoIngresado=prompt("Ingrese el peso del producto ");
		pesoIngresado=parseInt(pesoIngresado);
		acumuladorPeso=acumuladorPeso + pesoIngresado;
		contadorDePeso=contadorDePeso + 1;
		while(isNaN(pesoIngresado)==true || pesoIngresado<1 || pesoIngresado>100)
		{
			pesoIngresado=prompt("Error, por favor ingrese el peso de un producto entre 1kg y 100kg");
		}//FIN DEL WHILE(validacion del peso);
		
		if(banderaDelPrimero=="es el primero")
			{
				pesoMaximo=pesoIngresado;
				pesoMinimo=pesoIngresado;
				productoMasPesado=marcaIngresada;
				banderaDelPrimero="No es el primero";
			}
			else
			{
				if(pesoIngresado>pesoMaximo)
				{
					pesoMaximo=pesoIngresado;
					productoMasPesado=marcaIngresada;
				}
				if(pesoIngresado<pesoMinimo)
				{
					pesoMinimo=pesoIngresado;
				}
			}

		temperaturaIngresada=prompt("Ingrese la temperatura de almacenamiento ");
		temperaturaIngresada=parseInt(temperaturaIngresada);

		while(isNaN(temperaturaIngresada)==true || temperaturaIngresada<-30 || temperaturaIngresada>30)
		{
			temperaturaIngresada=prompt("Error, la temperatura ingresada debe estar entre -30º y 30º. Intente nuevamente ");
		}
		if(temperaturaIngresada % 2 == 0)
		{
			contadorTemperaturasPares=contadorTemperaturasPares+1;
		}
		if(temperaturaIngresada<0)
		{
			contadorDeProductosBajoCero=contadorDeProductosBajoCero+1;
		}

		promedioPeso=acumuladorPeso/contadorDePeso;
		respuesta=prompt("Desea continuar?");
	}//FIN DEL WHILE(respuesta=="si");

	console.log("La cantidad de temperaturas pares es: "+" "+contadorTemperaturasPares);
	console.log("La marca del producto mas pesado es: "+" "+productoMasPesado);
	console.log("La cantidad de productos que se conservan a menos de 0 grados es: "+" "+contadorDeProductosBajoCero);
	console.log("El promedio del peso de todos los productos es: "+" "+promedioPeso);
	console.log("El peso maximo es: "+" "+pesoMaximo+"Kg");
	console.log("El peso minimo es: "+" "+pesoMinimo+"Kg");
}
