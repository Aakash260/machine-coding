import React, { useState } from "react";

export default function LeapYear() {
  const [year, setYear] = useState("");
  const [result, setResult] = useState("");
  const [error, setError] = useState("");
  const handleCheck = () => {
    if (year.trim() === "") {
      setError("Please enter a valid year");
      setResult("");
      return;
    }
    const numYear = parseInt(year.trim(), 10);
    if (isNaN(numYear)) {
      setError("Please enter a valid year");
      return;
    }

    if (numYear % 400 === 0) {
      setResult(`${numYear} is a leap year`);
    } else if (numYear % 4 === 0 && numYear % 100 !== 0) {
      setResult(`${numYear} is a leap year`);
    } else {
      setResult(`${numYear} is not a leap year`);
    }
  };

  return (
    <div className="container">
      <h1>Leap Year Checker</h1>
      <label data-testid="label-date">Enter a year:</label>
      <input
        type="text"
        data-testid="year-input"
        onChange={(e) => setYear(e.target.value)}
        value={year}
      />
      <button data-testid="check-btn" onClick={handleCheck}>
        Check
      </button>
      {result && <p data-testid="result">{result}</p>}
      {error && <p data-testid="error-msg">{result}</p>}
    </div>
  );
}
