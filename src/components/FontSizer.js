import React, { Component } from "react";

export default class FontSizer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      size: 20
    };
  }

  handleCrement(amt) {
    this.setState({
      size: this.state.size + amt
    });
  }

  render() {
    return (
      <div>
        <button onClick={() => this.handleCrement(-5)}>Shrink</button>
        <button onClick={() => this.handleCrement(5)}>Grow</button>
        <p style={{ fontSize: `${this.state.size}px` }}>{this.state.size}px</p>
      </div>
    );
  }
}
