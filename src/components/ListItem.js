import React, { Component } from "react";

export class listItem extends Component {
  onKeyUp = (e) => {
    if (e.code === "Enter") {
      this.props.onSubmit(e);
    }
  };

  render() {
    return (
      <div className="todo">
        <div className="left-elements">
          <input
            type="checkbox"
            name="task"
            id={this.props.item.id}
            onChange={() => this.props.onSelectItem(this.props.item.id)}
            checked={this.props.item.checked}
          />
          <input
            id={this.props.item.id}
            className={`task-added ${
              this.props.item.checked === true ? "strike" : ""
            }`}
            type="text"
            disabled={this.props.item.disabled}
            defaultValue={this.props.item.text}
            onKeyUp={this.onKeyUp}
            onChange={this.props.onChangeItem}
            autoFocus={!this.props.item.disabled}
          />
        </div>
        <div className="right-elements">
          <button
            className="editBtn"
            onClick={() => this.props.onEditItem(this.props.item.id)}
          >
            <i className="fas fa-edit"></i>
          </button>
          <button
            className="deleteBtn"
            onClick={() => this.props.onDeleteItem(this.props.item.id)}
          >
            <i className="fas fa-trash"></i>
          </button>
        </div>
      </div>
    );
  }
}

export default listItem;
