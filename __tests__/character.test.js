import Character from './../src/character.js';

describe('Character', () => {

test('it should return the properties of the Character class', () => {
  const newCharacter = new Character("name1", "armor1", "weapon1");
  expect(newCharacter).toEqual({name: "name1", armor: "armor1", weapon: "weapon1"});
})

});




// describe('Constructor', () => {}
// test() => {}