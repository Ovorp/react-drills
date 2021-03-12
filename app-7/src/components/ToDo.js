import React, { Component } from 'react';
import NewTask from './NewTask';
import List from './List';

export default class ToDo extends Component {
  constructor(props) {
    super(props);

    this.state = {
      toDoList: ['go to work', 'go to bed'],
    };
  }

  handleUpdateToDoList = (item) => {
    this.setState({
      toDoList: [...this.state.toDoList, item],
    });
  };

  render() {
    console.log(this.state);
    return (
      <div>
        <h1>App 7 to do list</h1>
        <NewTask updateList={this.handleUpdateToDoList} />
        <List toDoList={this.state.toDoList} />
      </div>
    );
  }
}
