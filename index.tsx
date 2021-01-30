import React, { Component } from "react";
import { render } from "react-dom";
import Hello from "./Hello";
import "./style.css";

interface AppProps {}
interface AppState {
  name: string;
}

import { Cards } from "react-responsive-cards";

const details = [
  {
    title: "The Card Title",
    description: "This is a short description",
    image: "https://<image_here>.jpg",
    renderFooter: <div>{"Custom JSX"}</div>,
    handleOnClick: () => alert("Custom Event")
  }
];

class App extends Component<AppProps, AppState> {
  constructor(props) {
    super(props);
    this.state = {
      name: "React"
    };
  }

  render() {
    return (
      <div>
        <Hello name={this.state.name} />
        <p>Start editing to see some magic happen :)</p>
        <Cards details={details} />
      </div>
    );
  }
}

render(<App />, document.getElementById("root"));
