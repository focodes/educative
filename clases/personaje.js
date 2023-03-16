// Agregar un inventario para los personajes
// Este contiene oro y llaves 
class Character {
  constructor(name, health, strength) {
    this.name = name;
    this.health = health;
    this.strength = strength;
    this.xp = 0; // XP is always zero for new characters
    this.inventory = [10,1]
  }
  // Attack a target
  attack(target) {
    if (this.health > 0) {
      const damage = this.strength;
      console.log(
        `${this.name} attacks ${target.name} and causes ${damage} damage points`
      );
      target.health -= damage;
      if (target.health > 0) {
        console.log(`${target.name} has ${target.health} health points left`);
      } else {
        target.health = 0;
        const bonusXP = 10;
        const gold_Won = target.inventory [0];
        const keys_Won = target.inventory[1];
        console.log(
          `${this
            .name} eliminated ${target.name} and wins ${bonusXP} experience points and ${gold_Won} gold and ${keys_Won} keys`
        );
        this.inventory[0] += gold_Won;
        this.inventory += keys_Won;

        this.xp += bonusXP;
      }
    } else {
      console.log(`${this.name} can't attack (they've been eliminated)`);
    }
  }

  // Return the character description
  describe() {
    return `${this.name} has ${this.health} health points, ${this
      .strength} as strength and ${this.xp} XP points, ${this.inventory[0]} gold and ${this.inventory[1]} keys`;
  }
}


// Cuando un personaje elimina a otro este toma sus pertenencias
