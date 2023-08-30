export default class Character {
  constructor(name, currentHp, maxHp, attackPoints){
    this.name = name;
    this.currentHp = currentHp;
    this.maxHp = maxHp;
    this.attackPoints = attackPoints;
    this.armor = [];
    this.weapons = ["sword", "knife", "chicken"];
    this.currentWeapon = "knife";
  }
  
  addArmor(type, value){
    this.armor.push(type);
    this.maxHp += value;
  }

  addWeapons(type){
    this.weapons.push(type);
  }}

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