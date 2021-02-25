/*Autor: Osella Leandro
Ejercicio 11 de for
a 5 personas nombre , sexo ,edad(validar que solo sean hombres no mayores a 12 y que las mujeres sean ADOLESCENTES), altura(rangos que quiera)) ... informar el sexo y nombre de la persona mas alta
*/
function mostrar()
{

	var nombreIngresado;
	var sexoIngresado;
	var edadIngresada;
	var alturaIngresada;
	var contador;
	var personaMasAlta;
	var banderaDelPrimero;
	var sexoPersonaMasAlta;
	var alturaMaxima;

	banderaDelPrimero=0;

	for(contador=0;contador<5;contador=contador+1)
	{
		nombreIngresado=prompt("Ingrese su nombre ");
		while(isNaN(nombreIngresado)==false)
		{
			nombreIngresado=prompt("Error, por favor ingrese su nombre ");
		}

		sexoIngresado=prompt("Ingrese su sexo (m o f) ");
		while(isNaN(sexoIngresado)==false || sexoIngresado!="m" && sexoIngresado!="f")
		{
			sexoIngresado=prompt("Error, por favor ingrese su sexo utilizando f o m ");
		}

		if(sexoIngresado=="m")
		{
			edadIngresada=prompt("Ingrese su edad ");
			edadIngresada=parseInt(edadIngresada);
			while(isNaN(edadIngresada)==true || edadIngresada>12)
			{
				edadIngresada=prompt("Error, solamente valido hombres no mayores a 12 años, ingrese su edad nuevamente ");
			}
			
		}
		else
		{
			edadIngresada=prompt("Ingrese su edad ");
			edadIngresada=parseInt(edadIngresada);
			while(isNaN(edadIngresada)==true || edadIngresada<12 || edadIngresada>17)
			{
				edadIngresada=prompt("Error, solamente valido mujeres ADOLESCENTES, ingrese su edad nuevamente ");
			}
		}

		alturaIngresada=prompt("Ingrese su altura (en centimetros)");
		alturaIngresada=parseInt(alturaIngresada);
		while(isNaN(alturaIngresada)==true || alturaIngresada<100 || alturaIngresada>230)
		{
			alturaIngresada=prompt("Error, por favor ingrese su altura ");
		}

		if(banderaDelPrimero==0)
		{
			personaMasAlta=nombreIngresado;
			alturaMaxima=alturaIngresada;
			sexoPersonaMasAlta=sexoIngresado;
			banderaDelPrimero=1;
		}
		else
		{
			if(alturaIngresada>alturaMaxima)
			{
				personaMasAlta=nombreIngresado;
				sexoPersonaMasAlta=sexoIngresado;
			}
		}

	console.log("Nombre: "+nombreIngresado);
	console.log("Sexo: "+sexoIngresado);
	console.log("Edad: "+edadIngresada);
	console.log("Altura: "+alturaIngresada);
	console.log("La persona mas alta es: "+personaMasAlta);
	console.log("El sexo de la persona mas alta es: "+sexoPersonaMasAlta);
	}
}//FIN DE LA FUNCIÓN 