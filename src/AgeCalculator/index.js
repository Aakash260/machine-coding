import React, { useState } from "react";

export default function AgeCalculator() {
  const [dob, setDob] = useState("");
  const [age, setAge] = useState(null);

  const handleCalculate = () => {
    if (!dob) return;

    const birthDate = new Date(dob);
    const today = new Date();

    let years = today.getFullYear() - birthDate.getFullYear();
    let months = today.getMonth() - birthDate.getMonth();
    let days = today.getDate() - birthDate.getDate();

    if (days < 0) {
      months--;
      days += new Date(today.getFullYear(), today.getMonth(), 0).getDate();
    }

    if (months < 0) {
      years--;
      months += 12;
    }

    setAge({ years, months, days });
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-900 text-white">
      <h1 className="text-2xl font-bold mb-4">Age Calculator</h1>
      <input
        type="date"
        value={dob}
        onChange={(e) => setDob(e.target.value)}
        className="p-2 mb-4 rounded-md text-black"
      />
      <button
        onClick={handleCalculate}
        className="px-4 py-2 bg-blue-600 rounded-lg hover:bg-blue-700"
      >
        Calculate Age
      </button>

      {age && (
        <p className="mt-4 text-lg">
          You are <span className="font-bold">{age.years}</span> years,{" "}
          <span className="font-bold">{age.months}</span> months, and{" "}
          <span className="font-bold">{age.days}</span> days old.
        </p>
      )}
    </div>
  );
}
