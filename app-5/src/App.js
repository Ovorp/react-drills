import React, { Component } from 'react';
import Image from './components/Image';
import './css/App.css';

export default class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      userInput: '',
      imgUrl: 'https://via.placeholder.com/500',
    };
  }

  handleUpdateInput = (e) => {
    this.setState({
      userInput: e.target.value,
    });
  };

  handleSubmit = () => {
    this.setState({
      imgUrl: this.state.userInput,
      userInput: '',
    });
  };

  render() {
    return (
      <div className="app">
        <h1>Your image is below</h1>
        <Image
          imgUrl={this.state.imgUrl}
          userInput={this.state.userInput}
          updateInput={this.handleUpdateInput}
          updateSubmit={this.handleSubmit}
        />
      </div>
    );
  }
}
