function mostrar()
{
	//tomo la edad
	//id ingresar edad: txtIdEdad
	var edad;

	edad=document.getElementById('txtIdEdad').value;
	edad=parseInt(edad);

	if(edad>17)
	{
		alert("Usted es mayor de edad");
	}

	if(edad<18)
	{
		alert("Usted es menor de edad");
	}



}//FIN DE LA FUNCIÓN