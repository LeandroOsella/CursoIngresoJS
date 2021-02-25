/*
Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt) y Sumarlos.
mostrar el resulto por medio de "ALERT"*/
function sumar()
{
	//id nmr 1: txtIdNumeroUno
	//id nmr 2: txtIdNumeroDos
	var numeroUno; 
	var numeroDos;
	var resultado;

	numeroUno=document.getElementById('txtIdNumeroUno').value;
	numeroDos=document.getElementById('txtIdNumeroDos').value;
	
	numeroUno=parseInt(numeroUno);
	numeroDos=parseInt(numeroDos);

	resultado=numeroUno+numeroDos;

	alert("El resultado es: "+resultado);
	console.log(resultado);


}

