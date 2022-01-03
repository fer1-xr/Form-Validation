//variables
const user = document.querySelector('#user');
const password = document.querySelector('#password');
const btnEnviar = document.querySelector('#btn');

eventListener();
function eventListener(){
   document.addEventListener('DOMContentLoaded', iniciarApp);
}
//Campos del form
user.addEventListener('blur', validarFormulario);
password.addEventListener('blur', validarFormulario);

 

//Funciones
function iniciarApp(){
   btn.disabled = true ;
   btn.classList.add('cursor-not-allowed', 'opacity-50')
   
}

//Validar form
function validarFormulario(e){
   if(e.target.value.length > 0 ) {
      e.target.classList.add('border', 'border-green-500');
      if(user.value !== '' && password.value !== '' ) {
         btn.disabled = false;
         btn.classList.remove('opacity-50');
         btn.classList.remove('cursor-not-allowed');
        }
 } else {
   e.target.classList.add('border', 'border-red-500');
 }
}







