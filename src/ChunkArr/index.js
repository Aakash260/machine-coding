function chunkArray(array, size) {
  if (size <= 0) throw new Error("Size must be greater than 0");

  const result = [];
  for (let i = 0; i < array.length; i += size) {
    result.push(array.slice(i, i + size));
  }
  return result;
}

chunkArray([1, 2, 3], 5);
module.exports = chunkArray;
