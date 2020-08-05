import React from "react";
import ReactDOM from "react-dom";

require("./styles.css");

class App extends React.Component {
  render() {
    return <div>Hello {this.props.name}</div>;
  }
}

var mountNode = document.getElementById("app");
ReactDOM.render(<App name="world" />, mountNode);
