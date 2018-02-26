import React, { Component } from "react";
import ReactDOM from "react-dom";
import List from "../components/List";
import Input from "../components/Input";
import Settings from "../components/Settings";

class Todo extends Component {
  constructor() {
    super();
  }


  render() {
    return (
      <div id="container">
        <h1 className="logo">Todo-List</h1>
        <div className="control_field">
          <Input />
          <Settings />
        </div>
        <List />
      </div>
    );
  }
}
export default Todo;
