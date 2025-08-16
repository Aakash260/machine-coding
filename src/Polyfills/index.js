//map
const arr = [1, 2, 3, 4];
Array.prototype.myMap = function (cb) {
  let result = [];
  for (let i = 0; i < this.length; i++) {
    result.push(this[i], i, this);
  }
  return result;
};

let polyFillMap = arr.myMap((item, i) => {
  return item * i;
});

console.log(polyFillMap);

// filter
Array.prototype.myFilter = function (cb) {
  let result = [];
  for (let i = 0; i < this.length; i++) {
    if (cb(this[i], i, this)) {
      result.push(this[i]);
    }
  }
  return result;
};

let polyFillFilter = arr.myFilter((item, i) => {
  return item < 4;
});

// reduce
Array.prototype.myReducer = function (cb, initialValue) {
  let accumulator;
  let startIndex;

  if (initialValue !== undefined) {
    accumulator = initialValue;
    startIndex = 0;
  } else {
    if (this.length === 0) {
      throw new TypeError("Reduce of empty array with no initial value");
    }
    accumulator = this[0];
    startIndex = 1;
  }

  for (let i = startIndex; i < this.length; i++) {
    accumulator = cb(accumulator, this[i], i, this);
  }

  return accumulator;
};

let polyFillReduce = arr.myReducer((acc, item) => {
  return acc + item;
}, 0);

console.log(polyFillReduce); // 10
