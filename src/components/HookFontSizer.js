import React, { useState } from "react";

const FontSizer = () => {
  const [size, setSize] = useState(20);

  return (
    <div>
      <button onClick={() => setSize(size - 5)}>Shrink</button>
      <button onClick={() => setSize(size + 5)}>Grow</button>
      <p style={{ fontSize: `${size}px` }}>{size}px</p>
    </div>
  );
};

export default FontSizer;
