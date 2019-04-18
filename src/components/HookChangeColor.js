import React, { useState } from "react";

const ChangeColor = () => {
  const [textInput, setTextInput] = useState("");
  const [textOutput, setTextOutput] = useState("");

  const handleChange = event => {
    setTextInput(event.target.value);
  };

  const handleSubmit = event => {
    setTextOutput(textInput);
    event.preventDefault();
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        placeholder="Input an HTML color"
        type="text"
        value={textInput}
        onChange={handleChange}
      />
      <input type="submit" value="Submit Color" />
      <p style={{ color: textOutput }}>{textOutput}</p>
    </form>
  );
};

export default ChangeColor;
