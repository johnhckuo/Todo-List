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

    //this.stats.lists = this.props.listValue;
    // this.stats.checked = this.props.checked;
  }

  componentDidMount() {
    const { lists } = this.props;
    this.setState({ lists });
    console.log(lists)
  }

  editList(editText){
    console.log(this.stats.lists);
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
        <List />
      </div>
    );
  }
}
export default Container;
