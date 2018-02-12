import React, { Component } from "react";
import ReactDOM from "react-dom";
class List extends Component {

  constructor() {
    super();
    this.state = {
      lists:[],
      checked:[]
    };
    var numrows = 10;
    for (var i = 0; i < numrows; i++) {
        this.state.lists.push("yo");
        this.state.checked.push(false);
    }
  }

  render() {
    return (
        <ul>
          this.state.lists.map(function(value, i){
            return <li key={i}>this.state.lists[i]</li>
          })
        </ul>
    );
  }
}
export default List;