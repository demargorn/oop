import showHealth from '../index.js';

test.each([
   [
      {
         name: 'Warrior',
         health: 90,
      },
      'healthy',
   ],
   [
      {
         name: 'Magic',
         health: 45,
      },
      'wounded',
   ],
   [
      {
         name: 'Druid',
         health: 10,
      },
      'critical',
   ],
])('testing showHealth fn with %o hero', (hero, indicator) => {
   const result = showHealth(hero);
   expect(result).toBe(indicator);
});
