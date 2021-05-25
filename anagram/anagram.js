//
// This is only a SKELETON file for the 'Anagram' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

var Anagram = function(originalWord) {
  var sortedWord = function(w) {
      return w.split('').sort().join('');
  };

  var sortedOrignalWord = sortedWord(originalWord);

  var isAnagram = function(otherWord) {
      return sortedOrignalWord === sortedWord(otherWord);
  };

  this.match = function(possibleAnagrams) {
      return possibleAnagrams.filter(isAnagram);
  }
};

module.exports = Anagram;