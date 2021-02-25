/* Autor: Leandro Osella
3.	Para el departamento de Pinturas:
A.	Al ingresar una temperatura en Fahrenheit debemos mostrar la temperatura en Centígrados con un mensaje concatenado (ej.: " 32 Fahrenheit son 0 centígrados").
B.	Al ingresar una temperatura en Centígrados debemos mostrar la temperatura en Fahrenheit (ej.: "0  centígrados son 32 Fahrenheit ").
*/
function FahrenheitCentigrados () 
{
	//id ingrese temperatura: txtIdTemperatura
	var gradosFarenheit;
	var gradosCentigrados;

	gradosFarenheit=document.getElementById('txtIdTemperatura').value;
	gradosFarenheit=parseInt(gradosFarenheit);

	gradosCentigrados= (gradosFarenheit - 32) * (5/9);

	alert(gradosFarenheit+" "+"Farenheit son "+gradosCentigrados+" "+"Centigrados");
	
}

function CentigradosFahrenheit () 
{
	var gradosFarenheit;
	var gradosCentigrados;

	gradosCentigrados=document.getElementById('txtIdTemperatura').value;
	gradosCentigrados=parseInt(gradosCentigrados);

	gradosFarenheit=(gradosCentigrados * (9/5)) + 32;

	alert(gradosCentigrados+" "+"Centigrados son "+gradosFarenheit+" "+"Farenheit");
}
