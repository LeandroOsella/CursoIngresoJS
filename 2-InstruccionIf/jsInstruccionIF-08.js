function mostrar()
{
	//tomo la edad  
	var edad;
	var estadoCivilIngresado;

	edad=document.getElementById('txtIdEdad').value;
	edad=parseInt(edad);

	estadoCivilIngresado=document.getElementById('estadoCivil').value;
	

	if(edad>17 && estadoCivilIngresado=="Soltero")
		{
			alert("Es soltero y no es menor");
		}


	console.log(estadoCivilIngresado);
	


}//FIN DE LA FUNCIÓN