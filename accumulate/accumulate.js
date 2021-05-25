//
// This is only a SKELETON file for the 'Accumulate' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export default function accumulate(collection, fn) {
  return collection.reduce((acc, item) => {
    acc.push(fn(item));
    return acc;
  }, []);
}