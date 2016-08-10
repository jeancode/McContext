# McContext
Menú contextual Personalizado 

Llamamos a la calse Mc y le agregamos el parametro donde queremos el menu contextual Derecho.

		var mc = new Mc("body")
		
Agregamos un objeto tipo json con el siguiente formato para generar el menu, y agregar los items ademas de aderir sus eventos
individuales en conveniencia.

NOTA: Solo responde a eventos  click Derecho  para abrir el menu  y click izquierdo para desplegar la funcion de cada item generado.

##Formato para generar menu
  	var menu = [
  	
			{
			"nombre":"Nueva Carpeta",
			"start":function(){alert("Adios")}
			},
			
			{
			"nombre":"Eliminar",
			"start":function(){alert("Eliminar")}
			}
		
		];

	 	mc.MenuContex(menu);
