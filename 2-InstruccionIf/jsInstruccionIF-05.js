function mostrar()
{
	//tomo la edad  
	//id ingresar edad: txtIdEdad
	var edad;

	edad=document.getElementById('txtIdEdad').value;
	edad=parseInt(edad);

	if(edad<13 || edad>17)
	{
		
		alert("NO es adolescente");

	}

}//FIN DE LA FUNCIÓN