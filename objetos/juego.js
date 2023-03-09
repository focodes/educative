// Crear un personaje a partir de un objeto

const personaje = {
  seudonimo: "develocod",
  agilidad: 45,
  babosas: 12,
  poder: 49,
  defensa: 50,
  //Un propiedad de un objeto cuyo valor es una funcion se llama MÉTODO
  suPoder() {
    return `Su poder es de ${this.poder}, para aumentarlo tendrá que combatir.`;
  },
};

// deveocod a encontrado dos babosas, añadelas
personaje.babosas += 2;
// develocod a entrenado, actualiza su agilidad
personaje.agilidad += 10;


// optimizando lo anterior
function actualizacion(denominacion) {
  console.log(
    `Tu personaje ${denominacion.seudonimo} ha aumentado sus babosas a ${denominacion.babosas} y su agilidad a ${denominacion.agilidad}`
  );
}
actualizacion(personaje);

// se puede colocar la funcion dentro del objeto
console.log(personaje.suPoder());
