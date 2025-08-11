import React, { useState } from "react";

const InputChip = () => {
  const [data, setData] = useState([]);
  const [inputData, setInputData] = useState("");

  const handleChange = (e) => {
    setInputData(e.target.value);
  };
  const handleKeyDown = (e) => {
    if (e.key === "Enter" && inputData.trim() !== "") {
      setData((prev) => [...prev, inputData]);
      setInputData("");
    }
  };
  const handleDelete = (item) => {
    const filterArr = data.filter((data) => data != item.trim());
    setData(filterArr);
  };
  return (
    <div>
      <input
        type="text"
        onChange={handleChange}
        onKeyDown={handleKeyDown}
        value={inputData}
        className="border w-40 h-8 px-2"
        placeholder="Enter text"
      />
      {data.map((item, ind) => {
        return (
          <div className="border w-fit mb-2 px-4 py-1 rounded-md mx-auto mt-4">
            {item}{" "}
            <span
              className="cursor-pointer ml-2"
              onClick={() => handleDelete(item)}
            >
              🗑️
            </span>
          </div>
        );
      })}
    </div>
  );
};

export default InputChip;
