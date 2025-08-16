function sum(...args) {
  return args.reduce((acc, curr) => {
    console.log(`acc: ${acc}, curr: ${curr}`);
    return acc + curr;
  }, 0);
}

//For the purpose of user debugging.

console.log(sum(100, 200, 300, 400));
