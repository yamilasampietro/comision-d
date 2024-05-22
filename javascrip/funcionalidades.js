//ejercitacion clase10//

var nombre = 'Yamila';
var apellido = 'Sampietro';
console.log(nombre + ' ' +apellido)

var num1 = 10;
var num2 = 0;
var suma = num1+num2;
console.log(suma)
num3 = suma +3;
console.log(num3)


//ejercitacion clase 11//
//if//
var topping = '0';

    if(topping ='oreo'){ 
     console.log('el precio es de $10');
}   if(topping ='kitKat'){ 
    console.log('el precio es de $15');    
}   if(topping ='Kinder'){ 
    console.log('el precio es de $25');
}   if(topping !='oreo, Kit Kat, Kinder'){ 
    console.log('no tenemos este topping');
}

var precio = 0;
var helado = 200;
var precioFinal = precio+helado;
console.log('el precio es $' + " " +precioFinal)
//switch//
var menu = prompt("ingrese menu")
switch (menu){
    case 'carne':
        console.log("se sugiere vino tinto");
        break;
    case 'pescado':
        console.log("se sugiere vino blanco")
        break;
    case 'verdura':
        console.log("se sugiere agua")
        break;
    default:
        console.log("elija algo del menu")       
}
//for//
var animales =["leon", "vaca", "gato", "conejo", "aguila"];
console.log(animales);
console.log(animales[0]);
console.log(animales[1]);
console.log(animales[2]);
console.log(animales[3]);
console.log(animales[4]);
console.log("cantidad de animales",animales.length);
for(let i=0; i<nombre.length; i++){
    console.log(animales[i])
    animales.push("perro");
}
//while//
var numero = 10;
while (numero < 11){
    console.log("numero es mas chico que 11");
    numero = numero -1
    break;
}
