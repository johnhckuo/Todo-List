import React, { Component } from "react";
import ReactDOM from "react-dom";
import { Button } from 'reactstrap';
import * as Style from "./style"

export default class Header extends Component {

  constructor() {
    super();
    this.state = {
      showComplete: true,
      showIncomplete: true
    };
    this.showIncomplete = this.showIncomplete.bind(this);
    this.showComplete = this.showComplete.bind(this);
  }

  showComplete(){
    this.setState((prevState)=>{
      return {showComplete: !prevState.showComplete};
    })
  }

  showIncomplete(){
    this.setState((prevState)=>{
      return {showIncomplete: !prevState.showIncomplete};
    })
  }

  render() {
    return (
        <Style.Container>
          <Style.Button active={this.state.showComplete} onClick={this.showComplete} >show complete</Style.Button>
          <Style.Button active={this.state.showIncomplete} onClick={this.showIncomplete} >show complete</Style.Button>
        </Style.Container>
    );
  }
}
