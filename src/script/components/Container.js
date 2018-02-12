import React, { Component } from "react";
import ReactDOM from "react-dom";
import List from "./List";

class Container extends Component {
  constructor() {
    super();
    this.state = {
      title: "",
    };
  }

  render() {
    return (
      <div id="container">
        <List/>
      </div>
    );
  }
}
export default Container;