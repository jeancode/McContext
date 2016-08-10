function Mc(donde,menu){
			this.evetMenu = evetMenu;
			this.MenuContex = MenuContex;
			this.donde = donde;
			this.menu = menu;
		}
	
		function evetMenu(){
			$("#menu-context").mouseleave(function(){
			
				$(this).remove();
	
			});		
		}
		//desabilitar menu context
		function MenuContex(menu){
		document.oncontextmenu = function(){return false}
		$(this.donde).mousedown(function(e){
			if(e.which == 3){
			
					$(this).append('<div id="menu-context"></div>');
					$("#menu-context").css({
					"height":"auto",
					"width":"160px",
					"background":"white",
					"border":"1px solid #ddd",
					"border-radius":"5px",
					"position":"fixed",
					"top":e.pageY -10,
					"left":e.pageX - 100,
					"box-shadow":"0px 0px 10px gray",
                    "overflow":"hidden"
					});
					for(var i = 0;i <=  menu.length-1;i++){
					$("#menu-context").append("<div class='item-menu' id='Mc"+i+"'>"+menu[i].nombre+"</div>");
						
						$("#Mc"+i).click(menu[i].start);
		
					}
					$(".item-menu").css({
					"padding-top":"5px",
					"padding-bottom":"5px",
					"text-align":"center",
					"cursor":"default",
					"font-family":"verdana",
					"font-size":"13px"
					});
		
					
					evetMenu();
				}
			});
		}