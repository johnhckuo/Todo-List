import React, { Component } from "react";
import ReactDOM from "react-dom";
import Input from "./Input";
import TodoStore from "../stores/TodoStore";
import * as TodoActions from "../actions/TodoActions";

class List extends Component {

  constructor() {
    super();
    this.state = {
      lists:TodoStore.getTodos(),
      checked:[]
    };
  }

  componentWillMount(){
    TodoStore.on("create", ()=> {
      this.setState({
        lists: TodoStore.getTodos()
      });
    });
  }

  editList(editText){
    console.log(this.state.lists);
    var tempArr = this.state.lists.slice();
    tempArr.push(editText);
    this.setState(
      {
        lists: tempArr
      }
    );
  }

  createTodo(){
    TodoActions.createTodo(Date.now());
  }

  render() {
    return (
        <div>
          <button onClick = {this.createTodo.bind(this)} >Create!</button>
          <Input editList = {this.editList.bind(this)}/>
          <ul lists={this.state.lists}>
            {
              this.state.lists.map(
                function(todo){
                  return <li key={todo.id}>{todo.title}</li>
                }.bind(this)
              )
            }
          </ul>
        </div>
    );
  }
}
export default List;
