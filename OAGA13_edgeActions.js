/***********************
* Acciones de composición de Adobe Edge Animate
*
* Editar este archivo con precaución, teniendo cuidado de conservar 
* las firmas de función y los comentarios que comienzan con "Edge" para mantener la 
* capacidad de interactuar con estas acciones en Adobe Edge Animate
*
***********************/
(function($, Edge, compId){
var Composition = Edge.Composition, Symbol = Edge.Symbol; // los alias más comunes para las clases de Edge

   //Edge symbol: 'stage'
   (function(symbolName) {
      
      
      Symbol.bindElementAction(compId, symbolName, "document", "compositionReady", function(sym, e) {
         // introducir aquí código que se debe ejecutar cuando la composición está totalmente cargada
          yepnope(
                                   {
                                     nope: [
         
                  													'js/greensock/TweenMax.min.js',
                  													'js/greensock/utils/SplitText.min.js',
                  													'js/greensock/plugins/Physics2DPlugin.min.js',
                  													'js/LP/LPEmiter.js',
                  													'js/howler.min.js',
                  													'js/jquery.corner.js',
                  													'js/LP/LPBtnRollOverMenu.js',
                  													'js/LP/LPControZoom.js',
                           										'js/LP/LPContrTema.js',	
                           										'js/LP/LPControMenu.js',
                           										'js/LP/LPControladorIntefaz.js',	
                                                       	'js/LP/LPControladorPopUp.js',
                                                       	'js/LP/LPResalteGenerico.js',
                                                       	'js/LP/LPControladorMenuRoll.js',
                                                       	'js/LP/LPResaltePorObjeto.js',
                                                       	'filter.css'
         
         
                                     			],
                                  complete: init
         
                                  }
         
                           )
         
                   						var stage_js = document.getElementById("Stage");
                           			var pers = "800px";
         
                                       //////////////////////////////////////////////// inicio...
                                       //$('#Stage').hide();
                                       function init()
                                       {
                                       	stageGlobal=sym;
                                       	stage_js.style.webkitPerspectiveOrigin = "50% 50%";
                                           stage_js.style.webkitPerspective = pers;
                                           stage_js.style.MozPerspectiveOrigin = stage_js.style.webkitPerspectiveOrigin;
                                           stage_js.style.MozPerspective = pers;
                                           $("#Stage").LPBtnRoll("iniciar");
         
                  							}

      });
      //Edge binding end

   })("stage");
   //Edge symbol end:'stage'

   //=========================================================
   
   //Edge symbol: 'boton_sonido'
   (function(symbolName) {   
   
   })("boton_sonido");
   //Edge symbol end:'boton_sonido'

   //=========================================================
   
   //Edge symbol: 'botonClic'
   (function(symbolName) {   
   
   })("botonClic");
   //Edge symbol end:'botonClic'

   //=========================================================
   
   //Edge symbol: 'botonMapa'
   (function(symbolName) {   
   
   })("botonMapa");
   //Edge symbol end:'botonMapa'

   //=========================================================
   
   //Edge symbol: 'botonEvidencias'
   (function(symbolName) {   
   
   })("botonEvidencias");
   //Edge symbol end:'botonEvidencias'

   //=========================================================
   
   //Edge symbol: 'botonGuiapdf'
   (function(symbolName) {   
   
   })("botonGuiapdf");
   //Edge symbol end:'botonGuiapdf'

   //=========================================================
   
   //Edge symbol: 'botonMestudio'
   (function(symbolName) {   
   
   })("botonMestudio");
   //Edge symbol end:'botonMestudio'

   //=========================================================
   
   //Edge symbol: 'botonContex'
   (function(symbolName) {   
   
   })("botonContex");
   //Edge symbol end:'botonContex'

   //=========================================================
   
   //Edge symbol: 'iconoCreditos_3'
   (function(symbolName) {   
   
      Symbol.bindElementAction(compId, symbolName, "${_sprite_icono_creditos}", "mouseout", function(sym, e) {
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_sprite_icono_creditos}", "click", function(sym, e) {
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_sprite_icono_creditos}", "mouseover", function(sym, e) {
         

      });
      //Edge binding end

   })("iconoCreditos_3");
   //Edge symbol end:'iconoCreditos_3'

   //=========================================================
   
   //Edge symbol: 'iconoCreative_3'
   (function(symbolName) {   
         

   })("iconoCreative_3");
   //Edge symbol end:'iconoCreative_3'

   //=========================================================
   
   //Edge symbol: 'iconoRefe_3'
   (function(symbolName) {   
         

   })("iconoRefe_3");
   //Edge symbol end:'iconoRefe_3'

   //=========================================================
   
   //Edge symbol: 'iconoGlosario_3'
   (function(symbolName) {   
         

   })("iconoGlosario_3");
   //Edge symbol end:'iconoGlosario_3'

   //=========================================================
   
   //Edge symbol: 'botonVolver'
   (function(symbolName) {   
   
   })("botonVolver");
   //Edge symbol end:'botonVolver'

   //=========================================================
   
   //Edge symbol: 'cabezaPer1'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 9000, function(sym, e) {
         // introducir código aquí
         // Reproducir la línea de tiempo en un momento o etiqueta específicos. Por ejemplo:
         // sym.play(500); o sym.play("myLabel");
         sym.play(0);

      });
      //Edge binding end

   })("cabezaPer1");
   //Edge symbol end:'cabezaPer1'

   //=========================================================
   
   //Edge symbol: 'cabezaEvide'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 7000, function(sym, e) {
         // introducir código aquí
         sym.play(0);

      });
      //Edge binding end

   })("cabezaEvide");
   //Edge symbol end:'cabezaEvide'

   //=========================================================
   
   //Edge symbol: 'bar1'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 6992, function(sym, e) {
         // introducir código aquí
         // Reproducir la línea de tiempo en un momento o etiqueta específicos. Por ejemplo:
         // sym.play(500); o sym.play("myLabel");
         sym.play(0);

      });
      //Edge binding end

   })("bar1");
   //Edge symbol end:'bar1'

   //=========================================================
   
   //Edge symbol: 'b2'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 4978, function(sym, e) {
         // introducir código aquí
         // Reproducir la línea de tiempo en un momento o etiqueta específicos. Por ejemplo:
         // sym.play(500); o sym.play("myLabel");
         sym.play(0);

      });
      //Edge binding end

   })("b2");
   //Edge symbol end:'b2'

   //=========================================================
   
   //Edge symbol: 'b3'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 5000, function(sym, e) {
         // introducir código aquí
         // Reproducir la línea de tiempo en un momento o etiqueta específicos. Por ejemplo:
         // sym.play(500); o sym.play("myLabel");
         sym.play(0);

      });
      //Edge binding end

   })("b3");
   //Edge symbol end:'b3'

   //=========================================================
   
   //Edge symbol: 'barco4'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 5021, function(sym, e) {
         // introducir código aquí
         // Reproducir la línea de tiempo en un momento o etiqueta específicos. Por ejemplo:
         // sym.play(500); o sym.play("myLabel");
         sym.play(0);

      });
      //Edge binding end

   })("barco4");
   //Edge symbol end:'barco4'

   //=========================================================
   
   //Edge symbol: 'aion'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 12000, function(sym, e) {
         // introducir código aquí
         // Reproducir la línea de tiempo en un momento o etiqueta específicos. Por ejemplo:
         // sym.play(500); o sym.play("myLabel");
         sym.play(0);

      });
      //Edge binding end

   })("aion");
   //Edge symbol end:'aion'

   //=========================================================
   
   //Edge symbol: 'carro1'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 75000, function(sym, e) {
         // introducir código aquí
         // Reproducir la línea de tiempo en un momento o etiqueta específicos. Por ejemplo:
         // sym.play(500); o sym.play("myLabel");
         sym.play(0);

      });
      //Edge binding end

   })("carro1");
   //Edge symbol end:'carro1'

   //=========================================================
   
   //Edge symbol: 'barco3'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 5000, function(sym, e) {
         // introducir código aquí
         // Reproducir la línea de tiempo en un momento o etiqueta específicos. Por ejemplo:
         // sym.play(500); o sym.play("myLabel");
         sym.play(0);

      });
      //Edge binding end

   })("barco3");
   //Edge symbol end:'barco3'

   //=========================================================
   
   //Edge symbol: 'material_carro2'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 14000, function(sym, e) {
         // introducir código aquí
         // Reproducir la línea de tiempo en un momento o etiqueta específicos. Por ejemplo:
         // sym.play(500); o sym.play("myLabel");
         sym.play(0);

      });
      //Edge binding end

   })("material_carro2");
   //Edge symbol end:'material_carro2'

   //=========================================================
   
   //Edge symbol: 'material_carro1'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 11000, function(sym, e) {
         // introducir código aquí
         // Reproducir la línea de tiempo en un momento o etiqueta específicos. Por ejemplo:
         // sym.play(500); o sym.play("myLabel");
         sym.play(0);

      });
      //Edge binding end

   })("material_carro1");
   //Edge symbol end:'material_carro1'

})(jQuery, AdobeEdge, "EDGE-29415170");