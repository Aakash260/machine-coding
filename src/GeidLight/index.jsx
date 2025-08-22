import React, { useState } from "react";

const GridLights = ({ n = 5 }) => {
  // Initialize grid with all 0s (off)
  const [grid, setGrid] = useState(
    Array.from({ length: n }, () => Array(n).fill(0))
  );

  const toggleLight = (row, col) => {
    const newGrid = grid.map((r) => [...r]);

    // Helper function to toggle cell safely
    const toggle = (i, j) => {
      if (i >= 0 && i < n && j >= 0 && j < n) {
        newGrid[i][j] = newGrid[i][j] === 1 ? 0 : 1;
      }
    };

    // Toggle clicked cell and its neighbors
    toggle(row, col); // self
    toggle(row - 1, col); // top
    toggle(row + 1, col); // bottom
    toggle(row, col - 1); // left
    toggle(row, col + 1); // right

    setGrid(newGrid);
  };

  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: `repeat(${n}, 50px)`,
        gap: "5px",
      }}
    >
      {grid.map((row, i) =>
        row.map((cell, j) => (
          <div
            key={`${i}-${j}`}
            onClick={() => toggleLight(i, j)}
            style={{
              width: "50px",
              height: "50px",
              backgroundColor: cell ? "yellow" : "black",
              border: "1px solid #ccc",
              cursor: "pointer",
            }}
          />
        ))
      )}
    </div>
  );
};

export default GridLights;
