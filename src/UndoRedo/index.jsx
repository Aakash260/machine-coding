import { useState, useEffect, useRef } from "react";

const useUndoRedo = (initialValue, limit = 10) => {
  const [history, setHistory] = useState([initialValue]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const inputRef = useRef(null);
  const set = (value) => {
    let newHistory = history.slice(0, currentIndex + 1);
    newHistory.push(value);

    if (newHistory.length > limit) {
      newHistory = newHistory.slice(newHistory.length - limit);
    }
    setHistory(newHistory);
    setCurrentIndex(newHistory.length - 1);
  };

  const undo = () => {
    setCurrentIndex((curr) => Math.max(curr - 1, 0));
  };
  const redo = () => {
    setCurrentIndex((curr) => Math.min(curr + 1, history.length - 1));
  };

  useEffect(() => {
    const handleKeyDown = (event) => {
      if (
        inputRef.currentIndex &&
        inputRef.currentIndex === inputRef.activeElement
      ) {
        if (event.ctrlKey && event.key === "z") {
          event.preventDefault();
          undo();
        } else if (event.ctrlKey && event.key === "y") {
          event.preventDefault();
          redo();
        }
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [redo, undo]);

  return [history[currentIndex], set, undo, redo, inputRef];
};

const RedoUndo = () => {
  const [value, setValue, undo, redo, inputRef] = useUndoRedo("", 10);
  return (
    <div style={{ width: "fit-content", margin: "0 auto", marginTop: "200px" }}>
      <input
        type="text"
        ref={inputRef}
        value={value}
        className="border"
        onChange={(e) => setValue(e.target.value)}
      />
      <div className="[&_button]:border space-x-4 mt-4">
        <button onClick={undo}>Undo</button>
        <button onClick={redo}>Redo</button>
      </div>
    </div>
  );
};

export default RedoUndo;

// const [history, setHistory] = useState([initialValue]);
// history is an array of all the past values (the states you typed into the input).

// Example: if you type step by step:

// Start: [""]

// Type "a": ["", "a"]

// Type "ab": ["", "a", "ab"]

// Type "abc": ["", "a", "ab", "abc"]
