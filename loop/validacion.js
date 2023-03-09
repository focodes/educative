let entrada = Math.floor(Math.random()*100);
let intento  = 1;

while(entrada > 50){
  entrada = Math.floor(Math.random()*100);
  console.log(`El número generado es ${entrada}, este es su intento ${intento}`)
  intento++;
}
console.log('Numero es: ' + entrada, 'Cantidad de intentos: ' + intento)


