import React, { Component } from "react";
import ReactDOM from "react-dom";
import Content from "../components/content/main";
import Input from "../components/input/main";
import Header from "../components/header/main";

class Todo extends Component {
  constructor() {
    super();
    this.state = {todos:[]};
    this.key = 0;
    this.createTodo = this.createTodo.bind(this);
    this.yyyymmdd = this.yyyymmdd.bind(this);
    this.deleteTodo = this.deleteTodo.bind(this);
  }

  createTodo(title){
    var id = this.key++;
    this.setState((prevState)=>{
      var newTodos = Object.assign({}, this.prevState.todos);
      newTodos[id] = {
        id,
  			title,
  			complete:false,
  			date: this.yyyymmdd(),
  			edit:false,
  			visible:this.incomplete_visibility
      };
      return {todos: newTodos};
    })
  }

  deleteTodo(id){
    var keys = Object.keys(this.state.todos);
    if (typeof this.state.todos[id] != "undefined"){
      this.setState((prevState)=>{
        var newTodos = Object.assign({}, prevState.todos);
        delete newTodos[id];
        return {todos: newTodos};
      })
    }
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
        <Header />
        <div className="control_field">
          <Input createTodo={this.createTodo}/>
        </div>
        <Content deleteTodo={this.deleteTodo}/>
      </div>
    );
  }
}
export default Todo;
