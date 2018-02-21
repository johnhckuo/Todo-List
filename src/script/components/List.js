import React, { Component } from "react";
import ReactDOM from "react-dom";
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

  render() {
    return (
        <div>
          <ul>
            {
              this.state.lists.map(
                function(todo){
                  console.log(todo)
                  return <li key={todo.id} data-id = {todo.id}>{todo.title}</li>
                }.bind(this)
              )
            }
          </ul>
        </div>
    );
  }
}
export default List;
