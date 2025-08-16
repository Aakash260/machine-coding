import React from "react";

const LargestNumberFormed = () => {
  const arr = [3, 30, 34, 5, 9];

  let arrStr = arr.map((item) => item.toString());
  console.log(arrStr);
  arrStr.sort((a, b) => (b + a).localeCompare(a + b));
  if (arrStr[0] === "0") return "0";

  return arrStr.join("");
};

export default LargestNumberFormed;
