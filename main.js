//oculto por defecto
element = document.getElementById('hideDiv');
element.style.display = 'none';  

function mostrarOcultar(){
  element = document.getElementById('hideDiv');
  estado = element.style.display;
  if(estado == 'none'){
  element.style.display='block'
  }else{
  element.style.display = 'none'; 
  }

}//end function mostrarOcultar