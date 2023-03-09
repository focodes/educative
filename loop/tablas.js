let numero = Math.floor(Math.random() * 10);
let multiplicacion;

if (numero >= 2 && numero <= 8) {
  for (let i = 1; i <= 10; i++) {
    multiplicacion = numero * i
    console.log(`${numero} * ${i} = ${multiplicacion}`);
  }
}
else {
  console.log('Fuera de rango');
}
