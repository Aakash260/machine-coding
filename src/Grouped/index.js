function groupBy(arr, key) {
  return arr.reduce((result, item) => {
    const value = item[key];
    if (!result[value]) {
      result[value] = [];
    }
    result[value].push(item);
    return result;
  }, {});
}

// Example 1
const users = [
  { name: "Alice", age: 25 },
  { name: "Bob", age: 30 },
  { name: "Charlie", age: 25 },
];

console.log(groupBy(users, "age"));

const products = [
  { id: 1, category: "Electronics" },
  { id: 2, category: "Clothing" },
  { id: 3, category: "Electronics" },
];

console.log(groupBy(products, "category"));
