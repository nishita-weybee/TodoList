import React, { Component } from "react";
import "./App.css";
import Heading from "./components/Heading";
import AllTask from "./components/AllTask";
import Function from "./components/Function";

export class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      listItem: "",
      flag: "all",
      curBtn: "Add",
      todos: [],
    };
  }

  componentDidMount() {
    let state = this.state;
    state.subTodos = [];
  }

  componentWillUnmount() {
    alert("message");
  }
  add = () => {
    if (this.state.listItem !== "") {
      const todo = {
        text: this.state.listItem,
        checked: false,
        id: Date.now(),
        disabled: true,
      };

      this.setState({
        todos: [...this.state.todos, todo],
        subTodos: [...this.state.todos, todo],
      });
    }
  };

  onChangeItem = (e) => {
    this.setState({ listItem: e.target.value });
  };

  onSubmit = (e) => {
    const newTodo = this.state.todos.map((todo) => {
      if (todo.id === +e.target.id) {
        todo.text = this.state.listItem;
        todo.disabled = true;
      }
      return todo;
    });

    this.setState({
      todos: newTodo,
      listItem: "",
    });
  };

  onKeyUp = (e) => {
    if (e.code === "Enter" && this.state.curBtn === "Add") {
      this.add();
      this.setState({
        listItem: "",
      });
    } else if (this.state.curBtn === "Search") {
      this.onSearchItem();
    }
  };

  onAddItem = () => {
    this.add();
    this.setState({
      listItem: "",
      curBtn: "Add",
      flag: "all",
    });
  };

  onEditItem = (id) => {
    const newTodo = this.state.todos.map((todo) => {
      if (todo.id === +id) {
        todo.disabled = false;
      }
      return todo;
    });

    this.setState({
      todos: newTodo,
    });
  };

  onSearchItem = () => {
    const searchTodo = this.state.todos.filter((todo) =>
      todo.text.toLowerCase().includes(this.state.listItem.toLowerCase())
    );

    this.setState({
      subTodos: searchTodo,
      flag: "search",
      curBtn: "Search",
    });
  };

  onDeleteItem = (id) => {
    this.componentWillUnmount();

    if (this.state.curBtn === "Search") {
      const updatedTodo = this.state.subTodos.filter((todo) => {
        return todo.id !== id;
      });

      const newTodos = this.state.todos.filter((todo) => {
        return todo.id !== id;
      });

      this.setState({
        todos: newTodos,
        subTodos: updatedTodo,
      });
    } else if (this.state.curBtn === "Add") {
      const updatedTodo = this.state.todos.filter((todo) => {
        return todo.id !== id;
      });

      this.setState({
        todos: updatedTodo,
      });
    }
  };

  onSelectItem = (id) => {
    const newTodo = this.state.todos.map((todo) => {
      if (todo.id === id && todo.checked === false) {
        todo.checked = true;
      } else if (todo.id === id && todo.checked === true) {
        todo.checked = false;
      }
      return todo;
    });

    this.setState({
      todos: newTodo,
    });
  };

  actionBtnClick = (e) => {
    let inputArr;
    if (this.state.curBtn === "Add") {
      inputArr = this.state.todos;
    } else if (this.state.curBtn === "Search") {
      inputArr = this.state.subTodos;
    }

    switch (e.target.value) {
      case "selectAll":
        const selectAll = inputArr.map((todo) => {
          todo.checked = true;
          return todo;
        });

        e.target.value = "action";
        this.setState({
          inputArr: selectAll,
        });
        break;
      case "unselectAll":
        const unselectAll = inputArr.map((todo) => {
          todo.checked = false;
          return todo;
        });

        e.target.value = "action";
        this.setState({
          inputArr: unselectAll,
        });

        break;
      case "deleteAllSelected":
        const deleteAllSelected = inputArr.filter((todo) => {
          return todo.checked === false;
        });

        const newTodo = this.state.todos.filter((todo) => {
          return todo.checked === false;
        });

        e.target.value = "action";
        this.setState({
          subTodos: deleteAllSelected,
          todos: newTodo,
        });
        break;

      default:
        break;
    }
  };

  sortBtnClick = (e) => {
    let inputArr;
    if (this.state.curBtn === "Add") {
      inputArr = this.state.todos;
    } else if (this.state.curBtn === "Search") {
      inputArr = this.state.subTodos;
    }

    switch (e.target.value) {
      case "A-Z":
        const azSort = inputArr.sort((a, b) =>
          a.text
            .toLowerCase()
            .localeCompare(b.text.toLowerCase(), "en", { numeric: true })
        );

        this.setState({
          inputArr: azSort,
        });
        break;
      case "Z-A":
        const zaSort = inputArr.sort((b, a) =>
          a.text
            .toLowerCase()
            .localeCompare(b.text.toLowerCase(), "en", { numeric: true })
        );

        this.setState({
          inputArr: zaSort,
        });
        break;
      case "oldest":
        const oldest = inputArr.sort((a, b) => {
          if (a.id < b.id) {
            return -1;
          }
          if (a.id > b.id) {
            return 1;
          }
          return 0;
        });

        this.setState({
          inputArr: oldest,
        });

        break;
      case "newest":
        const newest = inputArr.sort((b, a) => {
          if (a.id < b.id) {
            return -1;
          }
          if (a.id > b.id) {
            return 1;
          }
          return 0;
        });

        this.setState({
          inputArr: newest,
        });
        break;

      default:
        break;
    }
  };

  allBtnClick = () => {
    let inputArr;
    console.log(this.state.todos);
    if (this.state.curBtn === "Add") {
      inputArr = this.state.todos;
    } else if (this.state.curBtn === "Search") {
      const searchTodo = this.state.todos.filter((todo) =>
        todo.text.toLowerCase().includes(this.state.listItem.toLowerCase())
      );

      this.setState({
        subTodos: searchTodo,
      });

      inputArr = searchTodo;
    }

    this.setState({
      subTodos: inputArr,
      flag: "allItems",
    });
  };

  activeBtnClick = () => {
    let inputArr;
    if (this.state.curBtn === "Search") {
      const searchTodo = this.state.todos.filter((todo) =>
        todo.text.toLowerCase().includes(this.state.listItem.toLowerCase())
      );

      this.setState({
        subTodos: searchTodo,
      });

      inputArr = searchTodo;
    } else if (this.state.curBtn === "Add") {
      inputArr = this.state.todos;
    }

    const active = inputArr.filter((todo) => {
      return todo.checked === false;
    });

    this.setState({
      subTodos: active,
      flag: "active",
    });
  };

  completedBtnClick = () => {
    let inputArr;
    if (this.state.curBtn === "Search") {
      const searchTodo = this.state.todos.filter((todo) =>
        todo.text.toLowerCase().includes(this.state.listItem.toLowerCase())
      );

      this.setState({
        subTodos: searchTodo,
      });

      inputArr = searchTodo;
    } else if (this.state.curBtn === "Add") {
      inputArr = this.state.todos;
    }

    const completed = inputArr.filter((todo) => {
      return todo.checked === true;
    });

    this.setState({
      subTodos: completed,
      flag: "completed",
    });
  };

  render() {
    return (
      <div className="container">
        <Heading
          listItem={this.state.listItem}
          onChangeItem={this.onChangeItem}
          onKeyUp={this.onKeyUp}
          todos={this.state.todos}
          subTodos={this.state.subTodos}
          curBtn={this.state.curBtn}
        />
        <AllTask
          todos={
            this.state.flag === "all" ? this.state.todos : this.state.subTodos
          }
          onDeleteItem={this.onDeleteItem}
          onSelectItem={this.onSelectItem}
          onEditItem={this.onEditItem}
          onSubmit={this.onSubmit}
          onChangeItem={this.onChangeItem}
          curBtn={this.state.curBtn}
        />

        <Function
          onAddItem={this.onAddItem}
          onSearchItem={this.onSearchItem}
          actionBtnClick={this.actionBtnClick}
          sortBtnClick={this.sortBtnClick}
          allBtnClick={this.allBtnClick}
          activeBtnClick={this.activeBtnClick}
          completedBtnClick={this.completedBtnClick}
          curBtn={this.state.curBtn}
          flag={this.state.flag}
          // subTodos={this.state.subTodos}
        />
      </div>
    );
  }
}

export default App;
