// Write code to create a function that accepts two strings
// Return true if the strings are anagrams of each other, otherwise return false

var isAnagram = function (strA, strB) {
  if (strA.length !== strB.length) return false; // Early exit for unequal lengths

  const countA = {};
  const countB = {};
  // Populate frequency objects for both strings
  for (let char of strA.toLowerCase()) {
    countA[char] = (countA[char] || 0) + 1;
  }
  for (let char of strB.toLowerCase()) {
    countB[char] = (countB[char] || 0) + 1;
  }
  // Compare the two frequency objects
  for (let key in countA) {
    if (countA[key] !== countB[key]) {
      return false;
    }
  }

  return true;
};
