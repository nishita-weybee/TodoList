import React, { Component } from "react";

export class Heading extends Component {
  componentDidUpdate(prevProps) {
    if (this.props.curBtn === "Add") {
      if (this.props.todos.length !== prevProps.todos.length) {
        document.getElementById(
          "noData"
        ).innerHTML = `${this.props.todos.length} items left `;
      }
    }
    else if (this.props.curBtn === "Search") {
      if (this.props.subTodos.length !== prevProps.subTodos.length) {
        document.getElementById(
          "noData"
        ).innerHTML = `${this.props.subTodos.length} items left`;
      }
    }
  }

  render() {
    return (
      <div className="heading">
        <h1>THINGS TO DO</h1>
        <input
          type="text"
          className="input-task"
          id="values"
          value={this.props.listItem}
          onKeyUp={this.props.onKeyUp}
          onChange={this.props.onChangeItem}
          autoFocus
        />
        <div id="noData" className="noData"></div>
      </div>
    );
  }
}

export default Heading;
