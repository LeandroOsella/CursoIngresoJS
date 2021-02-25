/*Autor: Leandro Osella
Debemos lograr tomar el importe por ID.
Transformarlo a entero (parseInt), luego
mostrar el importe con un Descuento del 25 %
en el cuadro de texto "RESULTADO"*/
function mostrarAumento()
{
	//id importe: txtIdImporte
	//id resultado: txtIdResultado

	var importe;
	var descuento;
	var resultado;
	var porcentajeDescuento;

	importe=document.getElementById('txtIdImporte').value;
	importe=parseInt(importe);

	porcentajeDescuento=prompt("Ingrese porcentaje de Descuento: ");
	porcentajeDescuento=parseInt(porcentajeDescuento);

	descuento=(importe * porcentajeDescuento) / 100;

	resultado=importe - descuento;

	document.getElementById('txtIdResultado').value=resultado;
}
