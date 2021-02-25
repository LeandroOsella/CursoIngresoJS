/* Autor: Osella Leandro
2.	Para el departamento de Construcción:
A.	 mostrar la cantidad de alambre a comprar  si se ingresara el largo y el ancho de un terreno rectangular y se debe alambra con tres hilos de alambre.
B.	mostrar la cantidad de alambre a comprar  si se ingresara el radio  de un terreno circular y se debe alambra con tres hilos de alambre.
C.	Para hacer un contrapiso de 1m x 1m se necesitan 2 bolsas de cemento y 3 de cal, debemos mostrar cuantas bolsas se necesitan de cada uno para las medidas que nos ingresen.
*/

function Rectangulo () 
{
	//id largoDeTerreno: txtIdLargo
	//id anchoDeTerreno: txtIdAncho

	var largoDelTerreno;
	var anchoDelTerreno;
	var alambre;
	var perimetroDelTerreno;

	largoDelTerreno=document.getElementById('txtIdLargo').value;
	largoDelTerreno=parseInt(largoDelTerreno);

	anchoDelTerreno=document.getElementById('txtIdAncho').value;
	anchoDelTerreno=parseInt(anchoDelTerreno);

	perimetroDelTerreno= (largoDelTerreno * 2) + (anchoDelTerreno * 2);

	alambre = perimetroDelTerreno * 3;

	alert("Usted debe comprar "+alambre +" "+"metros de alambre");




}
function Circulo () 
{
	//id radioDelTerreno: txtIdRadio
	var radioDelTerreno;
	var alambre;
	var perimetroDelTerreno;

	radioDelTerreno=document.getElementById('txtIdRadio').value;
	radioDelTerreno=parseInt(radioDelTerreno);

	perimetroDelTerreno= 2 * 3.14 * radioDelTerreno;

	alambre=perimetroDelTerreno * 3;

	alert("Usted debe comprar "+alambre +" "+"metros de alambre");


}
function Materiales () 
{
	var largoDelTerreno;
	var anchoDelTerreno;
	var areaDelTerreno;
	var bolsasDeCemento;
	var bolsasDeCal;

	largoDelTerreno=document.getElementById('txtIdLargo').value;
	largoDelTerreno=parseInt(largoDelTerreno);

	anchoDelTerreno=document.getElementById('txtIdAncho').value;
	anchoDelTerreno=parseInt(anchoDelTerreno);

	//para determinar la cantidad de bolsas de cada material hago regla de 3 con el area del terreno.
	areaDelTerreno= largoDelTerreno * anchoDelTerreno;

	bolsasDeCemento=(areaDelTerreno * 2) / 1;

	bolsasDeCal=(areaDelTerreno * 3) / 1;

	alert("Usted necesita "+bolsasDeCemento+" "+"bolsas de cemento y "+bolsasDeCal+" "+"bolsas de cal");
	
}