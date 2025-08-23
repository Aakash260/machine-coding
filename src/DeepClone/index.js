// const a={
//   name:{
//     firstname:"aakash"
//   }
// }
// const b={...a}
// a.name.lastname="nirwan"
// console.log(a,"a")
// console.log(b,"b")

// probm above

function deepClone(obj) {
  if (obj === null || typeof obj !== "object") {
    return obj;
  }
  let clone = Array.isArray(obj) ? [] : {};

  for (let key in obj) {
    const value = obj[key];
    clone[key] = deepClone(value);
  }
  return clone;
}
deepClone({ a: { b: { c: 3 } } });
