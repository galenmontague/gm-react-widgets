import React, { Component } from "react";

export default class Counter extends Component {
  constructor(props) {
    super(props);

    this.state = {
      num: 0
    };

    this.handleCrement = this.handleCrement.bind(this);
  }

  handleCrement(amt) {
    this.setState({
      num: this.state.num + amt
    });
    console.log(this.state.num);
  }

  render() {
    return (
      <div>
        <h2>{this.state.num}</h2>
        <button onClick={() => this.handleCrement(-1)}>Subtract 1</button>
        <button onClick={() => this.handleCrement(1)}>Add 1</button>
      </div>
    );
  }
}
