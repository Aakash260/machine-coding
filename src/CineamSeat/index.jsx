import React, { useState } from "react";

const Cinema = () => {
  const [selectedSeat, setSelectedSeat] = useState([]);
  const [booked, setBooked] = useState([]);
  const handleClick = (ind) => {
    if (booked.includes(ind)) {
      alert("already booked");
    }
    setSelectedSeat((prev) => [...prev, ind]);
  };

  const handleBook = () => {
    setBooked([...selectedSeat]);
  };

  const handleClear = () => {
    setSelectedSeat([]);
  };
  const handleReset = () => {
    setSelectedSeat([]);
    setBooked([]);
  };
  return (
    <div>
      <div className="flex gap-4 justify-center my-8">
        <div
          className="border p-2 cursor-pointer rounded-md"
          onClick={handleBook}
        >
          Book
        </div>
        <div
          className="border p-2 cursor-pointer rounded-md"
          onClick={handleClear}
        >
          Clear
        </div>
        <div
          className="border p-2 cursor-pointer rounded-md"
          onClick={handleReset}
        >
          Reset
        </div>
      </div>
      <div className="grid grid-cols-10 gap-4">
        {[...Array(50)].map((_, ind) => {
          return (
            <div
              key={ind}
              className={`w-14 flex items-center justify-center h-14 border cursor-pointer rounded-md ${
                selectedSeat.includes(ind) && !booked.includes(ind)
                  ? "bg-green-200"
                  : ""
              } ${booked.includes(ind) && "bg-gray-400"}`}
              onClick={() => handleClick(ind)}
            >
              S_{ind}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Cinema;
