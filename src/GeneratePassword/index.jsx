import { useState } from "react";

export default function PasswordGenerator() {
  const [length, setLength] = useState(8);
  const [includeLower, setIncludeLower] = useState(true);
  const [includeUpper, setIncludeUpper] = useState(false);
  const [includeNumbers, setIncludeNumbers] = useState(false);
  const [includeSymbols, setIncludeSymbols] = useState(false);
  const [password, setPassword] = useState("");

  const generatePassword = () => {
    let chars = "";
    if (includeLower) chars += "abcdefghijklmnopqrstuvwxyz";
    if (includeUpper) chars += "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    if (includeNumbers) chars += "0123456789";
    if (includeSymbols) chars += "!@#$%^&*()_+[]{}|;:,.<>?";

    if (!chars) {
      setPassword("Select at least one option!");
      return;
    }

    let generated = "";
    for (let i = 0; i < length; i++) {
      const randomIndex = Math.floor(Math.random() * chars.length);
      generated += chars[randomIndex];
    }
    setPassword(generated);
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-900 text-gray-800 text-white">
      <div className="bg-white dark:bg-gray-800 shadow-lg rounded-lg p-6 w-[350px] text-center">
        <h1 className="text-2xl font-bold mb-2">Password Generator</h1>
        <p className="text-sm text-gray-600 dark:text-gray-300 mb-4">
          Create a secure and strong password
        </p>

        <div className="border rounded-lg p-4">
          <h2 className="text-lg font-semibold mb-2">Password Length</h2>
          <input
            type="number"
            min="4"
            max="32"
            value={length}
            onChange={(e) => setLength(Number(e.target.value))}
            className="w-20 border rounded text-center mb-4"
          />

          <div className="flex flex-col gap-2 text-left">
            <label className="flex items-center gap-2">
              <input
                type="checkbox"
                checked={includeLower}
                onChange={() => setIncludeLower(!includeLower)}
              />
              Include LowerCase
            </label>
            <label className="flex items-center gap-2">
              <input
                type="checkbox"
                checked={includeUpper}
                onChange={() => setIncludeUpper(!includeUpper)}
              />
              Include UpperCase
            </label>
            <label className="flex items-center gap-2">
              <input
                type="checkbox"
                checked={includeNumbers}
                onChange={() => setIncludeNumbers(!includeNumbers)}
              />
              Include Numbers
            </label>
            <label className="flex items-center gap-2">
              <input
                type="checkbox"
                checked={includeSymbols}
                onChange={() => setIncludeSymbols(!includeSymbols)}
              />
              Include Symbols
            </label>
          </div>

          <button
            onClick={generatePassword}
            className="mt-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition"
          >
            Generate
          </button>
        </div>

        {password && (
          <div className="mt-4">
            <p className="font-semibold text-lg">{password}</p>
          </div>
        )}
      </div>
    </div>
  );
}
