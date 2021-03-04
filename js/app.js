function Numeros(string){//Solo numeros
    var out = '';
    var filtro = '1234567890';//Caracteres validos
	
    //Recorrer el texto y verificar si el caracter se encuentra en la lista de validos 
    for (var i=0; i<string.length; i++)
       if (filtro.indexOf(string.charAt(i)) != -1) 
             //Se añaden a la salida los caracteres validos
	     out += string.charAt(i);
	
    //Retornar valor filtrado
    return out;
} 
function validarNum (elem,num){
    var input=  document.getElementById(elem);
    input.addEventListener('input',function(){
      if (this.value.length > num) 
         this.value = this.value.slice(0,num); 
    })
}

validarNum("rnc",9);

