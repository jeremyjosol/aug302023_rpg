export default class Character {
  constructor(name, currentHp, maxHp, attackPoints){
    this.name = name;
    this.currentHp = currentHp;
    this.maxHp = maxHp;
    this.attackPoints = attackPoints;
    this.armor = [];
    this.weapons = [];
  }
  
  addArmor(type, value){
    this.armor.push(type);
    this.maxHp += value;
  }

  addWeapons(type, value){
    this.weapons.push(type, value);
  }
  }