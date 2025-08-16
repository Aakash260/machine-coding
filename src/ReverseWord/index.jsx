function reverseWords(sentence) {
  if (typeof sentence !== "string") return "";

  return sentence
    .split(" ")
    .map((word) => word.split("").reverse().join(""))
    .join(" ");
}

// Debug example
console.log(reverseWords("hello world"));

module.exports = reverseWords;
