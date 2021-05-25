//
// This is only a SKELETON file for the 'Raindrops' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export default class Raindrops {
  convert(i) {
      const parts = [];

      if (i % 3 == 0)
          parts.push('Pling');

      if (i % 5 == 0)
          parts.push('Plang');

      if (i % 7 == 0)
          parts.push('Plong');

      return parts.length === 0 ? i.toString() : parts.join('');
  }
}