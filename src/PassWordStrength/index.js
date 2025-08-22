import React, { useState } from "react";

function checkPasswordStrength(password) {
  let score = 0;

  // Criteria checks
  if (password.length >= 8) score++;
  if (/[A-Z]/.test(password)) score++;
  if (/[a-z]/.test(password)) score++;
  if (/[0-9]/.test(password)) score++;
  if (/[^A-Za-z0-9]/.test(password)) score++;

  if (score === 0) return { level: 0, text: "Weak Password" };
  if (score === 1) return { level: 1, text: "Level 1 - Very Weak" };
  if (score === 2 || score === 3)
    return { level: 2, text: "Level 2 - Moderate" };
  if (score === 4 || score === 5) return { level: 3, text: "Level 3 - Strong" };
}

const strengthColors = {
  0: "bg-gray-400",
  1: "bg-red-500",
  2: "bg-yellow-500",
  3: "bg-green-600",
};

export default function PasswordStrengthChecker() {
  const [password, setPassword] = useState("");
  const { level, text } = checkPasswordStrength(password);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-900 text-white p-6">
      <h1 className="text-2xl font-bold mb-4">Password Strength Checker</h1>
      <input
        type="password"
        placeholder="Enter password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        className="p-2 rounded-md border border-gray-600 text-black mb-4 w-64"
      />

      <div className="w-64 h-2 bg-gray-700 rounded-full overflow-hidden mb-2">
        <div
          className={`h-2 ${strengthColors[level]} transition-all`}
          style={{ width: `${(level / 3) * 100}%` }}
        />
      </div>

      <p className="text-sm">{text}</p>
    </div>
  );
}
