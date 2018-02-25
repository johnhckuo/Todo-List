import React, { Component } from "react";
import ReactDOM from "react-dom";
import * as TodoActions from "../actions/TodoActions";
import { Button } from 'reactstrap';

class Settings extends Component {

  constructor() {
    super();
    this.state = {
      showComplete: false
    };
  }

  showComplete(event){
    this.setState({
      showComplete : !this.state.showComplete
    }, ()=>{
      if (this.state.showComplete){
        TodoActions.updateTodoSettings("COMPLETE");
      }else{
        TodoActions.updateTodoSettings("INCOMPLETE");
      }
    });

  }

  render() {
    return (
        <div className = "settings_field" >
          Show Complete<input
            name="showComplete"
            type="checkbox"
            checked={this.state.showComplete}
            onChange={this.showComplete.bind(this)} />
        </div>
    );
  }
}
export default Settings;
