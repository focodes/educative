class Character {
  constructor(pseudonym, health, strength) {
    this.pseudonym = pseudonym;
    this.health = health;
    this.strength = strength;
    this.xp = 0;
  }
  attack(target) {
    if (this.health > 0) {
      const damage = this.strength;
      console.log(
        `${this.pseudonym} attack ${target.pseudonym} and cause ${damage} damage points`
      );
      target.health -= damage;

      if (target.health > 0) {
        console.log(`${target.pseudonym} has ${target.health} health points left `);
      } else {
        target.health = 0;
        const bonus_xp = 10;
        console.log(
          `${this.pseudonym} eliminated ${target.pseudonym} and wins ${bonus_xp} experience points`
        );
        this.xp += bonus_xp;
      }
    }
    else{
      console.log(`${this.pseudonym} can't attack (they've been eliminated)`)
    }
  }

  describe(){
    return `pseudonym: ${this.pseudonym},  health: ${this.health}, strength: ${this.strength}, xp: ${this.xp} `;

  }
}

const xperia =  new Character ('xperia', 100, 500);
const dick = new Character ( 'dick', 98, 230);

console.log("Welcome to the adventure! Here are our heroes:");
console.log(xperia.describe());
console.log(dick.describe());

const monster = new Character('lord', 20,40);
console.log("A wild has appeared: it's named " +  monster.pseudonym);

monster.attack(xperia);
monster.attack(dick);
xperia.attack(monster);
dick.attack(monster);

console.log(xperia.describe());
console.log(dick.describe())