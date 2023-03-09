let numero = Math.floor(Math.random()*1000);
let intento  = 1;

while(numero < 1  || numero > 10){
  console.log(`El número generado es ${numero}, este es su intento ${intento}`);
  numero = Math.floor(Math.random()*1000);
  
  intento++;
}

console.log('Numero es: ' + numero, 'Cantidad de intentos: ' + intento);

