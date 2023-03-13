const pseudonym = 'develocod';
const pseudonym_Array = Array.from (pseudonym); //lo acaba de convertir en una cadena
console.log(pseudonym_Array);
pseudonym_Array.forEach(element => {
  console.log(element);
})
/*
Dividir una cadena en partes
*/ 
const list_Tools = 'Esferos,audifonos,usb,tapones,carpeta';
const individuals_Tools = list_Tools.split(',');

console.log(individuals_Tools[2]);
console.log(individuals_Tools[0]);
console.log(individuals_Tools[4]);


