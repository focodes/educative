// Una funcion es un conjunto de pasos que realizan na tarea concreta
function mostrar (){
  console.log('Me llamo develocod')
  return 'Un gusto conocerlos'
}


let capturarRetorno = mostrar();
console.log(capturarRetorno);


// Los parametros es informacion necesaria para la ejecucion del programa


function saludoPersonalizado (nombre){
  const mensajeDeBienvenida= `Bienvenido ${nombre}`;
  return mensajeDeBienvenida
}

console.log(saludoPersonalizado('usuario'));


// Funciones anonimas
const funcionAnonima = function (edad){
  const anodeNacimiento = 2023 - edad;
  const mensaje = `Usted nació en el año ${anodeNacimiento}`
  return console.log(mensaje)
};

funcionAnonima(41)
// La anterior funcion no tiene nombre se llama apartir de la constante



// Funciones de flecha, son una forma más moderna de crear funciones anonimas

const funcionAnonima2 = (parametro1, parametro2) => {
  const mensaje = `¿Qué vamos a hacer hoy ${parametro1} ${parametro2}?`
  return mensaje
};

console.log(funcionAnonima2('Segio', 'Jimenez'));

//Funcion simplificada
const funcionSimplificada = parametro1 => `Te quedan ${12-parametro1} meses de formacion`;

console.log(funcionSimplificada(3))