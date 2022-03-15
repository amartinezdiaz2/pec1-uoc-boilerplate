/**
 * Obtenemos los distintos botones
*/

 let buttonHouse = document.getElementById('house');
 let buttonCard = document.getElementById('card');
 let buttonPlane = document.getElementById('plane');
 
 /**
 * Para cada botón, añadimos la función button para controlar la funcionalidad
 * a la hora de hacer click.
*/
 buttonHouse.onclick = function() {button(buttonHouse, [buttonCard, buttonPlane]);}
 buttonCard.onclick = function() {button(buttonCard, [buttonHouse, buttonPlane]);}
 buttonPlane.onclick = function() {button(buttonPlane, [buttonCard, buttonHouse]);}
 
 /**
 * Esta función distingue si la página tiene orientación horizontal o vertical
 * para realizar una y otra acción.
*/

 function button(element, elements){
   if(window.matchMedia("(orientation:portrait)").matches){
     display(element, elements);
   } else{
     visibility(element);
   }
 }

 /**
 * Controla la visibilidad del elemento hermano del botón. 
*/
 
 function visibility(element) {
   let listVisibility = element.nextElementSibling.style.visibility;
   switch(listVisibility){
     case 'visible':
       element.nextElementSibling.style.visibility = 'hidden';
       break;
     default:
       element.nextElementSibling.style.visibility = 'visible';
   };
 };

 /**
 * Controla la exposicón del elemento hermano del botón. Para exhibir
 * un elemento, elimina la expoción que hay anteriormente.
*/
 
 function display(element, elementNotDisplay){
   let listDisplay = element.nextElementSibling.style.display;
   switch(listDisplay){
     case 'block':
       element.nextElementSibling.style.display = 'none';
       break;
     default:
       notDisplay(elementNotDisplay);
       element.nextElementSibling.style.display = 'block';
       element.nextElementSibling.style.visibility = 'visible';
   }
 }

 /**
 * Para todos los elementos de la lista, elimina su exposición.
*/
 
 function notDisplay(elements){
   elements.forEach(element => {
     element.nextElementSibling.style.display = 'none';
   });
 }
