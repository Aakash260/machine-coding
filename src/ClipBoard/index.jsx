import React from "react";

const ClipBoard = () => {
  const data = "copy this text";
  const handleCopy = (data) => {
    navigator.clipboard.writeText(data).then(() => console.log("text-copied"));
  };

  return (
    <div>
      <span onClick={() => handleCopy(data)} className="cursor-pointer">
        {data}
      </span>
    </div>
  );
};

export default ClipBoard;
