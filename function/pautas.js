/*
Funciones predefinidas en el programa 
alert()
prompt()
*/
const entradaRecibida = prompt('Ingrese su nombre');
const entradaRecibida2 = prompt('Ingrese su apellido');

const funcionAnonima = (entradaRecibida, entradaRecibida2) => {
  const mensaje = `Hola ${entradaRecibida} ${entradaRecibida2}!`;
  return mensaje
};

console.log(funcionAnonima(entradaRecibida,entradaRecibida2))

