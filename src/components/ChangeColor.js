import React, { Component } from "react";

export default class ChangeColor extends Component {
  constructor(props) {
    super(props);
    this.state = {
      textInput: "",
      textOutput: ""
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({ textInput: event.target.value });
    // console.log(event.target.value)
  }

  handleSubmit(event) {
    this.setState({ textOutput: this.state.textInput });
    event.preventDefault();
    // console.log(this.state.textOutput)
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <input
          placeholder="Input an HTML color"
          type="text"
          value={this.state.textInput}
          onChange={this.handleChange}
        />
        <input type="submit" value="Submit Color" />
        <p style={{ color: this.state.textOutput }}>{this.state.textOutput}</p>
      </form>
    );
  }
}
