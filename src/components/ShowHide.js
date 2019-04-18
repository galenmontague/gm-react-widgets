import React, { Component } from "react";

export default class ShowHide extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isToggleOn: true
    };
  }

  handleClick = () => {
    this.setState({ isToggleOn: !this.state.isToggleOn });
  };

  render() {
    return (
      <div>
        <button onClick={this.handleClick}>
          {this.state.isToggleOn ? "SHOW" : "HIDE"}
        </button>
        <h1
          style={{
            display: this.state.isToggleOn ? "block" : "none"
          }}
        >
          Hello!
        </h1>
      </div>
    );
  }
}
