import React, { useState } from "react";

const BishopMove = () => {
  const size = 8;
  const [highlighted, setHighlighted] = useState([]);

  // Get all diagonals a bishop can move from (row, col)
  const getBishopMoves = (row, col) => {
    const moves = [[row, col]]; // include hovered cell itself

    // 4 diagonal directions
    const directions = [
      [1, 1], // bottom-right
      [1, -1], // bottom-left
      [-1, 1], // top-right
      [-1, -1], // top-left
    ];

    for (const [dr, dc] of directions) {
      let r = row + dr;
      let c = col + dc;
      while (r >= 0 && r < size && c >= 0 && c < size) {
        moves.push([r, c]);
        r += dr;
        c += dc;
      }
    }
    return moves;
  };

  // Handle hover or click
  const handleSelect = (row, col) => {
    setHighlighted(getBishopMoves(row, col));
  };

  // Handle leaving board
  const clearHighlights = () => {
    setHighlighted([]);
  };

  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: `repeat(${size}, 60px)`,
        gridTemplateRows: `repeat(${size}, 60px)`,
        border: "2px solid black",
      }}
      onMouseLeave={clearHighlights} // clear when leaving board
    >
      {Array.from({ length: size }, (_, row) =>
        Array.from({ length: size }, (_, col) => {
          const isDark = (row + col) % 2 === 1;

          const highlightClass = highlighted.some(
            ([r, c]) => r === row && c === col
          )
            ? row === highlighted[0][0] && col === highlighted[0][1]
              ? "hovered"
              : "bishop-move"
            : "";

          return (
            <div
              key={`${row}-${col}`}
              role="gridcell"
              onMouseEnter={() => handleSelect(row, col)}
              onClick={() => handleSelect(row, col)}
              style={{
                width: "60px",
                height: "60px",
                backgroundColor: isDark ? "#769656" : "#eeeed2",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                cursor: "pointer",
                boxSizing: "border-box",
                border: highlightClass
                  ? highlightClass === "hovered"
                    ? "3px solid red"
                    : "3px solid blue"
                  : "1px solid #333",
              }}
            ></div>
          );
        })
      )}
    </div>
  );
};

export default BishopMove;
