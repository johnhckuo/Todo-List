import React, { Component } from "react";
import ReactDOM from "react-dom";
import * as TodoActions from "../actions/TodoActions";

class Input extends Component {

  constructor() {
    super();
    this.state = {
      currentTitle: "",
      currentId: ""
    };
  }

  handleChange(event){
    const content = event.target.value;

    this.setState({
      currentTitle: event.target.value,
      currentId: event.target.dataset.id
    });
    console.log(this.state.currentId)
    //this.props.editList(content);
  }

  createTodo(){
    TodoActions.createTodo(this.state.currentTitle);
  }

  render() {
    return (
        <div>
          <button onClick = {this.createTodo.bind(this)} >Create!</button>
          <input onChange={this.handleChange.bind(this)} />
        </div>
    );
  }
}
export default Input;
