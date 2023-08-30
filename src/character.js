export default class Character {
  constructor(name, currentHp, maxHp, attackPoints){
    this.name = name;
    this.currentHp = currentHp;
    this.maxHp = maxHp;
    this.attackPoints = attackPoints;
    this.armor = [];
  }
  
  addArmor(type, value){
    this.armor.push(type);
    this.maxHp += value;
  }
  }