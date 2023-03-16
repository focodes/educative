const player = {
  pseudonym: "develocod",
  health: 25,
  strength: 75,
  xp: 1,
  // descripcion del personaje
  describe() {
    let descripcion = `${this.pseudonym} es tu personaje, tiene ${this.health} de salud, ${this.strength} de fuerza y ${this.xp} de ex `;
    return descripcion
  },
};

//Luego de un entrenamiento
player.health += 30;
player.xp += 15;
console.log(aurora.describe())