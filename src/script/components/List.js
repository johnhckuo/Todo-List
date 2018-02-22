import React, { Component } from "react";
import ReactDOM from "react-dom";
import TodoStore from "../stores/TodoStore";
import * as TodoActions from "../actions/TodoActions";

class List extends Component {

  constructor() {
    super();
    this.state = {
      lists:TodoStore.getTodos(),
      currentTitle: "",
      currentId: "",
      editing: -1
    };
  }

  componentWillMount(){
    TodoStore.on("create", this.getStoreData.bind(this));
    TodoStore.on("edit", this.getStoreData.bind(this));
  }

  //prevent memory leak results from event binding
  componentWillUnmount(){
    TodoStore.removeListener("create", this.getStoreData.bind(this));
    TodoStore.removeListener("edit", this.getStoreData.bind(this));
  }

  getStoreData(){
    this.setState({
      lists: TodoStore.getTodos()
    });
  }

  editHandler(event){
    this.setState({
      currentTitle: event.target.value
    }, () => {
      TodoActions.editTodo(this.state.currentId, this.state.currentTitle);
    });
  }

  startEditing(event){
    this.setState({
      editing: event.target.dataset.id,
      currentId: event.target.dataset.id
    });
  }

  endEditing(event){
    this.setState({
      editing: -1
    });
  }

  render() {
    return (
        <div class="list_container">
          <ul>
            {
              this.state.lists.map(
                function(todo){
                  if (todo.id == this.state.editing){
                    return <li key = {todo.id} ><input value = {todo.title} onChange = {this.editHandler.bind(this) }/><button onClick = {this.endEditing.bind(this)} >OK</button></li>
                  }else{
                    return <li key = {todo.id} data-id = {todo.id} onClick = {this.startEditing.bind(this)}>{todo.title}</li>
                  }
                }.bind(this)
              )
            }
          </ul>
        </div>
    );
  }
}
export default List;
