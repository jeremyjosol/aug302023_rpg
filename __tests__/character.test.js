import Character from './../src/character.js';

describe('Character', () => {
let newCharacter;

beforeEach(() => {
  newCharacter = new Character("Paul", 20, 20, 10);
});

// beforeEach(() => {
//   newCharacter = new Character("Jeremy", 20, 20, 10);
// });

test('it should return the properties of the Character class', () => {
  expect(newCharacter).toEqual({name: "Paul", currentHp: 20, maxHp: 20, attackPoints: 10, armor: [], weapons: ["sword", "knife", "chicken"]});
});

test('it should add armor to newCharacter and increase maxHp by 7 points', () => {
  newCharacter.addArmor("shield", 7);
  expect(newCharacter).toEqual({name: "Paul", currentHp: 20, maxHp: 27, attackPoints: 10, armor: ["shield"], weapons: ["sword", "knife", "chicken"]});
});

test('it should add weapons to newCharacter and increase attackPoints by 5 points', () => {
  newCharacter.addWeapons("dagger");
  expect(newCharacter).toEqual({name: "Paul", currentHp: 20, maxHp: 20, attackPoints: 10, armor: [], weapons: ["sword", "knife", "chicken", "dagger"]});
});

test('it should be able to assign a currentWeapon property to the character and assign a value based on the weapons array', () => {
  newCharacter.equipWeapon(0, 10);
  expect(newCharacter).toEqual({name: "Paul", currentHp: 20, maxHp: 20, attackPoints: 20, armor: [], weapons: ["sword", "knife", "chicken"], currentWeapon: "sword"});
});
});




// describe('Constructor', () => {}
// test() => {}