import React, { Component } from "react";
import ListItem from "./ListItem";

export class AllTask extends Component {
  render() {
    return (
      <div className="all-task">
        {this.props.todos.map((todo) => {
          return (
            <ListItem
              key={todo.id}
              item={todo}
              onDeleteItem={this.props.onDeleteItem}
              onSelectItem={this.props.onSelectItem}
              onEditItem={this.props.onEditItem}
              onSubmit={this.props.onSubmit}
              onChangeItem={this.props.onChangeItem}
              curBtn={this.props.curBtn}
              // subTodos={this.props.subTodos}
            />
          );
        })}
      </div>
    );
  }
}

export default AllTask;
