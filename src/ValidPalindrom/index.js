function isPalindromeSimple(s) {
  const rev = s.split("").reverse().join("");
  return s === rev;
}

// examples
console.log(isPalindromeSimple("racecar"));
console.log(isPalindromeSimple("Racecar"));
console.log(isPalindromeSimple("a man a plan"));
