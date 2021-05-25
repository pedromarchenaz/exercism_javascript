//
// This is only a SKELETON file for the 'Hamming' exercise. It's been provided as a
// convenience to get you started writing code faster.
//
var Hamming = function() {};

Hamming.prototype.compute = function(dna1, dna2) {

  if (dna1.length != dna2.length) {
    throw Error('DNA strands must be of equal length.');
  }
  else {
    distance = 0;
    for (item = 0; item < dna1.length; item++) {
      if (dna1[item] != dna2[item]) {
        distance += 1;
      }
    }
  }
  
  return distance;

};

module.exports = Hamming;