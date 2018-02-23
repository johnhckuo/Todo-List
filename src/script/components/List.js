import React, { Component } from "react";
import ReactDOM from "react-dom";
import TodoStore from "../stores/TodoStore";
import * as TodoActions from "../actions/TodoActions";
import '../lib/fontawesome-all';
import SweetAlert from 'sweetalert-react';
import "../../../node_modules/sweetalert/dist/sweetalert.css";

class List extends Component {

  constructor() {
    super();
    this.state = {
      lists:TodoStore.getTodos(),
      currentTitle: "",
      currentId: "",
      editing: -1,
      finishEditing: false
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
      editing: -1,
      finishEditing: true
    });
  }

  render() {
    return (
        <div className="list_container">
          <ul>
            {
              this.state.lists.map(
                function(todo){
                  var complete;
                  if (todo.complete){
                    complete = <i className="fa fa-check" />;
                  }else{
                    complete = <i className="fa fa-times" />;
                  }

                  if (todo.id == this.state.editing){
                    return (
                      <li key = {todo.id} >
                        {complete}<input value = {todo.title} onChange = {this.editHandler.bind(this) }/>
                        <button onClick = {this.endEditing.bind(this)} >
                          OK
                        </button>
                      </li>);
                  }else{
                    return (
                      <li key = {todo.id} data-id = {todo.id} onClick = {this.startEditing.bind(this)}>
                        {complete}
                        {todo.title}
                        Date: {todo.id}
                        <SweetAlert
                        show={this.state.editing && this.state.finishEditing}
                        title="Confirmed?"
                        text= {todo.title}
                        onConfirm={() => this.setState({ finishEditing: false })}
                      />
                      </li>);
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
