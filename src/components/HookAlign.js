import React, { useState } from "react";

const AlignText = () => {
  const [alignment, setAlignment] = useState("center");

  return (
    <div className="align-app-wrapper">
      <div className="align-text-wrapper">
        <p style={{ textAlign: `${alignment}` }}>Align Me</p>
      </div>

      <div className="button-wrapper">
        <button onClick={() => setAlignment("left")}>Left</button>
        <button onClick={() => setAlignment("center")}>Center</button>
        <button onClick={() => setAlignment("right")}>Right</button>
      </div>
    </div>
  );
};

export default AlignText;
