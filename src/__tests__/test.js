import { Bowman, Swordsman, Magician, Undead, Zombie, Daemon } from '../Classes';
import Character from '../Classes';

test('test name', () => {
   const test = new Character('Legolas');
   expect(test).toBe(test);
});

test('test name error', () => {
   expect(() => new Character('AragornTheSunOfArathorn')).toThrow();
});

test('test levelUp fn ', () => {
   const legolas = new Bowman('Legolas');
   legolas.levelUp();
   expect(legolas.level).toBe(2);
});

test('test levelUp fn with zero health', () => {
   const legolas = new Bowman('Legolas');
   legolas.health = 0;
   expect(() => legolas.levelUp()).toThrow();
});

test('test damage fn ', () => {
   const legolas = new Bowman('Legolas');
   legolas.damage(50);
   expect(legolas.health).toBe(63);
});

test('test damage fn error', () => {
   const legolas = new Bowman('Legolas');
   legolas.health = 0;
   expect(() => legolas.damage(30)).toThrow();
});

test('test create new Swordman', () => {
   const aragorn = new Swordsman('Aragorn');
   expect(aragorn.type).toBe('Swordsman');
});

test('test create new Magician', () => {
   const gendalf = new Magician('Gendalf');
   expect(gendalf.type).toBe('Magician');
});

test('test create new Undead', () => {
   const golum = new Undead('Golum');
   expect(golum.type).toBe('Undead');
});

test('test create new Zombie', () => {
   const urukhai = new Zombie('Urukhai');
   expect(urukhai.type).toBe('Zombie');
});

test('test create new Daemon', () => {
   const sauron = new Daemon('Urukhai');
   expect(sauron.type).toBe('Daemon');
});
