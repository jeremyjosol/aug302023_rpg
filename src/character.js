console.log("hello");

export default class Character {
  constructor(name, baseAttackPoints){
    this.name = name;
    this.maxHp = 100;
    this.currentHp = this.maxHp;
    this.baseAttackPoints = baseAttackPoints;
    this.attackPoints = baseAttackPoints;
    this.armor = [];
    this.weapons = ["sword", 10 ,"knife", 7, "chicken", 5];
  }
  
  addArmor(type, value){
    this.armor.push(type);
    this.maxHp += value;
    this.currentHp += value;
  }

  addWeapons(type, value){
    this.weapons.push(type);
    this.weapons.push(value);
    // this.currentWeapon = this.weapons;
  }
  equipWeapon(index){
    this.currentWeapon = this.weapons[index];
    this.attackPoints = this.baseAttackPoints;
    this.attackPoints += this.weapons[index + 1];
  }

  attackEnemy(char2) {
    char2.currentHp -= this.attackPoints;
}
}
  // equipWeapon(index) {
  //   if (index >= 0 && index < this.weapons.length) {
  //     let attackPoints = 5;
  //     const newWeapon = this.weapons[index];
  //     if (newWeapon === "sword") {
  //       this.attackPoints += 5;
  //       this.currentWeapon = "sword";
  //     } else if (newWeapon === "dagger") {
  //       this.attackPoints += 3;
  //       this.currentWeapon = "dagger";
  //     } else {
  //       console.log("Invalid weapon type.");
  //     }
  //   } else {
  //     console.log("Invalid index.");
  //   }

  // equipWeapon(i){
  //   const pickWeapon = this.weapons[i];

  //   if (i >= 0 && i < this.weapons.length){

  //     this.attackPoints += 5;
  //     this.currentWeapon = "sword";
  //    } else { this.pickWeapon === "dagger";
  //   this.attackPoints += 3;  
  // }
  // }}

  // Work on newCharacter instance;