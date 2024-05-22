function saludo(nombre){
  
    alert('Le damos la bienvenida ' + nombreIngresado);
    if(nombreIngresado != ""){
        saludo("Bienvenido" + nombreIngresado);
    }else {
        alert("Ingrese su nombre por favor")
    }
}
    var nombreIngresado = prompt("Ingrese su nombre"); 
    saludo(nombreIngresado);
