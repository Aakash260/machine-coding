function mergeArrays(arr1, arr2) {
  const map = new Map();

  // Insert arr1
  for (let obj of arr1) {
    map.set(obj.id, { ...obj });
  }

  // Merge arr2 (override conflicts)
  for (let obj of arr2) {
    if (map.has(obj.id)) {
      map.set(obj.id, { ...map.get(obj.id), ...obj });
    } else {
      map.set(obj.id, { ...obj });
    }
  }

  return Array.from(map.values());
}

const arr1 = [
  { id: 1, name: "Alice" },
  { id: 2, name: "Bob" },
];

const arr2 = [
  { id: 2, age: 30 },
  { id: 3, name: "Charlie" },
];

console.log(mergeArrays(arr1, arr2));
