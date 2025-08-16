import React, { useRef } from "react";

function InputFocus() {
  const ref = useRef();
  return (
    <div style={{ padding: "20px", textAlign: "center" }}>
      <input
        ref={ref}
        type="text"
        placeholder="Type here"
        style={{ padding: "8px", fontSize: "16px", marginRight: "10px" }}
      />
      <button
        onClick={() => ref.current.focus()}
        style={{ padding: "8px 12px" }}
      >
        Focus Input
      </button>
    </div>
  );
}

export default InputFocus;
