class Character {
  constructor(pseudonym, health, strength) {
    this.pseudonym = pseudonym;
    this.health = health;
    this.strength = strength;
    this.xp = 0;
  }
  describe() {
    return `pseudonym: ${this.pseudonym},  health: ${this.health}, strength: ${this.strength}, xp: ${this.xp} `;
  }
}

//una clase solo puede contener métodos, no propiedades de datos

//una vez definida la clase puedes usarla para crear objetos
const xperia =  new Character ('xperia', 100, 500);
const yaze = new Character ( 'yaze', 98, 230);
const ziyers = new Character('ziyers', 60, 300);

// personaje principal 
ziyers.xp += 20;
ziyers.health -= 10;
ziyers.strength += 5;

console.log(ziyers.pseudonym)
console.log(ziyers.describe())
