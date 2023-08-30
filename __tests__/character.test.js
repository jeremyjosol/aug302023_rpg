import Character from './../src/character.js';

describe('Character', () => {
let newCharacter;

beforeEach(() => {
  newCharacter = new Character("Paul", 20, 20, 10);
});


test('it should return the properties of the Character class', () => {
  expect(newCharacter).toEqual({name: "Paul", currentHp: 20, maxHp: 20, attackPoints: 10});
})

// test('')
});




// describe('Constructor', () => {}
// test() => {}