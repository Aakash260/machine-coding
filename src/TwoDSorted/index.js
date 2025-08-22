function searchMatrix(matrix, target) {
  if (!matrix.length || !matrix[0].length) return false;

  let rows = matrix.length;
  let cols = matrix[0].length;

  let left = 0;
  let right = rows * cols - 1;

  while (left <= right) {
    let mid = Math.floor((left + right) / 2);
    let midValue = matrix[Math.floor(mid / cols)][mid % cols];

    if (midValue === target) {
      return true;
    } else if (midValue < target) {
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }

  return false;
}

const matrix = [
  [1, 3, 5, 7],
  [10, 11, 16, 20],
  [23, 30, 34, 60],
];

console.log(searchMatrix(matrix, 3));
console.log(searchMatrix(matrix, 13));
