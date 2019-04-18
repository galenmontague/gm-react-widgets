import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import NavigationContainer from "./navigation/navigation-container";
import Home from "./components/Home";
import Counter from "./components/Counter";
import HookCounter from "./components/HookCounter";
import Toggle from "./components/Toggle";
import HookToggle from "./components/HookToggle";
import FontSizer from "./components/FontSizer";
import HookFontSizer from "./components/HookFontSizer";
import Align from "./components/Align";
import HookAlign from "./components/HookAlign";
import ShowHide from "./components/ShowHide";
import HookShowHide from "./components/HookShowHide";
import Clock from "./components/Clock";
import HookClock from "./components/HookClock";
import ChangeColor from "./components/ChangeColor";
import HookChangeColor from "./components/HookChangeColor";

export default class App extends Component {
  render() {
    return (
      <div className="container">
        <Router>
          <div>
            <NavigationContainer />

            <Switch>
              <Route exact path="/" component={Home} />
              <Route path="/Counter" component={Counter} />
              <Route path="/HookCounter" component={HookCounter} />
              <Route path="/Toggle" component={Toggle} />
              <Route path="/HookToggle" component={HookToggle} />
              <Route path="/FontSizer" component={FontSizer} />
              <Route path="/HookFontSizer" component={HookFontSizer} />
              <Route path="/Align" component={Align} />
              <Route path="/HookAlign" component={HookAlign} />
              <Route path="/ShowHide" component={ShowHide} />
              <Route path="/HookShowHide" component={HookShowHide} />
              <Route path="/Clock" component={Clock} />
              <Route path="/HookClock" component={HookClock} />
              <Route path="/ChangeColor" component={ChangeColor} />
              <Route path="/HookChangeColor" component={HookChangeColor} />
            </Switch>
          </div>
        </Router>
        <div className="Body">
          <h2>Navigate to see my React widget examples</h2>
        </div>
      </div>
    );
  }
}
