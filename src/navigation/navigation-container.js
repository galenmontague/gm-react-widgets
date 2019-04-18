import React, { Component } from "react";
import { NavLink } from "react-router-dom";

export default class NavigationContainer extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="nav-wrapper">
        <div className="nav-group">
          <div>
            <NavLink exact to="/" activeClassName="nav-link-active">
              Home
            </NavLink>
          </div>
        </div>

        <div className="nav-group">
          <div>
            <NavLink exact to="/Counter" activeClassName="nav-link-active">
              Counter
            </NavLink>
          </div>

          <div>
            <NavLink exact to="/HookCounter" activeClassName="nav-link-active">
              Counter with Hooks
            </NavLink>
          </div>
        </div>

        <div className="nav-group">
          <div>
            <NavLink exact to="/Toggle" activeClassName="nav-link-active">
              Toggle
            </NavLink>
          </div>

          <div>
            <NavLink exact to="/HookToggle" activeClassName="nav-link-active">
              Toggle with Hooks
            </NavLink>
          </div>
        </div>

        <div className="nav-group">
          <div>
            <NavLink exact to="/FontSizer" activeClassName="nav-link-active">
              Font Sizer
            </NavLink>
          </div>

          <div>
            <NavLink
              exact
              to="/HookFontSizer"
              activeClassName="nav-link-active"
            >
              Font Sizer with Hooks
            </NavLink>
          </div>
        </div>

        <div className="nav-group">
          <div>
            <NavLink exact to="/Align" activeClassName="nav-link-active">
              Align
            </NavLink>
          </div>

          <div>
            <NavLink exact to="/HookAlign" activeClassName="nav-link-active">
              Align with Hooks
            </NavLink>
          </div>
        </div>

        <div className="nav-group">
          <div>
            <NavLink exact to="/ShowHide" activeClassName="nav-link-active">
              Show & Hide
            </NavLink>
          </div>

          <div>
            <NavLink exact to="/HookShowHide" activeClassName="nav-link-active">
              Show & Hide with Hooks
            </NavLink>
          </div>
        </div>

        <div className="nav-group">
          <div>
            <NavLink exact to="/Clock" activeClassName="nav-link-active">
              Clock
            </NavLink>
          </div>

          <div>
            <NavLink exact to="/HookClock" activeClassName="nav-link-active">
              Clock with Hooks
            </NavLink>
          </div>
        </div>

        <div className="nav-group">
          <div>
            <NavLink exact to="/ChangeColor" activeClassName="nav-link-active">
              Change Color
            </NavLink>
          </div>

          <div>
            <NavLink
              exact
              to="/HookChangeColor"
              activeClassName="nav-link-active"
            >
              Change Color with Hooks
            </NavLink>
          </div>
        </div>
      </div>
    );
  }
}
