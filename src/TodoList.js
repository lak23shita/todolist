import React from "react";
import "./TodoList.css";
class TodoList extends React.Component {
  state = {
    todolist: ["apple", "banana", "pineapple"],
    inputValue: ""
  };
  componentDidMount() {
    if (localStorage.todolist) {
      if (JSON.parse(localStorage.todolist) !== [])
        this.setState({
          todolist: JSON.parse(localStorage.todolist)
        });
    } else {
      localStorage.todolist = JSON.stringify(this.state.todolist);
    }
  }

  componentDidUpdate() {
    localStorage.todoList = JSON.stringify(this.state.todolist);
  }

  handleRemoveClick = e => {
    this.splicedList = this.state.todolist;
    this.splicedList.splice(this.state.todolist.indexOf(e.target.innerHTML), 1);
    console.log(this.splicedList);
    this.setState(prevState => {
      return {
        todoList: this.splicedList
      };
    });
  };
  handleAddClick = e => {
    e.preventDefault();

    this.setState(prevState => {
      return {
        todolist: prevState.todolist.concat([this.state.inputValue]),
        inputValue: ""
      };
    });
  };

  onInputChange = e => {
    this.setState({
      inputValue: e.target.value
    });
  };
  render() {
    return (
      <div>
        <form onSubmit={this.handleAddClick}>
          <input
            type="text"
            onChange={this.onInputChange}
            value={this.state.inputValue}
            className="inputBox"
          />
          <input
            type="submit"
            value="add"
            preventDefault
            className="submitButton"
          />
        </form>
        {this.state.todolist.map(todoItem => {
          return (
            <div>
              <button className="todoItem" onClick={this.handleRemoveClick}>
                {todoItem}
              </button>
            </div>
          );
        })}
      </div>
    );
  }
}
export default TodoList;
