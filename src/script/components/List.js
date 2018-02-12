import React, { Component } from "react";
import ReactDOM from "react-dom";
class List extends Component {

  constructor() {
    super();
    this.state = {
      lists:[],
      checked:[]
    };
    this.readList();
  }

  readList() {
    var numrows = 10;
    for (var i = 0; i < numrows; i++) {
        this.state.lists.push("yo");
        this.state.checked.push(false);
    }
  }

  render() {
    return (
        <ul lists={this.state.lists}>
          {
            this.state.lists.map(
              function(value, i){
                return <li key={i}>{this.state.lists[i]}</li>
              }.bind(this)
            )
          }
        </ul>
    );
  }
}
export default List;
