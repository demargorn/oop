class Character {
   constructor(name) {
      this.name = name;
      this.health = 100;
      this.level = 1;
      this.attack = null;
      this.defence = null;

      if (this.name.length < 2 || this.name.length > 10) {
         throw new Error(`Your name must be at least 2 and no more than 10 characters`);
      }
   }

   levelUp() {
      if (this.health === 0) {
         throw new Error(`You cannot increase the level of the deceased hero`);
      }

      this.level += 1;
      this.health = 100;
      this.attack += Math.floor(this.attack * 0.2);
      this.defence += Math.floor(this.defence * 0.2);
   }

   damage(points) {
      if (this.health <= 0) {
         throw new Error(`You are dead`);
      }

      this.health -= Math.floor(points * (1 - this.defence / 100));
   }
}

class Bowman extends Character {
   constructor(name) {
      super(name);
      this.type = 'Bowman';
      this.attack = 25;
      this.defence = 25;
   }
}

class Swordsman extends Character {
   constructor(name) {
      super(name);
      this.type = 'Swordsman';
      this.attack = 40;
      this.defence = 10;
   }
}

class Magician extends Character {
   constructor(name) {
      super(name);
      this.type = 'Magician';
      this.attack = 10;
      this.defence = 40;
   }
}

class Undead extends Character {
   constructor(name) {
      super(name);
      this.type = 'Undead';
      this.attack = 25;
      this.defence = 25;
   }
}

class Zombie extends Character {
   constructor(name) {
      super(name);
      this.type = 'Zombie';
      this.attack = 40;
      this.defence = 10;
   }
}

class Daemon extends Character {
   constructor(name) {
      super(name);
      this.type = 'Daemon';
      this.attack = 10;
      this.defence = 40;
   }
}

export { Bowman, Swordsman, Magician, Undead, Zombie, Daemon };
