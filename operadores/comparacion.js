const numero1 = Number(prompt('Numero 1 '));
const numero2 = Number(prompt('Numero 2 '));;
// Evaluacion de los componentes

if(numero1 > numero2){
  console.log(`El ${numero1} es mayor que el ${numero2}`)
}
else if (numero2 > numero1){
  console.log(`El ${numero2} es mayor que el ${numero1}`)
}
else{
  console.log('Son iguales');
}