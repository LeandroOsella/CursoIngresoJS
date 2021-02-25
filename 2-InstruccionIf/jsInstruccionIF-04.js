function mostrar()
{
	//tomo la edad 
	//id ingresar edad:txtIdEdad
	var edad

	edad=document.getElementById('txtIdEdad').value;
	edad=parseInt(edad);

	if(edad>12 && edad<18)
	{
		
		alert("Usted es un adolescente");

	}




}//FIN DE LA FUNCIÓN