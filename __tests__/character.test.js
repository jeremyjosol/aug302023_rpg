import Character from './../src/character.js';

describe('Character', () => {
let paulsCharacter;
let jeremysCharacter;

beforeEach(() => {
  paulsCharacter = new Character("Paul", 10);
  jeremysCharacter = new Character("Jeremy", 10);
});

// beforeEach(() => {
//   newCharacter = new Character("Jeremy", 20, 20, 10);
// });

test('it should return the properties of the Character class instance paulsCharacter and jeremysCharacter', () => {
  expect(paulsCharacter).toEqual({name: "Paul", currentHp: 100, maxHp: 100, baseAttackPoints: 10, attackPoints: 10, armor: [], weapons: ["sword", 10 ,"knife", 7, "chicken", 5]});
  expect(jeremysCharacter).toEqual({name: "Jeremy", currentHp: 100, maxHp: 100, baseAttackPoints: 10, attackPoints: 10, armor: [], weapons: ["sword", 10 ,"knife", 7, "chicken", 5]});
});

test('it should add armor to paulsCharacter and increase maxHp by 7 points', () => {
  paulsCharacter.addArmor("shield", 7);
  expect(paulsCharacter).toEqual({name: "Paul", currentHp: 107, maxHp: 107, baseAttackPoints: 10, attackPoints: 10, armor: ["shield"], weapons: ["sword", 10 ,"knife", 7, "chicken", 5]});
});

test('it should add weapons to newCharacter with value of weapon', () => {
  paulsCharacter.addWeapons("dagger", 6);
  expect(paulsCharacter).toEqual({name: "Paul", currentHp: 100, maxHp: 100, baseAttackPoints: 10, attackPoints: 10, armor: [], weapons: ["sword", 10 ,"knife", 7, "chicken", 5, "dagger", 6]});
});

test('it should be able to assign a currentWeapon property to the character and assign a value based on the weapons array', () => {
  paulsCharacter.equipWeapon(2);
  expect(paulsCharacter).toEqual({name: "Paul", currentHp: 100, maxHp: 100, baseAttackPoints: 10, attackPoints: 17, armor: [], weapons: ["sword", 10 ,"knife", 7, "chicken", 5], currentWeapon: "knife"});
});

// test('it should decrement jeremysCharacter hp based off paulsCharacter attack points', () => {
//   paulsCharacter.attackEnemy(jeremysCharacter);
//   expect(jeremysCharacter).toEqual({name: "Jeremy", currentHp: 90, maxHp: 100, baseAttackPoints: 10, attackPoints: 10, armor: [], weapons: ["sword", 10 ,"knife", 7, "chicken", 5]});
// });


test('it should return a value that is defined', () => {
  let ranNumValue = paulsCharacter.ranNum();
  expect(ranNumValue).toBeGreaterThan(0);
  expect(ranNumValue).toBeLessThan(21);
});

test('it should return the value of the attackMult function when the roll is greater than 14', () => {
  // let attackMult = paulsCharacter.attackMult();
  let ranNumValue = paulsCharacter.attackMult(17);
  expect(ranNumValue).toEqual(1.5);
});

test('it should return the value of the attackMult function when the roll is greater than 9 and less than 15', () => {
  // let attackMult = paulsCharacter.attackMult();
  let ranNumValue = paulsCharacter.attackMult(11);
  expect(ranNumValue).toEqual(1);
});

test('it should return the value of the attackMult function when the roll is less than 10', () => {
// let attackMult = paulsCharacter.attackMult();
let ranNumValue = paulsCharacter.attackMult(6);
expect(ranNumValue).toEqual(0);

});
});

// describe('Constructor', () => {}
// test() => {}