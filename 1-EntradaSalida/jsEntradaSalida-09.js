/* Autor: Leandro Osella
Debemos lograr tomar el importe por ID ,
transformarlo a entero (parseInt), luego
mostrar el importe con un aumento del 10 %
en el cuadro de texto "RESULTADO".*/
function mostrarAumento()
{

	//id sueldo: txtIdSueldo
	//id resultado: txtIdResultado
	var sueldo;
	var aumento;
	var resultado;
	var porcentajeAumento;

	sueldo=document.getElementById('txtIdSueldo').value;
	sueldo=parseInt(sueldo);

	porcentajeAumento=prompt("Ingrese el porcentaje de aumento: ");
	porcentajeAumento=parseInt(porcentajeAumento);


	aumento=(sueldo * porcentajeAumento) / 100;


	resultado=sueldo + aumento;

	document.getElementById('txtIdResultado').value=resultado;

}
