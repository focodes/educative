function cuadradoNumero (numero){
  console.log(numero*numero);
}

const funcionAnonima = (numero) => console.log(numero*numero);

cuadradoNumero(19)
funcionAnonima(52)

// Soluciom mejorada
function cuadradoNumero2(){
  for (let numero = 1; numero < 100; numero++){
  console.log(numero*numero);
  }
}

cuadradoNumero2()
