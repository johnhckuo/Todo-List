import React, { Component } from "react";
import ReactDOM from "react-dom";
import List from "./List";
import Input from "./Input";


class Container extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: ""
    };

    //this.stats.lists = this.props.listValue;
    // this.stats.checked = this.props.checked;
  }

  render() {
    return (
      <div id="container">
        <List />
      </div>
    );
  }
}
export default Container;
