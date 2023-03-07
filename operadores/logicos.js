// Operador AND 
let numero = 32;

if ((numero >=0 )&& (numero<=30)){
  console.log(`El ${numero} se encuentra en el rango de 0 y 30 incluidos`);
}

//operador or
if ((numero > 30) || (numero<0)) {
  console.log(`El ${numero} no está en el rango de 0 y 30 incluidos`);
}

//operador de negacion
if (!(numero>100)){
  console.log(`El ${numero} es menor a 100`);

}
