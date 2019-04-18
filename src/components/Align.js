import React, { Component } from "react";

export default class FontSizer extends Component {
  constructor() {
    super();

    this.state = {
      align: "center"
    };
  }

  handleAlignSelect(alignment) {
    this.setState({
      align: alignment
    });
  }

  render() {
    return (
      <div className="align-app-wrapper">
        <div className="align-text-wrapper">
          <p style={{ textAlign: `${this.state.align}` }}>Align Me</p>
        </div>

        <div className="button-wrapper">
          <button onClick={() => this.handleAlignSelect("left")}>Left</button>
          <button onClick={() => this.handleAlignSelect("center")}>
            Center
          </button>
          <button onClick={() => this.handleAlignSelect("right")}>Right</button>
        </div>
      </div>
    );
  }
}
