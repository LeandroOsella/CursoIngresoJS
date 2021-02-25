/*Autor: Osella Leandro
Ejercicio 1 for
*/
function mostrar()
{
	/*
	var contador;

	for(contador=0;contador<10;contador=contador+1)
	{
		console.log(contador+1);
	}
	*/
	var numeroRandom;
	var contador;
	var contadorDe1;
	var contadorDe2;
	var contadorDe3;
	var contadorDe4;
	var contadorDe5;
	var contadorDe6;
	var contadorDe7;
	var contadorDe8;
	var contadorDe9;
	var contadorDe10;

	contadorDe1=0;
	contadorDe2=0;
	contadorDe3=0;
	contadorDe4=0;
	contadorDe5=0;
	contadorDe6=0;
	contadorDe7=0;
	contadorDe8=0;
	contadorDe9=0;
	contadorDe10=0;

	for(contador=0;contador<10;contador=contador+1)
	{
		numeroRandom=Math.floor(Math.random() * 10) + 1;
		switch(numeroRandom)
		{
			case 1:
				contadorDe1=contadorDe1+1;
				break;
			case 2:
				contadorDe2=contadorDe2+1;
				break;
			case 3:
				contadorDe3=contadorDe3+1;
				break;
			case 4:
				contadorDe4=contadorDe4+1;
				break;
			case 5:
				contadorDe5=contadorDe5+1;
				break;
			case 6:
				contadorDe6=contadorDe6+1;
				break;
			case 7:
				contadorDe7=contadorDe7+1;
				break;
			case 8:
				contadorDe8=contadorDe8+1;
			case 9:
				contadorDe9=contadorDe9+1;
				break;
			case 10:
				contadorDe10=contadorDe10+1;
				break;
		}
	}
	console.log("El numero 1 salio:"+contadorDe1+" veces");
	console.log("El numero 2 salio:"+contadorDe2+" veces");
	console.log("El numero 3 salio:"+contadorDe3+" veces");
	console.log("El numero 4 salio:"+contadorDe4+" veces");
	console.log("El numero 5 salio:"+contadorDe5+" veces");
	console.log("El numero 6 salio:"+contadorDe6+" veces");
	console.log("El numero 7 salio:"+contadorDe7+" veces");
	console.log("El numero 8 salio:"+contadorDe8+" veces");
	console.log("El numero 9 salio:"+contadorDe9+" veces");
	console.log("El numero 10 salio:"+contadorDe10+" veces");



}