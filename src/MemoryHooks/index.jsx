import React, { useCallback, useState, useMemo, memo } from "react";

const ChildSection = memo(({ data, onReset }) => {
  console.log("Child re-rendered ❌");
  return (
    <div className="mt-6 p-4 border rounded-2xl shadow bg-gray-50">
      <h3 className="text-lg font-semibold text-blue-600">Child Component</h3>
      <p className="mt-2 text-gray-700">
        Squared Value: <span className="font-bold">{data}</span>
      </p>
      <button
        onClick={onReset}
        className="mt-4 px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600 transition"
      >
        Reset Counter
      </button>
    </div>
  );
});

const MemoryHooks = () => {
  const [counter, setCounter] = useState(0);

  const squaredValue = useMemo(() => {
    console.log("square function re-rendered 🔄", counter);
    return counter * counter;
  }, [counter]);

  const resetCounter = useCallback(() => {
    console.log("reset Counter re-rendered 🔄");
    setCounter(0);
  }, []);

  console.log("Parent re-rendered 🔄");

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-indigo-100 via-white to-indigo-50 p-6">
      <div className="w-full max-w-md bg-white rounded-2xl shadow-lg p-6">
        <h1 className="text-2xl font-bold text-center text-indigo-700 mb-6">
          🚀 With Hooks Example
        </h1>

        <div className="flex items-center justify-center gap-4 mb-6">
          <button
            onClick={() => setCounter((prev) => (prev === 3 ? 3 : prev + 1))}
            className="w-12 h-12 flex items-center justify-center rounded-full bg-green-500 text-white text-xl font-bold hover:bg-green-600 transition"
          >
            +
          </button>
          <h2 className="text-xl font-semibold">{counter}</h2>
          <button
            onClick={() => setCounter((prev) => prev - 1)}
            className="w-12 h-12 flex items-center justify-center rounded-full bg-red-500 text-white text-xl font-bold hover:bg-red-600 transition"
          >
            –
          </button>
        </div>

        <h2 className="text-center text-gray-800 mb-4">
          Squared Value: <span className="font-bold">{squaredValue}</span>
        </h2>

        <ChildSection data={squaredValue} onReset={resetCounter} />
      </div>
    </div>
  );
};

export default MemoryHooks;
