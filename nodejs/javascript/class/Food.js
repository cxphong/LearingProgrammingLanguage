module.exports = class Food {

  constructor (name, protein, carbs, fat) {
    this.name = name;
    this.protein = protein;
    this.carbs = carbs;
    this.fat = fat;
  }

  getName() {
    this.private_stuff()
    return this.name;
  }

}
