import React, { Component } from 'react';

export default class AddTo extends Component {
  render() {
    return (
      <div>
        <input
          placeholder="add text here"
          onChange={this.props.userInput}
          value={this.props.val}
        />
        <button onClick={this.props.userArr}>
          Click here to add to the list
        </button>
      </div>
    );
  }
}
