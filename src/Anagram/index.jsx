function areAnagrams(str1, str2) {
  if (str1.length !== str2.length) return false;

  const count = {};

  // count frequency of letters in str1
  for (let char of str1) {
    count[char] = (count[char] || 0) + 1;
  }

  // subtract frequency using str2
  for (let char of str2) {
    if (!count[char]) {
      return false; // either not found or extra char
    }
    count[char]--;
  }

  return true; // all balanced
}

// Example
console.log(areAnagrams("listen", "silent")); // true
console.log(areAnagrams("hello", "world")); // false
