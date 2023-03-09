// Entidades representadas a traves de propiedades 

const libro = {
  color: 'Verde',
  titulo: 'EL poder del ahora',
  paginas: 323,
  autor: 'Eckhart Tolle'
};

// Se puede acceder a las propiedades de un objeto mediante la notacion de corchetes

console.log(libro.titulo);
console.log(`Es un libro de ${libro.paginas} paginas`);
libro.color = 'amarillo'; // modifica la propiedad color
libro.ambito = 'Espiritualidad'
console.log(`Su ámbito radica en la ${libro.ambito}`);