/*Autor: Leandro Osella
*/
function mostrar()
{
	//tomo la edad  
	//id ingresar edad: txtIdEdad
	var edad;

	edad=document.getElementById('txtIdEdad').value;
	edad=parseInt(edad);

	if(edad>17)
	{
		alert("Usted es adulto");
	}
	else
	{
		if(edad<13)
		{
			alert("Usted es un niño");	
		}
		else
		{
			
			alert("Usted es adolescente");
			
		}
	}
	
}//FIN DE LA FUNCIÓN