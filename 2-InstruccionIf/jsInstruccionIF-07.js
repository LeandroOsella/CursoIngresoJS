function mostrar()
{
	//tomo la edad  
	//id edad: txtIdEdad
	var edad;
	var estadoCivilIngresado;

	edad=document.getElementById('txtIdEdad').value;
	edad=parseInt(edad);

	estadoCivilIngresado=document.getElementById('estadoCivil').value;
	

	if(edad<18 && estadoCivilIngresado!="Soltero")
	{
		alert("Es muy pequeño para NO ser soltero");
	}

	console.log(estadoCivilIngresado);


}//FIN DE LA FUNCIÓN