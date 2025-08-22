function deepOmit(obj, keysToOmit) {
  if (typeof obj !== "object" || obj === null) {
    return obj; // Base case (primitive)
  }

  if (Array.isArray(obj)) {
    return obj.map((item) => deepOmit(item, keysToOmit));
  }

  return Object.keys(obj).reduce((acc, key) => {
    if (!keysToOmit.includes(key)) {
      acc[key] = deepOmit(obj[key], keysToOmit);
    }
    return acc;
  }, {});
}

console.log(deepOmit({ a: 1, b: { c: 2, d: 3 }, e: [{ f: 4, c: 5 }] }, ["c"]));

//expained by chatgpt
