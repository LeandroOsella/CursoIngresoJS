/*
Nombre: Leandro Osella
Debemos lograr tomar nombre y edad por ID y mostrarlos concatenados 
ej.: "Usted se llama José y tiene 66 años" 	*/
function mostrar()
{	
	var nombre;
	var edad;
	var apellido;

	nombre=document.getElementById('txtIdNombre').value;
	edad=document.getElementById('txtIdEdad').value;
	apellido=prompt("Ingrese su apellido:");

	alert("Usted se llama "+ nombre+" "+apellido+" "+"y tiene "+ edad +" "+"años");
}

