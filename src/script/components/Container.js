import React, { Component } from "react";
import ReactDOM from "react-dom";
import List from "./List";
import Input from "./Input";


class Container extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "",
      lists:[],
      checked:[]
    };

    console.log(this.props);
    this.setState(
      {
        lists: this.props.lists
      }
    );
    //this.stats.lists = this.props.listValue;
    // this.stats.checked = this.props.checked;
  }

  editList(editText){
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
      <div id="container">
        <Input editList = {this.editList.bind(this)}/>
        <List editedList = { this.state.lists} />
      </div>
    );
  }
}
export default Container;
