import React, { useState } from "react";

const Toggle = () => {
  const [toggle, setToggle] = useState(true);

  return (
    <div>
      <h1>{toggle ? "Hello!" : "Goodbye!"}</h1>
      <button onClick={() => setToggle(!toggle)}>
        Click to Toggle Message
      </button>
    </div>
  );
};

export default Toggle;
