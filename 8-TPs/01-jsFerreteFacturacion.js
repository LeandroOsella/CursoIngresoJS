/*Autor: Leandro Osella
Ejercicio 1 de TPS.
1.	Para el departamento de facturación:
A.	Ingresar tres precios de productos y mostrar la suma de los mismos.
B.	Ingresar tres precios de productos y mostrar el promedio de los mismos.
C.	ingresar tres precios de productos  y mostrar precio final (más IVA 21%).
*/
function Sumar () 
{
	var precio1;
	var precio2;
	var precio3;
	var suma;

	//id precio1: txtIdPrecioUno
	//id precio2: txtIdPrecioDos
	//id precio3: txtIdPrecioTres

	precio1=document.getElementById('txtIdPrecioUno').value;
	precio1=parseInt(precio1);

	precio2=document.getElementById('txtIdPrecioDos').value;
	precio2=parseInt(precio2);

	precio3=document.getElementById('txtIdPrecioTres').value;
	precio3=parseInt(precio3);

	suma=precio1 + precio2 + precio3;

	alert("La suma es: "+ suma);

}
function Promedio () 
{
	var precio1;
	var precio2;
	var precio3;
	var promedio;

	precio1=document.getElementById('txtIdPrecioUno').value;
	precio1=parseInt(precio1);

	precio2=document.getElementById('txtIdPrecioDos').value;
	precio2=parseInt(precio2);

	precio3=document.getElementById('txtIdPrecioTres').value;
	precio3=parseInt(precio3);

	promedio=(precio1 + precio2 + precio3) / 3;

	alert("El promedio es: "+ promedio);

}
function PrecioFinal () 
{
	var precio1;
	var precio2;
	var precio3;
	var IVA;
	var suma;
	var precioFinal;

	precio1=document.getElementById('txtIdPrecioUno').value;
	precio1=parseInt(precio1);

	precio2=document.getElementById('txtIdPrecioDos').value;
	precio2=parseInt(precio2);

	precio3=document.getElementById('txtIdPrecioTres').value;
	precio3=parseInt(precio3);

	suma=precio1 + precio2 + precio3;

	IVA=suma * 0.21;

	precioFinal= suma + IVA;

	alert("El precio final (mas IVA) es: "+ precioFinal);


}