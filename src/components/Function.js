import React, { Component } from "react";

export class Function extends Component {
  render() {
    return (
      <div className="function">
        <div className="btn-left">
          <button
            className={`btnAdd ${this.props.curBtn === "Add" ? "focus" : ""}`}
            onClick={this.props.onAddItem}
          >
            <i className="fa-solid fa-plus"></i>
          </button>
          <button
            className={`btnAdd ${
              this.props.curBtn === "Search" ? "focus" : ""
            }`}
            onClick={this.props.onSearchItem}
          >
            <i className="fas fa-search"></i>
          </button>
          
        </div>
        <div className="choices">
          <select name="Action" id="action" onClick={this.props.actionBtnClick}>
            <option value="action">Action</option>
            <option value="selectAll">Select All</option>
            <option value="unselectAll">Unselect All</option>
            <option value="deleteAllSelected">Delete All Selected</option>
          </select>
          <select name="" id="sort" onClick={this.props.sortBtnClick}>
            <option value="sort">Sort</option>
            <option value="A-Z">A-Z</option>
            <option value="Z-A">Z-A</option>
            <option value="newest">Newest</option>
            <option value="oldest">Oldest</option>
          </select>
        </div>

        <div className="btnGroup">
          <button
            className={`"btnAll ${this.props.flag === "all" ? "active" : ""} `}
            onClick={this.props.allBtnClick}
          >
            All
          </button>
          <button
            className={`"btnAll ${
              this.props.flag === "active" ? "active" : ""
            } `}
            onClick={this.props.activeBtnClick}
          >
            Active
          </button>
          <button
            className={`"btnAll ${
              this.props.flag === "completed" ? "active" : ""
            } `}
            onClick={this.props.completedBtnClick}
          >
            Completed
          </button>
        </div>
       
      </div>
    );
  }
}

export default Function;
