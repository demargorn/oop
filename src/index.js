import { Bowman, Swordsman, Zombie } from './Classes';

const bowman = new Bowman('Legolas');
const swordsman = new Swordsman('Aragorn');
const zombie = new Zombie('Aragorn');
bowman.levelUp();
console.log(bowman);
console.log(bowman.health);
console.log(bowman.attack);

console.log(swordsman);
console.log(zombie);
