/*Autor: Osella Leandro
Ej: 3
*/
function mostrar()
{
	//tomo el mes
	var mesDelAño;

	mesDelAño=document.getElementById('txtIdMes').value;

	switch(mesDelAño)
	{
		case "Febrero":
			alert("Este mes no tiene más de 29 días");
			break;
		case "Abril":
		case "Junio":
		case "Septiembre":
		case "Nomviembre":
			alert("Este mes tiene 30 días");
			break;
		default:
			alert("Este mes tiene 31 días");
			break;
	}
}//FIN DE LA FUNCIÓN