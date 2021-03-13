import React, { Component } from 'react';

export default class ToDo extends Component {
  constructor(props) {
    super(props);

    this.state = {
      userInput: '',
      toDoListArr: ['wash clothes', 'make bed', 'buy food'],
    };
  }

  handleUpdateUserInput = (e) => {
    this.setState({
      userInput: e.target.value,
    });
  };

  handleupdateToDoListArr = () => {
    this.setState({
      toDoListArr: [...this.state.toDoListArr, this.state.userInput],
      userInput: '',
    });
  };

  handleRemoveFromList = (index) => {
    let oldList = [...this.state.toDoListArr];
    oldList.splice(index, 1);
    this.setState({
      toDoListArr: oldList,
    });
  };

  render() {
    console.log(this.state);
    return (
      <div>
        <h1>To Do List</h1>
        <input
          onChange={this.handleUpdateUserInput}
          value={this.state.userInput}
        />
        <button onClick={this.handleupdateToDoListArr}>Add to List </button>
        <ul>
          {this.state.toDoListArr.map((val, i) => {
            return (
              <li key={(val, i)}>
                <span onClick={() => this.handleRemoveFromList(i)}>X</span>
                {val}
              </li>
            );
          })}
        </ul>
      </div>
    );
  }
}
