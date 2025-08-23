import React, { useState } from "react";

const MultiSelectDropdown = () => {
  const options = ["Apple", "Banana", "Mango", "Orange", "Grapes"];
  const [selected, setSelected] = useState([]);
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => setIsOpen(!isOpen);

  const handleSelect = (option) => {
    if (!selected.includes(option)) {
      setSelected([...selected, option]);
    }
  };

  const handleRemove = (option) => {
    setSelected(selected.filter((item) => item !== option));
  };

  return (
    <div className="relative w-64">
      {/* Selected options */}
      <div
        onClick={toggleDropdown}
        className="border rounded-lg p-2 flex flex-wrap gap-2 cursor-pointer"
      >
        {selected.length === 0 ? (
          <span className="text-gray-400">Select options...</span>
        ) : (
          selected.map((item) => (
            <span
              key={item}
              className="bg-blue-100 text-blue-700 px-2 py-1 rounded-full flex items-center gap-1"
            >
              {item}
              <button
                onClick={(e) => {
                  e.stopPropagation(); // prevent dropdown toggle
                  handleRemove(item);
                }}
                className="text-red-500 font-bold"
              >
                ×
              </button>
            </span>
          ))
        )}
      </div>

      {/* Dropdown menu */}
      {isOpen && (
        <div className="absolute w-full border rounded-lg mt-1 bg-white shadow-lg z-10">
          {options.map((option) => (
            <div
              key={option}
              onClick={() => handleSelect(option)}
              className="p-2 hover:bg-gray-100 cursor-pointer"
            >
              {option}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default MultiSelectDropdown;
