/** Get object value from string path... */

const obj = {
  a: {
    b: {
      c: [1, 2, 3],
    },
  },
};

const get = (obj, path) => {
  if (path === "" || path.length === 0) {
    return undefined;
  }

  if (Array.isArray(path)) {
    path = path.join(".");
  }
  let exactPath = [];

  for (let i = 0; i < path.length; i++) {
    if (path[i] !== "[" && path[i] !== "]" && path[i] !== ".") {
      exactPath.push(path[i]);
    }
  }

  const value = exactPath.reduce((source, path) => source[path], obj);

  return value;
};

// [a,b,c,0]
console.log(get(obj, "a.b"));
