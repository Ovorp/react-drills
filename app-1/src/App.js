import React, { Component } from 'react';
import './App.css';

export default class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      userInput: '',
    };
  }

  handlerUserInput = (e) => {
    this.setState({
      userInput: e.target.value,
    });
  };

  render() {
    return (
      <div className="app">
        <input
          onChange={this.handlerUserInput}
          value={this.state.userInput}
          placeholder="Type here!"
        />
        <h1>{this.state.userInput}</h1>
      </div>
    );
  }
}
