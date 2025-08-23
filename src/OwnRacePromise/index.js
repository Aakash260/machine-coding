const t1 = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("t1 success");
    }, 1500);
  });
};

const t2 = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      reject("t2 reject");
    }, 2000);
  });
};

const t3 = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("t3 success");
    }, 1000);
  });
};
Promise.myPromiseRace = function (promises) {
  return new Promise((resolve, reject) => {
    if (!Array.isArray(promises)) {
      reject(new Error("undefined is not an iterable"));
      return;
    }
    const n = promises.length;
    if (n === 0) {
      resolve();
      return;
    }
    promises.forEach((promise) => {
      return Promise.resolve(promise).then(resolve).catch(reject);
    });
  });
};

Promise.myPromiseRace([t1(), t2(), t3()])
  .then((res) => {
    console.log("promise race", res);
  })
  .catch((err) => {
    console.log(err);
  });
