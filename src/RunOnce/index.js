function once(params) {
  let isCalled = false;

  return function () {
    if (!isCalled) {
      isCalled = true;
      return params();
    }
    return;
  };
}
