/*
Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt),realizar la operación correcta y 
mostrar el resto entre el dividendo y el divisor.
ej.: "El resto es 0 ."*/
function SacarResto()
{
	//id dividendo: txtIdNumeroDividendo
	//id divisor: txtIdNumeroDivisor

	var numeroDividendo;
	var numeroDivisor;
	var resto;

	numeroDividendo=document.getElementById('txtIdNumeroDividendo').value;
	numeroDivisor=document.getElementById('txtIdNumeroDivisor').value;

	resto=numeroDividendo%numeroDivisor;

	alert("El resto es "+resto);
}
