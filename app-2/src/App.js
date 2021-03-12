import React, { Component } from 'react';
import List from './components/List';
import AddTo from './components/AddTo';

import './css/App.css';

export default class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      userInput: '',
      userArr: ['Monday', 'Sharks', 'Candy', 'Shoes', 1],
    };
  }

  handleUpdateUserInput = (e) => {
    this.setState({
      userInput: e.target.value,
    });
  };

  handleUpdateUserArr = () => {
    let oldArr = [...this.state.userArr, this.state.userInput];
    this.setState({
      userArr: oldArr,
      userInput: '',
    });
  };

  render() {
    return (
      <div className="App">
        <h1>Here is a list you can add to.</h1>
        <AddTo
          updateInput={this.handleUpdateUserInput}
          updateArr={this.handleUpdateUserArr}
          val={this.state.userInput}
        />
        <List userArr={this.state.userArr} />
      </div>
    );
  }
}
