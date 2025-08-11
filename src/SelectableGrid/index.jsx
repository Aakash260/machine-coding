import React, { useState, useEffect } from "react";

const SelectableGrid = () => {
  const [matrix, setMatrix] = useState([]);
  const [pos, setPos] = useState({
    start: null,
    end: null,
  });

  useEffect(() => {
    const arr = [];
    for (let i = 0; i < 10; i++) {
      for (let j = 0; j < 10; j++) {
        arr.push({ row: i, col: j, isColor: false });
      }
    }
    setMatrix(arr);
  }, []);

  const handleOnDragStart = (e, item) => {
    setPos((prev) => ({ ...prev, start: { row: item.row, col: item.col } }));
  };

  const handleOnDragOver = (e, item) => {
    e.preventDefault(); // Required to allow drop behavior
    setPos((prev) => ({ ...prev, end: { row: item.row, col: item.col } }));
  };

  function fillcolor() {
    if (!pos.start || !pos.end) return;

    const startRow = Math.min(pos.start.row, pos.end.row);
    const endRow = Math.max(pos.start.row, pos.end.row);
    const startCol = Math.min(pos.start.col, pos.end.col);
    const endCol = Math.max(pos.start.col, pos.end.col);

    const newArr = matrix.map((cell) => {
      if (
        cell.row >= startRow &&
        cell.row <= endRow &&
        cell.col >= startCol &&
        cell.col <= endCol
      ) {
        return { ...cell, isColor: true };
      }
      return cell;
    });

    setMatrix(newArr);
  }

  useEffect(() => {
    fillcolor();
  }, [pos.end]);

  return (
    <div className="grid place-content-center gap-4">
      <h2>Selectable Grid</h2>
      <div className="grid grid-cols-10 w-fit">
        {matrix.map((item, ind) => (
          <div
            draggable
            onDragStart={(e) => handleOnDragStart(e, item)}
            onDragOver={(e) => handleOnDragOver(e, item)}
            key={ind}
            className={`border size-16 text-center flex items-center justify-center ${
              item.isColor ? "bg-green-400" : "bg-gray-200"
            }`}
          >
            {ind}
          </div>
        ))}
      </div>
    </div>
  );
};

export default SelectableGrid;
