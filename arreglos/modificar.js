const habitos = ['Dormir']; // elemento 0

habitos.push('Leer'); // elemento 1
habitos.unshift('Meditar'); // elemento 2
habitos.pop(); // elimina el ultimo elemento
habitos.splice(1,1) // elimina los elementos deseados a partir de una posicion
console.log(habitos)


//arreglo 
const pasatiempos = ['Fútbol','', 'Ajedrez', 'Música'];
pasatiempos.push('Fotografía');
pasatiempos.splice(1,1)
console.log(pasatiempos)

let buscarIndice = pasatiempos.indexOf('Música');

if (buscarIndice === 2){
  console.log(`Hemos encontrado al ${pasatiempos.indexOf('Música')} elemento`)
}