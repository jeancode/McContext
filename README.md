# McContext
Menú contextual Personalizado 

Llamamos a la calse Mc y le agregamos el parametro donde queremos el menu contextual Derecho.

		var mc = new Mc("body")
		
Agregamos un objeto tipo json con el siguiente formato para generar el menu, y agregar los items ademas de aderir sus eventos
individuales en conveniencia.

##Formato
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
