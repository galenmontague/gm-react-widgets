import React, { useState } from "react";

const Toggle = () => {
  const [toggle, setToggle] = useState(true);

  return (
    <div>
      <button onClick={() => setToggle(!toggle)}>
        {toggle ? "SHOW" : "HIDE"}
      </button>
      <h1
        style={{
          display: toggle ? "block" : "none"
        }}
      >
        Hello!
      </h1>
    </div>
  );
};

export default Toggle;
