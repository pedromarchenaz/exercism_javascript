//
// This is only a SKELETON file for the 'ETL' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export default function transform(legacyFormat) {
  const newFormat = {};

  for (const [score, letters] of Object.entries(legacyFormat)) {
    letters.forEach(letter => {
      newFormat[letter.toLowerCase()] = Number(score);
    });
  }

  return newFormat;
}