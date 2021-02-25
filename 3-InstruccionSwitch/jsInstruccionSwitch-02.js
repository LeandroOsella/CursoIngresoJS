function mostrar()
{
	//tomo el mes
	var mesDelAño;

	mesDelAño=document.getElementById('txtIdMes').value;
	

	switch(mesDelAño)
	{
		case "Julio":
		case "Agosto":
			alert("Abrigate que hace frio.");
			break;
		case "Septiembre":
		case "Octubre":
		case "Noviembre":
		case "Diciembre":
			alert("Ya pasamos el frio, ahora el calor!!!.");
			break;
		default:
			alert("Falta para el invierno");
			break;


	}




}//FIN DE LA FUNCIÓN