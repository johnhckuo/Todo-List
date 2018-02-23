import React, { Component } from "react";
import ReactDOM from "react-dom";
import * as TodoActions from "../actions/TodoActions";
import { Button } from 'reactstrap';

class Input extends Component {

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
    TodoActions.createTodo(this.state.newTitle);
  }

  render() {
    return (
        <div className="input_field">
          <Button color="danger" onClick = {this.createTodo.bind(this)} >Create!</Button>
          <input onChange={this.handleChange.bind(this)} />
        </div>
    );
  }
}
export default Input;
