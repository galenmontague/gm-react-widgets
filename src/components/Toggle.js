import React, { Component } from "react";

export default class Toggle extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isToggleOn: true
    };
  }

  handleClick = () => {
    this.setState({ isToggleOn: !this.state.isToggleOn });
    console.log("clicked");
  };

  render() {
    return (
      <div>
        <h1>{this.state.isToggleOn ? "Hello!" : "Goodbye!"}</h1>
        <button onClick={this.handleClick}>Click to Toggle Message</button>
      </div>
    );
  }
}
