let suma = 0;
const numeros = [2,12,11,13,21,41];
const guarismos = [29,14,54,16,87];

function sumaElementos (arreglo){
  for(let i = 0; i < arreglo.length; i++){
    suma += arreglo[i]; // suma = suma + arreglo[i]
  }
  return suma
}

function sumaDeGuarismos (arreglo){
  let suma = 0;
  for ( i of arreglo){
    suma += i;
  }
  console.log(suma)
}

console.log(sumaElementos(numeros));
sumaDeGuarismos(guarismos)