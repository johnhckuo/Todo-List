import React, { Component } from "react";
import ReactDOM from "react-dom";

class Input extends Component {

  constructor() {
    super();
  }

  handleChange(event){
    const content = event.target.value;
    console.log(content)
    this.props.editList(content);
  }

  render() {
    return (
        <div>
          <input onChange={this.handleChange.bind(this)} />
        </div>
    );
  }
}
export default Input;
