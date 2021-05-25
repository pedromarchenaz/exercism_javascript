//
// This is only a SKELETON file for the 'Pangram' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export default class Pangram {
  constructor(input) {
      this.input = input;
  }

  isPangram() {
      const letters = [..."abcdefghijklmnopqrstuvwxyz"];
      const lowerCaseInput = this.input.toLowerCase(); 
      return letters.every(lettter => lowerCaseInput.includes(lettter));
  }
}