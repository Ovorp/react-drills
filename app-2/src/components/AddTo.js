import React, { Component } from 'react';

export default class AddTo extends Component {
  render() {
    return (
      <div>
        <input onChange={this.props.updateInput} value={this.props.val} />
        <button onClick={this.props.updateArr}>
          Click here to add to list
        </button>
      </div>
    );
  }
}
