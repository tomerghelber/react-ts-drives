import React, { Component } from "react";
import Home from "./Home";
import NotFound from "./NotFound";
import Menu from "./Menu";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./style.css";

export default class App extends Component<{}, { name: string }> {
  public constructor(props: {}) {
    super(props);
  }

  public render() {
    return (
      <Router>
        <div>
          <Menu />
        </div>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route component={NotFound} />
        </Switch>
      </Router>
    );
  }
}
