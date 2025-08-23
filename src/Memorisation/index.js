function memoize(fn) {
  const cache = new Map();

  return function (...args) {
    const key = JSON.stringify(args); // use args as cache key
    if (cache.has(key)) {
      console.log("Fetching from cache:", key);
      return cache.get(key);
    }
    console.log("Calculating result for:", key);
    const result = fn(...args);
    cache.set(key, result);
    return result;
  };
}

// Example slow function
function slowSquare(n) {
  // simulate expensive calculation
  for (let i = 0; i < 1e8; i++) {
    console.log("first");
  }
  return n * n;
}

const memoizedSquare = memoize(slowSquare);

console.log(memoizedSquare(5)); // Calculates
console.log(memoizedSquare(5)); // Cached
console.log(memoizedSquare(6)); // Calculates
console.log(memoizedSquare(6)); // Cached
