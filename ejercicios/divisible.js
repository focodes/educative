let arreglo = [];
let numero = 0;

for (let i = 0; i <= 100; i++) {
  arreglo.push(i);
  numero = arreglo[i];

  if (numero > 0) {
    if (numero % 3 === 0 && numero % 5 === 0) {
      console.log("FizzBuzz");
    } else if (numero % 3 === 0) {
      console.log("Fizz");
    } else if (numero % 5 === 0) {
      console.log("Buzz");
    } else {
      console.log(numero);
    }
  }
}
