import React, { Component } from "react";
import ReactDOM from "react-dom";
import List from "../components/List";
import Input from "../components/Input";

class Todo extends Component {
  constructor() {
    super();
  }


  render() {
    return (
      <div id="container">
        <Input />
        <List />
      </div>
    );
  }
}
export default Todo;
