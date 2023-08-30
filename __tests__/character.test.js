import Character from './../src/character.js';

describe('Character', () => {
let newCharacter;

beforeEach(() => {
  newCharacter = new Character("Paul", 20, 20, 10);
});

test('it should return the properties of the Character class', () => {
  expect(newCharacter).toEqual({name: "Paul", currentHp: 20, maxHp: 20, attackPoints: 10, armor: []});
});

test('it should add armor to newCharacter and increase maxHp by 7 points', () => {
  newCharacter.addArmor("shield", 7);
  expect(newCharacter).toEqual({name: "Paul", currentHp: 20, maxHp: 27, attackPoints: 10, armor: ["shield"]});
});
});




// describe('Constructor', () => {}
// test() => {}