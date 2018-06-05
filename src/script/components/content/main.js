import React, { Component } from "react";
import ReactDOM from "react-dom";
import { Button } from 'reactstrap';

export default class Content extends Component {

  constructor() {
    super();
    this.state = {
      currentTitle: "",
      currentId: "",
      editing: -1,
      finishEditing: false
    };
  }

  editHandler(event){
    this.setState({
      currentTitle: event.target.value
    }, () => {
      this.props.editTodo(this.state.currentId, this.state.currentTitle);
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

  editTodoStatus(event){
    const id = event.target.parentNode.dataset.id;
    this.props.editTodoStatus(id);
  }

  deleteTodo(event){
    const id = event.target.parentNode.dataset.id;
    this.props.deleteTodo(id);
  }

  renderList(){
    const {todos} = this.props;
    var ids = Object.keys(todos);
    return ids.map(
      (id) => {

        if (todos[id].visible == false){
          return;
        }

        var complete;
        if (todos[id].complete){
          complete = <Button color="info">✓</Button>;
        }else{
          complete = <Button color="danger" onClick = {this.editTodoStatus.bind(this)} >✗</Button>;
        }

        if (id == this.state.editing){
          return (
            <li className = "editing" key = {id} data-id = {todos[id].id}>
              {complete}
              <input value = {todos[id].title} onChange = {this.editHandler.bind(this) }/>
              <button onClick = {this.deleteTodo.bind(this)} >
                DELETE
              </button>
              <button onClick = {this.endEditing.bind(this)} >
                OK
              </button>
            </li>
            );
        }else{
          return (
            <li className = "edited" key = {id} data-id = {todos[id].id} onClick = {this.startEditing.bind(this)}>
              {complete}
              <br />
              <h3>{todos[id].title}</h3>
              <br />
              Date: {todos[id].date}
            </li>);
        }
      }
    )
  }

  render() {
    return (
        <div className="list_container">
          <ul>
            { this.renderList()}
          </ul>
        </div>
    );
  }
}
