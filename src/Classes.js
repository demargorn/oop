import { Character } from './Character';

class Bowman extends Character {
   constructor(name, type = 'Bowman') {
      super(name, type);
      this.type = type;
      this.attack = 25;
      this.defence = 25;
   }
}

class Swordsman extends Character {
   constructor(name, type = 'Swordsman') {
      super(name, type);
      this.type = type;
      this.attack = 40;
      this.defence = 10;
   }
}

class Magician extends Character {
   constructor(name, type = 'Magician') {
      super(name, type);
      this.type = type;
      this.attack = 10;
      this.defence = 40;
   }
}

class Undead extends Character {
   constructor(name, type = 'Undead') {
      super(name, type);
      this.type = type;
      this.attack = 25;
      this.defence = 25;
   }
}

class Zombie extends Character {
   constructor(name, type = 'Zombie') {
      super(name, type);
      this.type = type;
      this.attack = 40;
      this.defence = 10;
   }
}

class Daemon extends Character {
   constructor(name, type = 'Daemon') {
      super(name, type);
      this.type = type;
      this.attack = 10;
      this.defence = 40;
   }
}

export { Bowman, Swordsman, Magician, Undead, Zombie, Daemon };
