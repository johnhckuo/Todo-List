import React, { Component } from "react";
import ReactDOM from "react-dom";
import { Button } from 'reactstrap';
import * as Style from "./style";

export default class Input extends Component {

  constructor() {
    super();
    this.state = {
      newTitle: ""
    };
  }

  handleChange(event){
    const content = event.target.value;

    this.setState({
      newTitle: event.target.value,
    });
  }

  createTodo(){
    this.props.createTodo(this.state.newTitle);
  }

  render() {
    return (
        <div className="input_field">
          New Todo: <input onChange={this.handleChange.bind(this)} />
          <Button color="primary" onClick = {this.createTodo.bind(this)} >Create!</Button>
        </div>
    );
  }
}
