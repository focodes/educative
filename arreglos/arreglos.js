// objeto con propiedades especiales
const peliculasFavotitas = ["Un puente hacia terabithia", "Gato con Botas"];
const series = ["Gravity Falls", "Bajoterra", 'Miraculous', 'Show Mas'];
const arreglo = [];
//iterando para agregar elementos 
for (let i = 3; i < 100; i += 3) {
  console.log(arreglo.length);
  arreglo.push(i);
}
console.log(arreglo);
// otra manera de iterar
series.forEach(elemento =>{
  console.log(elemento)
});

// otra manera de iterar
for(const elemento of peliculasFavotitas){
  console.log(elemento);
}
