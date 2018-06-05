import React, { Component } from "react";
import ReactDOM from "react-dom";
import Content from "../components/content/main";
import Input from "../components/input/main";
import Header from "../components/header/main";

class Todo extends Component {
  constructor() {
    super();
    this.state = {
      todos:[],
      incomplete_visibility: true,
      complete_visibility: true
    };
    this.key = 0;
    this.createTodo = this.createTodo.bind(this);
    this.yyyymmdd = this.yyyymmdd.bind(this);
    this.deleteTodo = this.deleteTodo.bind(this);
    this.editTodoStatus = this.editTodoStatus.bind(this);
    this.editTodo = this.editTodo.bind(this);
    this.toggleComplete = this.toggleComplete.bind(this);
    this.toggleIncomplete = this.toggleIncomplete.bind(this);
  }

  createTodo(title){
    var id = this.key++;
    this.setState((prevState)=>{
      var newTodos = Object.assign({}, prevState.todos);
      newTodos[id] = {
        id,
  			title,
  			complete:false,
  			date: this.yyyymmdd(),
  			edit:false,
  			visible:this.state.incomplete_visibility
      };
      return {todos: newTodos};
    })
  }

  deleteTodo(id){
    if (typeof this.state.todos[id] != "undefined"){
      this.setState((prevState)=>{
        var newTodos = Object.assign({}, prevState.todos);
        delete newTodos[id];
        return {todos: newTodos};
      })
    }
  }

  editTodo(id, title){
    if (typeof this.state.todos[id] != "undefined"){
      this.setState((prevState)=>{
        var newTodos = Object.assign({}, prevState.todos);
        newTodos[id].title = title;
        newTodos[id].edit = true;
        return {todos: newTodos};
      })
    }
  }

  editTodoStatus(id){
    if (typeof this.state.todos[id] != "undefined"){
      this.setState((prevState)=>{
        var newTodos = Object.assign({}, prevState.todos);
        newTodos[id].complete = true;
        return {todos: newTodos};
      })
    }
  }

  toggleComplete(){
    this.setState((prevState)=>{
      return {complete_visibility: !prevState.complete_visibility};
    })
  }

  toggleIncomplete(){
    this.setState((prevState)=>{
      return {incomplete_visibility: !prevState.incomplete_visibility};
    })
  }

  yyyymmdd() {
    var date = new Date();

    var mm = date.getMonth() + 1; // getMonth() is zero-based
    var dd = date.getDate();

    return [date.getFullYear(),
            (mm>9 ? '' : '0') + mm,
            (dd>9 ? '' : '0') + dd
           ].join('.');
  }


  render() {
    return (
      <div id="container">
        <Header toggleComplete={this.toggleComplete} toggleIncomplete={this.toggleIncomplete} complete_visibility={this.state.complete_visibility} incomplete_visibility={this.state.incomplete_visibility}/>
        <Input createTodo={this.createTodo}/>
        <Content deleteTodo={this.deleteTodo} editTodoStatus={this.editTodoStatus} editTodo={this.editTodo} todos={this.state.todos}/>
      </div>
    );
  }
}
export default Todo;
