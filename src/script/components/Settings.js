import React, { Component } from "react";
import ReactDOM from "react-dom";
import * as TodoActions from "../actions/TodoActions";
import { Button } from 'reactstrap';

class Settings extends Component {

  constructor() {
    super();
    this.state = {
      showComplete: true,
      showIncomplete: true
    };
  }

  showComplete(event){
    this.setState({
      showComplete : !this.state.showComplete
    }, ()=>{
      TodoActions.updateTodoSettings(this.state.showComplete, this.state.showIncomplete);
    });

  }

  showIncomplete(event){
    this.setState({
      showIncomplete : !this.state.showIncomplete
    }, ()=>{
      TodoActions.updateTodoSettings(this.state.showComplete, this.state.showIncomplete);
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
            |
          Show Incomplete<input
            name="showIncomplete"
            type="checkbox"
            checked={this.state.showIncomplete}
            onChange={this.showIncomplete.bind(this)} />
            
        </div>
    );
  }
}
export default Settings;
