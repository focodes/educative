class Dog {
  constructor(name, species, size) {
    this.name = name;
    this.species = species;
    this.size = size;
  }
  bark(){
    let barking_frequency;
    if (this.size >= 60){
      barking_frequency = "Grrr! Grrr!"
    }
    else{
      barking_frequency = "Woof! Woof!"
    }
    return barking_frequency
  }
  describe(){
    return `${this.name} is a ${this.species} dog measuring ${this.size}. ${this.name} barks ${this.bark()}`
  }
}

const criollo = new Dog ('Betowen', 'criollo', 50);
console.log(criollo.describe())