import Character from './../src/character.js';

describe('Character', () => {
let paulsCharacter;
let jeremysCharacter;

beforeEach(() => {
  paulsCharacter = new Character("Paul", 20, 20, 10, 10);
  jeremysCharacter = new Character("Jeremy", 20, 20, 10, 10);
});

// beforeEach(() => {
//   newCharacter = new Character("Jeremy", 20, 20, 10);
// });

test('it should return the properties of the Character class instance paulsCharacter and jeremysCharacter', () => {
  expect(paulsCharacter).toEqual({name: "Paul", currentHp: 20, maxHp: 20, baseAttackPoints: 10, attackPoints: 10, armor: [], weapons: ["sword", 10 ,"knife", 7, "chicken", 5]});
  expect(jeremysCharacter).toEqual({name: "Jeremy", currentHp: 20, maxHp: 20, baseAttackPoints: 10, attackPoints: 10, armor: [], weapons: ["sword", 10 ,"knife", 7, "chicken", 5]});
});

test('it should add armor to paulsCharacter and increase maxHp by 7 points', () => {
  paulsCharacter.addArmor("shield", 7);
  expect(paulsCharacter).toEqual({name: "Paul", currentHp: 20, maxHp: 27, baseAttackPoints: 10, attackPoints: 10, armor: ["shield"], weapons: ["sword", 10 ,"knife", 7, "chicken", 5]});
});

test('it should add weapons to newCharacter with value of weapon', () => {
  paulsCharacter.addWeapons("dagger", 6);
  expect(paulsCharacter).toEqual({name: "Paul", currentHp: 20, maxHp: 20, baseAttackPoints: 10, attackPoints: 10, armor: [], weapons: ["sword", 10 ,"knife", 7, "chicken", 5, "dagger", 6]});
});

test('it should be able to assign a currentWeapon property to the character and assign a value based on the weapons array', () => {
  paulsCharacter.equipWeapon(2);
  expect(paulsCharacter).toEqual({name: "Paul", currentHp: 20, maxHp: 20, baseAttackPoints: 10, attackPoints: 17, armor: [], weapons: ["sword", 10 ,"knife", 7, "chicken", 5], currentWeapon: "knife"});
});
});

// describe('Constructor', () => {}
// test() => {}