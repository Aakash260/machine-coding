import React from "react";

const Fibn = () => {
  const num = 10;

  function fibonacci(terms) {
    let series = [];
    let n1 = 0;
    let n2 = 1;

    for (let i = 0; i < terms; i++) {
      series.push(n1);
      let next = n1 + n2;
      n1 = n2;
      n2 = next;
    }

    console.log(series.join(", "));
    return [series];
  }

  const fibSeries = fibonacci(num);

  return (
    <div>
      <h2>Fibonacci Series</h2>
      <p>{fibSeries.join(", ")}</p>
    </div>
  );
};

export default Fibn;
