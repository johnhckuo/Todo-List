import React, { Component } from "react";
import ReactDOM from "react-dom";
import Input from "./Input";

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

  editList(editText){
    console.log(this.state.lists);
    var tempArr = this.state.lists.slice();
    tempArr.push(editText);
    this.setState(
      {
        lists: tempArr
      }
    );
  }

  render() {
    return (
        <div>
          <Input editList = {this.editList.bind(this)}/>
          <ul lists={this.state.lists}>
            {
              this.state.lists.map(
                function(value, i){
                  return <li key={i}>{this.state.lists[i]}</li>
                }.bind(this)
              )
            }
          </ul>
        </div>
    );
  }
}
export default List;
