class Character {
   constructor(name) {
      this.name = name;
      this.type = null;
      this.level = 1;
      this.health = 100;
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

export { Character };
