'use strict';

class Animal {
  static aliveAnimals = [];
  constructor(name, health = 100) {
    this.name = name;
    this.health = health;
    Animal.alive.push(this);
  }
  static removeDeadAnimals() {
    Animal.alive = Animal.alive.filter((animal) => animal.health > 0);
  }
}


class Herbivore extends Animal {
  constructor(name, health = 100, hidden = false) {
    super(name, health);
    this.hidden = hidden;
    Herbivore.alive.push(this);
    Herbivore.alive.filter((elem) => elem > 0);
  }
  hide() {
    this.hidden = true;
  }
}

class Carnivore extends Animal {
  constructor(name, health = 100, hidden = false) {
    super(name, health);
    this.hidden = hidden;
    Carnivore.alive.push(this);
  }
    bite(herbivore) {
    if (herbivore instanceof Herbivore && herbivore.hidden !== true) {
      herbivore.health = herbivore.health - 50;
      Animal.removeDeadAnimals();
    }
  }
}

module.exports = {
  Animal,
  Herbivore,
  Carnivore,
};
