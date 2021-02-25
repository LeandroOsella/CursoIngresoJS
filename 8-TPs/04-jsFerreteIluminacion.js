/*4.	Para el departamento de iluminación:
Tomando en cuenta que todas las lámparas están en oferta al mismo precio de $35 pesos final.
A.	Si compra 6 o más  lamparitas bajo consumo tiene un descuento del 50%. 
B.	Si compra 5  lamparitas bajo consumo marca "ArgentinaLuz" se hace un descuento del 40 % y si es de otra marca el descuento es del 30%.
C.	Si compra 4  lamparitas bajo consumo marca "ArgentinaLuz" o “FelipeLamparas” se hace un descuento del 25 % y si es de otra marca el descuento es del 20%.
D.	Si compra 3  lamparitas bajo consumo marca "ArgentinaLuz"  el descuento es del 15%, si es  “FelipeLamparas” se hace un descuento del 10 % y si es de otra marca un 5%.
E.	Si el importe final con descuento suma más de $120  se debe sumar un 10% de ingresos brutos en informar del impuesto con el siguiente mensaje:
 ”Usted pago X de IIBB.”, siendo X el impuesto que se pagó. 
*/
 
function CalcularPrecio () 
{
 	//6  $105
 	//5  ArgentinaLuz 40 % 5*35  $105
 	//5  otra marca 30 %   5*35   

//Solo IF

/*
 	var cantidadLamparas;
 	var marca;
 	var precioBruto;
 	var descuento;
 	var precioFinal;
 	var porcentaje;
 	
 	
 	cantidadLamparas = document.getElementById('txtIdCantidad').value;
 	cantidadLamparas = parseInt(cantidadLamparas);

 	marca = document.getElementById('Marca').value;

 	descuento=0;

 	precioBruto=35*cantidadLamparas;

 	if(cantidadLamparas>5)
 	{
 		//descuento = precioBruto * 50 / 100;
       porcentaje=50;
 	}
 	else
 	{
 		if(cantidadLamparas==5)
 		{
 			if(marca=="ArgentinaLuz")
 			{
 				//descuento = precioBruto * 40 / 100;
 				 porcentaje=40;
 			}
 			else
 			{
 				 porcentaje=30;
 			}
 		}
 		else
 		{
 			if(cantidadLamparas==4)
 			{
 				if(marca=="ArgentinaLuz" || marca=="FelipeLamparas")
 				{
 					 porcentaje=25;
 				}
 				else
 				{
 					 porcentaje=20;
 				}
 			}
 			else
 			{
 				if(cantidadLamparas==3)
 				{
 					if(marca=="ArgentinaLuz")
 					{
 						porcentaje=15;
 					}
 					else
 					{
 						if(marca=="FelipeLamparas")
 						{
 							porcentaje=10;
 						}
 						else
 						{
 							porcentaje=5;
 						}
 					}
 				}
 				else
 				{
 					porcentaje=0;
 				}//if(cantidadLamparas==3)
 			}//if(cantidadLamparas==4)
 		}//del if(cantidadLamparas==5)
 	}//del if(cantidadLamparas>5)

	descuento = precioBruto * porcentaje / 100;
 	precioFinal = precioBruto - descuento;

 	if(precioFinal>120)
 	{
 		descuento=precioFinal * 10 / 100;
 		precioFinal=precioFinal + descuento;
 		alert("IIBB Usted pago "+descuento);
 	}


 	
	document.getElementById("txtIdprecioDescuento").value = precioFinal;

--------------------------------------------------------------------------------------------------------------------
Solo switch
*/
	var cantidadLamparas;
	var marca;
	var precioBruto;
	var descuento;
	var precioFinal;
	var porcentaje;


	cantidadLamparas = document.getElementById('txtIdCantidad').value;
 	cantidadLamparas = parseInt(cantidadLamparas);

 	marca = document.getElementById('Marca').value;


 	descuento=0;
 	

 	precioBruto=35*cantidadLamparas;



 	switch(cantidadLamparas)
 	{
 		case 5:
 			switch(marca)
 			{
 				case "ArgentinaLuz":
 					porcentaje=40;
 				break;
 				default:
 					porcentaje=30;
 				break;
 			}
 			 break;
 		case 4:
 			switch(marca)
 			{
 				case "ArgentinaLuz":
 				case "FelipeLamparas":
 					porcentaje=25;
 				break;
 				default:
 					porcentaje=20;
 				break;
 			}
 			 break;
 		case 3:
 			switch(marca)
 			{
 				case "ArgentinaLuz":
 					porcentaje=15;
 				break;
 				case "FelipeLamparas":
 					porcentaje=10;
 				break;
 				default:
 					porcentaje=5;
 				break;
 			}
 			 break;
 		default:
 				porcentaje=50;
 			break;
 		
 	}

	descuento = precioBruto * porcentaje / 100;
 	precioFinal = precioBruto - descuento;

 	if(precioFinal>120)
 	{
 		descuento=precioFinal * 10 / 100;
 		precioFinal=precioFinal + descuento;
 		alert("IIBB Usted pago "+descuento);
 	}

 
	document.getElementById("txtIdprecioDescuento").value = precioFinal;


/*
switch con IF.

	var cantidadLamparas;
 	var marca;
 	var precioBruto;
 	var descuento;
 	var precioFinal;
 	var porcentaje;
 	
 	
 	cantidadLamparas = document.getElementById('txtIdCantidad').value;
 	cantidadLamparas = parseInt(cantidadLamparas);

 	marca = document.getElementById('Marca').value;

 	descuento=0;

 	precioBruto=35*cantidadLamparas;

 	switch(cantidadLamparas)
 	{
 		case 5:
 			if(marca=="ArgentinaLuz")
 			{
 				porcentaje=40;
 			}
 			else
 			{
 				porcentaje=30;
 			}
 			break;

 		case 4:
 			if(marca=="ArgentinaLuz" || marca=="FelipeLamparas")
 			{
 				porcentaje=25;
 			}
 			else
 			{
 				porcentaje=20;
 			}
 			break;

 		case 3:
 			if(marca=="ArgentinaLuz")
 			{
 				porcentaje=15;
 			}
 			else
 			{
 				if(marca=="FelipeLamparas")
 				{
 					porcentaje=10;
 				}
 				else
 				{
 					porcentaje=5;
 				}
 			}
 			break;

 		default:
 			porcentaje=50;
 			break;
 	}

 	descuento = precioBruto * porcentaje / 100;
 	precioFinal = precioBruto - descuento;

 	if(precioFinal>120)
 	{
 		descuento=precioFinal * 10 / 100;
 		precioFinal=precioFinal + descuento;
 		alert("IIBB Usted pago "+descuento);
 	}

 
	document.getElementById("txtIdprecioDescuento").value = precioFinal;	
----------------------------------------------------------------------------------------------------------------------------------------
If con switch

 
	var cantidadLamparas;
 	var marca;
 	var precioBruto;
 	var descuento;
 	var precioFinal;
 	var porcentaje;
 	
 	
 	cantidadLamparas = document.getElementById('txtIdCantidad').value;
 	cantidadLamparas = parseInt(cantidadLamparas);

 	marca = document.getElementById('Marca').value;

 	descuento=0;

 	precioBruto=35*cantidadLamparas;

 	if(cantidadLamparas>6)
 	{
 		porcentaje=50;
 	}
 	else
 	{
 		if(cantidadLamparas==5)
 		{
 			switch(marca)
 			{
 				case "ArgentinaLuz":
 					porcentaje=40;
 					break;
 				default:
 					porcentaje=30;
 			}
 		}
 		else
 		{
 			if(cantidadLamparas==4)
 			{
 				switch(marca)
 				{
 					case "ArgentinaLuz":
 					case "FelipeLamparas":
 						porcentaje=25;
 						break;
 					default:
 						porcentaje=20;
 						break;
 				}
 			}
 			else
 			{
 				if(cantidadLamparas==3)
 				{
 					switch(marca)
 					{
 						case "ArgentinaLuz":
 							porcentaje=15;
 							break;
 						case "FelipeLamparas":
 							porcentaje=10;
 							break;
 						default:
 							porcentaje=5;
 							break;
 					}
 				}
 			}
 		}
 	}

 	descuento = precioBruto * porcentaje / 100;
 	precioFinal = precioBruto - descuento;

 	if(precioFinal>120)
 	{
 		descuento=precioFinal * 10 / 100;
 		precioFinal=precioFinal + descuento;
 		alert("IIBB Usted pago "+descuento);
 	}

 
	document.getElementById("txtIdprecioDescuento").value = precioFinal;

*/	
}









