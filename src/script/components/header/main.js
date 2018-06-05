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
    this.toggleIncomplete = this.toggleIncomplete.bind(this);
    this.toggleComplete = this.toggleComplete.bind(this);
  }

  toggleComplete(){
    this.props.toggleComplete();
  }

  toggleIncomplete(){
    this.props.toggleIncomplete();
  }

  render() {
    const {complete_visibility, incomplete_visibility} = this.props;
    return (
        <Style.Container>
          <Style.Button active={complete_visibility} onClick={this.toggleComplete} >show complete</Style.Button>
          <Style.Button active={incomplete_visibility} onClick={this.toggleIncomplete} >show Incomplete</Style.Button>
        </Style.Container>
    );
  }
}
