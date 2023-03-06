// El ámbito de una variable es la parte del programa en la que la variable es visible y utilizable. 
//No es posible declarar una const dentro de un bloque

//Los () alteran el roden de las operaciones
let operacionMatematica = 9 + 7 * 5 
let operacionMatematica2 = (9 + 7) * 5;

//Uso de una literal de plantilla 

let valorDelProducto = 10;
let nombreDelProducto = 'Unidad USB';

console.log(`La ${nombreDelProducto}\ntiene un valor de ${valorDelProducto}`)

let nombreDeUsuario = 'Faber';
console.log(`Bienvendo ${nombreDeUsuario}, ¿Qué vamos a hacer hoy?`);