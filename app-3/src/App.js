import React, { Component } from 'react';
import './css/App.css';
import AddTo from './component/AddTo';
import FilteredList from './component/FilteredList';

export default class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      userInput: '',
      userArr: ['this', 'Name', 'JavaScript', 'find'],
    };
  }

  handleUpdateInput = (val) => {
    this.setState({
      userInput: val,
    });
  };

  handleUpdateArr = () => {
    this.setState({
      userArr: [...this.state.userArr, this.state.userInput],
      userInput: '',
    });
  };

  render() {
    return (
      <div className="app">
        <h1>You can add at filter this list</h1>
        <AddTo
          userInput={this.handleUpdateInput}
          userArr={this.handleUpdateArr}
          val={this.state.userInput}
        />
        <FilteredList Arr={this.state.userArr} />
      </div>
    );
  }
}
